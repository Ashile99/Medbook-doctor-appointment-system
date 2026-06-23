export default function Appointments() {
  return (
    <div className="p-6 sm:p-10 flex-1">
      <h1 className="text-2xl font-bold text-[#102A43] mb-8">My Appointments</h1>
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-border-color/40 text-center">
        <p className="text-[#627D98]">You have no upcoming appointments.</p>
      </div>
    </div>
  );
}
