export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-bg-main p-10 flex items-center justify-center">
      <div className="bg-white p-12 rounded-[2.5rem] shadow-sm text-center border border-border-color/40">
        <h1 className="text-3xl font-bold text-text-main mb-4">Admin Dashboard</h1>
        <p className="text-text-muted">Welcome to the admin portal. Here you can manage users, doctors, and system settings.</p>
      </div>
    </div>
  );
}
