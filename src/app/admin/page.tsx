"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DemoSubmission, SubmissionStatus } from "@/lib/submissions";

const orgTypesList = [
  "All Types",
  "Private School",
  "Sports Club",
  "Coaching Centre",
  "Sports Training Centre",
  "Community Organisation",
  "Other",
];

const ageGroupsList = ["All Ages", "Pre-Primary", "Primary", "Secondary"];

const statusList: { label: string; value: string; color: string }[] = [
  { label: "All Statuses", value: "all", color: "text-white" },
  { label: "Pending", value: "pending", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
  { label: "Contacted", value: "contacted", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
  { label: "Scheduled", value: "scheduled", color: "text-purple-400 bg-purple-400/10 border-purple-400/20" },
  { label: "Completed", value: "completed", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
];

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const [submissions, setSubmissions] = useState<DemoSubmission[]>([]);
  const [storageType, setStorageType] = useState<string>("detecting...");
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filters State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOrgType, setSelectedOrgType] = useState("All Types");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("All Ages");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [dateFilter, setDateFilter] = useState<"all" | "today" | "yesterday" | "7days" | "30days" | "custom">("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "org">("newest");

  // Modals
  const [selectedSubmission, setSelectedSubmission] = useState<DemoSubmission | null>(null);
  const [editingSubmission, setEditingSubmission] = useState<DemoSubmission | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<DemoSubmission | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Check auth on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/check");
      if (res.ok) {
        setIsAuthenticated(true);
        fetchSubmissions();
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setPassword("");
        fetchSubmissions();
      } else {
        setLoginError(data.error || "Incorrect admin password");
      }
    } catch {
      setLoginError("Failed to connect to authentication service");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      setIsAuthenticated(false);
      setSubmissions([]);
    }
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/demo");
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmissions(data.submissions);
        setStorageType(data.storage === "mongodb" ? "MongoDB Database" : "Local Store");
      } else {
        setError(data.error || "Failed to load submissions");
      }
    } catch {
      setError("Network error fetching submissions");
    } finally {
      setLoading(false);
    }
  };

  // Update Submission API call
  const handleUpdateSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSubmission) return;
    setActionLoading(true);

    try {
      const res = await fetch("/api/demo", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingSubmission),
      });
      const result = await res.json();

      if (res.ok && result.success) {
        setSubmissions((prev) =>
          prev.map((item) => (item.id === editingSubmission.id ? { ...item, ...editingSubmission } : item))
        );
        if (selectedSubmission?.id === editingSubmission.id) {
          setSelectedSubmission(editingSubmission);
        }
        setEditingSubmission(null);
      } else {
        alert(result.error || "Failed to update submission");
      }
    } catch {
      alert("Error updating record");
    } finally {
      setActionLoading(false);
    }
  };

  // Delete Submission API call
  const handleDeleteSubmission = async () => {
    if (!deleteCandidate) return;
    setActionLoading(true);

    try {
      const res = await fetch("/api/demo", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: deleteCandidate.id }),
      });
      const result = await res.json();

      if (res.ok && result.success) {
        setSubmissions((prev) => prev.filter((item) => item.id !== deleteCandidate.id));
        if (selectedSubmission?.id === deleteCandidate.id) {
          setSelectedSubmission(null);
        }
        setDeleteCandidate(null);
      } else {
        alert(result.error || "Failed to delete submission");
      }
    } catch {
      alert("Error deleting record");
    } finally {
      setActionLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedOrgType("All Types");
    setSelectedAgeGroup("All Ages");
    setSelectedStatus("all");
    setDateFilter("all");
    setFromDate("");
    setToDate("");
    setSortBy("newest");
  };

  // Date check helper
  const matchesDateRange = (createdAt: string) => {
    if (dateFilter === "all") return true;

    const itemDate = new Date(createdAt);
    const now = new Date();

    if (dateFilter === "today") {
      return itemDate.toDateString() === now.toDateString();
    }
    if (dateFilter === "yesterday") {
      const yesterday = new Date();
      yesterday.setDate(now.getDate() - 1);
      return itemDate.toDateString() === yesterday.toDateString();
    }
    if (dateFilter === "7days") {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(now.getDate() - 7);
      return itemDate >= sevenDaysAgo;
    }
    if (dateFilter === "30days") {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(now.getDate() - 30);
      return itemDate >= thirtyDaysAgo;
    }
    if (dateFilter === "custom") {
      const start = fromDate ? new Date(fromDate) : null;
      const end = toDate ? new Date(toDate + "T23:59:59") : null;
      if (start && itemDate < start) return false;
      if (end && itemDate > end) return false;
      return true;
    }
    return true;
  };

  // Filter & Sort Logic
  const filteredSubmissions = submissions
    .filter((item) => {
      // 1. Search text
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.organisationName.toLowerCase().includes(q) ||
        item.contactName.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.phone.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q);

      // 2. Org Type
      const matchesOrg = selectedOrgType === "All Types" || item.organisationType === selectedOrgType;

      // 3. Age Group
      const matchesAge = selectedAgeGroup === "All Ages" || item.ageGroups.includes(selectedAgeGroup);

      // 4. Status
      const matchesStatus = selectedStatus === "all" || item.status === selectedStatus;

      // 5. Date filter
      const matchesDate = matchesDateRange(item.createdAt);

      return matchesSearch && matchesOrg && matchesAge && matchesStatus && matchesDate;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      if (sortBy === "oldest") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      if (sortBy === "org") {
        return a.organisationName.localeCompare(b.organisationName);
      }
      return 0;
    });

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedOrgType !== "All Types" ||
    selectedAgeGroup !== "All Ages" ||
    selectedStatus !== "all" ||
    dateFilter !== "all" ||
    fromDate !== "" ||
    toDate !== "" ||
    sortBy !== "newest";

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case "contacted":
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">Contacted</span>;
      case "scheduled":
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-500/15 text-purple-400 border border-purple-500/30">Scheduled</span>;
      case "completed":
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">Completed</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">Pending</span>;
    }
  };

  // 1. Loading
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[var(--color-dark)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // 2. Login Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--color-dark)] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gradient-end)] flex items-center justify-center font-bold text-black text-xl mx-auto mb-3 shadow-lg shadow-[var(--color-primary)]/20">
              LH
            </div>
            <h1 className="text-2xl font-bold font-[var(--font-heading)] text-white">
              Lilhawkers Admin Portal
            </h1>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">
              Restricted Area • Authorized Personnel Only
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10 shadow-2xl">
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoFocus
                    placeholder="Enter password (default: admin123)"
                    className="form-input pr-10 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {loginError && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{loginError}</span>
                </div>
              )}

              <button type="submit" className="btn-primary w-full justify-center text-sm py-3">
                <span>Unlock Dashboard</span>
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
              <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
                ← Return to Website
              </Link>
              <span>Default: admin123</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Authenticated Dashboard
  return (
    <div className="min-h-screen bg-[var(--color-dark)] text-[var(--color-text)] p-4 sm:p-8 lg:p-10 font-[var(--font-body)]">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gradient-end)] flex items-center justify-center font-bold text-black text-sm">
                LH
              </div>
              <h1 className="text-2xl font-bold font-[var(--font-heading)] text-white">
                Lilhawkers Admin Portal
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Manage B2B demo requests, update inquiry statuses, and filter records date-wise
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="px-3.5 py-2 rounded-xl glass text-xs font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <svg
                className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[var(--color-primary)]" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              {loading ? "Refreshing..." : "Refresh"}
            </button>
            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-2 rounded-xl bg-white/10 text-white text-xs font-medium hover:bg-white/15 transition-colors flex items-center gap-1.5"
            >
              <span>Website</span>
              <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-medium hover:bg-red-500/20 transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="glass-card p-4 rounded-2xl border border-white/5">
            <span className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider font-semibold">
              Total Inquiries
            </span>
            <p className="text-2xl sm:text-3xl font-bold text-white font-[var(--font-heading)] mt-0.5">
              {submissions.length}
            </p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/5">
            <span className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider font-semibold">
              Filtered Records
            </span>
            <p className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] font-[var(--font-heading)] mt-0.5">
              {filteredSubmissions.length}
            </p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/5">
            <span className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider font-semibold">
              Pending Actions
            </span>
            <p className="text-2xl sm:text-3xl font-bold text-amber-400 font-[var(--font-heading)] mt-0.5">
              {submissions.filter((s) => !s.status || s.status === "pending").length}
            </p>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/5">
            <span className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider font-semibold">
              Storage Engine
            </span>
            <p className="text-sm font-semibold text-white mt-1.5 flex items-center gap-1.5 truncate">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] shrink-0" />
              {storageType}
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="glass-card p-5 rounded-2xl border border-white/5 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by org, contact, phone, email, city..."
                style={{ paddingLeft: "2.75rem", paddingRight: "1rem" }}
                className="w-full h-10 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-white/40 focus:border-[var(--color-primary)] focus:outline-none transition-all"
              />
              <svg
                className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dropdown Filters Grid */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Date Filter Preset */}
              <div className="flex items-center gap-1">
                {/* <span className="text-[11px] text-[var(--color-text-secondary)] hidden sm:inline">📅</span> */}
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value as any)}
                  className="h-10 px-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white focus:border-[var(--color-primary)] focus:outline-none cursor-pointer"
                >
                  <option value="all" className="bg-[var(--color-dark)]">All Time</option>
                  <option value="today" className="bg-[var(--color-dark)]">Today</option>
                  <option value="yesterday" className="bg-[var(--color-dark)]">Yesterday</option>
                  <option value="7days" className="bg-[var(--color-dark)]">Last 7 Days</option>
                  <option value="30days" className="bg-[var(--color-dark)]">Last 30 Days</option>
                  <option value="custom" className="bg-[var(--color-dark)]">Custom Date Range</option>
                </select>
              </div>

              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="h-10 px-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white focus:border-[var(--color-primary)] focus:outline-none cursor-pointer"
              >
                {statusList.map((st) => (
                  <option key={st.value} value={st.value} className="bg-[var(--color-dark)]">
                    {st.label}
                  </option>
                ))}
              </select>

              {/* Org Type Filter */}
              <select
                value={selectedOrgType}
                onChange={(e) => setSelectedOrgType(e.target.value)}
                className="h-10 px-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white focus:border-[var(--color-primary)] focus:outline-none cursor-pointer"
              >
                {orgTypesList.map((type) => (
                  <option key={type} value={type} className="bg-[var(--color-dark)]">
                    {type}
                  </option>
                ))}
              </select>

              {/* Age Group Filter */}
              <select
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                className="h-10 px-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white focus:border-[var(--color-primary)] focus:outline-none cursor-pointer"
              >
                {ageGroupsList.map((age) => (
                  <option key={age} value={age} className="bg-[var(--color-dark)]">
                    {age}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "newest" | "oldest" | "org")}
                className="h-10 px-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white focus:border-[var(--color-primary)] focus:outline-none cursor-pointer"
              >
                <option value="newest" className="bg-[var(--color-dark)]">Newest First</option>
                <option value="oldest" className="bg-[var(--color-dark)]">Oldest First</option>
                <option value="org" className="bg-[var(--color-dark)]">Org (A-Z)</option>
              </select>

              {/* Reset Button */}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="h-10 px-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  ✕ Reset
                </button>
              )}
            </div>
          </div>

          {/* Custom Date Range Inputs (when 'custom' is selected) */}
          {dateFilter === "custom" && (
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/10 flex-wrap">
              <span className="text-xs text-[var(--color-text-secondary)] font-medium">Select Date Range:</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/60">From:</span>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="h-8 px-2 bg-white/5 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[var(--color-primary)] cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/60">To:</span>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="h-8 px-2 bg-white/5 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[var(--color-primary)] cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Table */}
        {loading && submissions.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-2xl border border-white/5">
            <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs text-[var(--color-text-secondary)]">Loading demo submissions...</p>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-2xl border border-white/5">
            <p className="text-white font-semibold text-base mb-1">No Inquiries Found</p>
            <p className="text-xs text-[var(--color-text-secondary)] mb-3">
              {hasActiveFilters ? "No records match your selected filters." : "No demo requests recorded yet."}
            </p>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="glass-card rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-white/[0.03] text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] border-b border-white/5">
                  <tr>
                    <th className="py-3.5 px-4 font-semibold">Reference ID</th>
                    <th className="py-3.5 px-4 font-semibold">Status</th>
                    <th className="py-3.5 px-4 font-semibold">Organisation</th>
                    <th className="py-3.5 px-4 font-semibold">Contact Person</th>
                    <th className="py-3.5 px-4 font-semibold">Phone & Email</th>
                    <th className="py-3.5 px-4 font-semibold">Target Age</th>
                    <th className="py-3.5 px-4 font-semibold">Location</th>
                    <th className="py-3.5 px-4 font-semibold">Date</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs">
                  {filteredSubmissions.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => setSelectedSubmission(item)}
                      className="hover:bg-white/[0.03] transition-colors cursor-pointer group"
                    >
                      {/* ID */}
                      <td className="py-3.5 px-4 font-mono text-[11px] text-[var(--color-primary)] whitespace-nowrap">
                        <span className="group-hover:underline">{item.id}</span>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {getStatusBadge(item.status)}
                      </td>

                      {/* Org */}
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-white">{item.organisationName}</div>
                        <div className="text-[10px] text-[var(--color-text-secondary)]">
                          {item.organisationType}
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="py-3.5 px-4 text-white whitespace-nowrap">
                        {item.contactName}
                      </td>

                      {/* Phone & Email */}
                      <td className="py-3.5 px-4">
                        <div className="text-white font-mono">{item.phone}</div>
                        <div className="text-[10px] text-[var(--color-text-secondary)]">{item.email}</div>
                      </td>

                      {/* Age */}
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1">
                          {item.ageGroups.map((g) => (
                            <span
                              key={g}
                              className="px-2 py-0.5 rounded text-[10px] font-medium bg-[var(--color-primary)]/15 text-[var(--color-primary)] border border-[var(--color-primary)]/20 whitespace-nowrap"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Location */}
                      <td className="py-3.5 px-4 text-white whitespace-nowrap">
                        {item.location}
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-4 text-[var(--color-text-secondary)] text-[11px] whitespace-nowrap">
                        {new Date(item.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* View */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSubmission(item);
                            }}
                            title="View Details"
                            className="p-1.5 rounded-lg glass text-white/80 hover:text-[var(--color-primary)] transition-colors"
                          >
                            👁
                          </button>
                          {/* Edit */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingSubmission({ ...item });
                            }}
                            title="Edit / Update"
                            className="p-1.5 rounded-lg glass text-white/80 hover:text-blue-400 transition-colors"
                          >
                            ✎
                          </button>
                          {/* Delete */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteCandidate(item);
                            }}
                            title="Delete"
                            className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                          >
                            🗑
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 1. Compact Details Modal */}
        {selectedSubmission && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedSubmission(null)}
          >
            <div
              className="bg-[#121212] border border-white/10 rounded-2xl w-full max-w-xl shadow-2xl p-5 space-y-3.5 animate-fade-in-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-2.5 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/30 text-[10px] font-mono font-semibold text-[var(--color-primary)]">
                      {selectedSubmission.id}
                    </span>
                    {getStatusBadge(selectedSubmission.status)}
                    <button
                      onClick={() => handleCopy(selectedSubmission.id)}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] text-white/80 transition-colors cursor-pointer"
                    >
                      {copiedId ? "✓ Copied" : "Copy ID"}
                    </button>
                  </div>
                  <h3 className="text-lg font-bold font-[var(--font-heading)] text-white">
                    {selectedSubmission.organisationName}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {selectedSubmission.organisationType} • <span className="text-white/80">{selectedSubmission.location}</span>
                  </p>
                </div>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white text-xs transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="glass-card p-2.5 rounded-xl border border-white/5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[var(--color-primary)] block">Contact</span>
                  <p className="font-semibold text-white truncate mt-0.5">{selectedSubmission.contactName}</p>
                </div>
                <div className="glass-card p-2.5 rounded-xl border border-white/5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[var(--color-primary)] block">Phone</span>
                  <p className="font-semibold text-white font-mono truncate mt-0.5">
                    <a href={`tel:${selectedSubmission.phone}`} className="hover:text-[var(--color-primary)] underline">
                      {selectedSubmission.phone}
                    </a>
                  </p>
                </div>
                <div className="glass-card p-2.5 rounded-xl border border-white/5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[var(--color-primary)] block">Email</span>
                  <p className="font-semibold text-white truncate mt-0.5">
                    <a href={`mailto:${selectedSubmission.email}`} className="hover:text-[var(--color-primary)] underline">
                      {selectedSubmission.email}
                    </a>
                  </p>
                </div>
                <div className="glass-card p-2.5 rounded-xl border border-white/5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[var(--color-primary)] block">Received</span>
                  <p className="text-white/90 text-[11px] truncate mt-0.5">
                    {new Date(selectedSubmission.createdAt).toLocaleString("en-IN", {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>

              <div className="glass-card p-2.5 rounded-xl border border-white/5">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-[var(--color-primary)] block mb-1">Target Age Groups</span>
                <div className="flex flex-wrap gap-1">
                  {selectedSubmission.ageGroups.map((g) => (
                    <span key={g} className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[var(--color-primary)]/15 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-2.5 rounded-xl border border-white/5">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-[var(--color-primary)] block mb-0.5">Message</span>
                <p className="text-xs text-white/80 leading-relaxed">
                  {selectedSubmission.message ? selectedSubmission.message : <span className="text-white/30 italic">No notes provided.</span>}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-xs">
                <div className="flex gap-1.5">
                  <button
                    onClick={() => {
                      const item = selectedSubmission;
                      setSelectedSubmission(null);
                      setEditingSubmission({ ...item });
                    }}
                    className="px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 text-xs font-semibold transition-colors"
                  >
                    ✎ Edit Record
                  </button>
                  <button
                    onClick={() => {
                      const item = selectedSubmission;
                      setSelectedSubmission(null);
                      setDeleteCandidate(item);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-semibold transition-colors"
                  >
                    🗑 Delete
                  </button>
                </div>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. Edit / Update Modal */}
        {editingSubmission && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setEditingSubmission(null)}
          >
            <div
              className="bg-[#121212] border border-white/15 rounded-2xl w-full max-w-lg shadow-2xl p-5 space-y-4 animate-fade-in-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>✎ Edit Inquiry:</span>
                  <span className="font-mono text-xs text-[var(--color-primary)]">{editingSubmission.id}</span>
                </h3>
                <button
                  onClick={() => setEditingSubmission(null)}
                  className="text-white/60 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleUpdateSubmission} className="space-y-3 text-xs">
                {/* Status Dropdown */}
                <div>
                  <label className="block text-[10px] font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-1">
                    Inquiry Status
                  </label>
                  <select
                    value={editingSubmission.status || "pending"}
                    onChange={(e) => setEditingSubmission({ ...editingSubmission, status: e.target.value as SubmissionStatus })}
                    className="w-full h-9 px-3 bg-white/5 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[var(--color-primary)]"
                  >
                    <option value="pending" className="bg-[var(--color-dark)]">Pending (New)</option>
                    <option value="contacted" className="bg-[var(--color-dark)]">Contacted</option>
                    <option value="scheduled" className="bg-[var(--color-dark)]">Demo Scheduled</option>
                    <option value="completed" className="bg-[var(--color-dark)]">Completed</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-white/70 mb-1">Organisation</label>
                    <input
                      type="text"
                      value={editingSubmission.organisationName}
                      onChange={(e) => setEditingSubmission({ ...editingSubmission, organisationName: e.target.value })}
                      required
                      className="w-full h-8 px-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-white/70 mb-1">Organisation Type</label>
                    <select
                      value={editingSubmission.organisationType}
                      onChange={(e) => setEditingSubmission({ ...editingSubmission, organisationType: e.target.value })}
                      className="w-full h-8 px-2 bg-white/5 border border-white/10 rounded-lg text-xs text-white"
                    >
                      {orgTypesList.filter((t) => t !== "All Types").map((t) => (
                        <option key={t} value={t} className="bg-[var(--color-dark)]">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-white/70 mb-1">Contact Person</label>
                    <input
                      type="text"
                      value={editingSubmission.contactName}
                      onChange={(e) => setEditingSubmission({ ...editingSubmission, contactName: e.target.value })}
                      required
                      className="w-full h-8 px-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-white/70 mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={editingSubmission.phone}
                      onChange={(e) => setEditingSubmission({ ...editingSubmission, phone: e.target.value })}
                      required
                      className="w-full h-8 px-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-white/70 mb-1">Email</label>
                    <input
                      type="email"
                      value={editingSubmission.email}
                      onChange={(e) => setEditingSubmission({ ...editingSubmission, email: e.target.value })}
                      required
                      className="w-full h-8 px-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-white/70 mb-1">Location / City</label>
                    <input
                      type="text"
                      value={editingSubmission.location}
                      onChange={(e) => setEditingSubmission({ ...editingSubmission, location: e.target.value })}
                      required
                      className="w-full h-8 px-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-white/70 mb-1">Notes / Message</label>
                  <textarea
                    rows={2}
                    value={editingSubmission.message || ""}
                    onChange={(e) => setEditingSubmission({ ...editingSubmission, message: e.target.value })}
                    className="w-full p-2 bg-white/5 border border-white/10 rounded-lg text-xs text-white resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setEditingSubmission(null)}
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 text-white text-xs hover:bg-white/20 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="px-4 py-1.5 rounded-lg bg-[var(--color-primary)] text-black text-xs font-bold hover:bg-[var(--color-primary-light)] transition-colors"
                  >
                    {actionLoading ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* 3. Delete Confirmation Dialog */}
        {deleteCandidate && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setDeleteCandidate(null)}
          >
            <div
              className="bg-[#141414] border border-red-500/20 rounded-2xl w-full max-w-sm shadow-2xl p-5 space-y-4 animate-fade-in-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center text-lg font-bold mx-auto">
                🗑
              </div>
              <div className="text-center">
                <h3 className="text-sm font-bold text-white">Delete Inquiry?</h3>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                  Are you sure you want to permanently delete record for{" "}
                  <strong className="text-white">{deleteCandidate.organisationName}</strong> ({deleteCandidate.id})?
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => setDeleteCandidate(null)}
                  className="px-4 py-1.5 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteSubmission}
                  disabled={actionLoading}
                  className="px-4 py-1.5 rounded-lg bg-red-500 text-white text-xs font-bold hover:bg-red-600 transition-colors"
                >
                  {actionLoading ? "Deleting..." : "Yes, Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
