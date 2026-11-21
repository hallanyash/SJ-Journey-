const TrustpilotBadge = ({ className = "" }) => (
  <div className={`flex flex-col items-start gap-1 ${className}`}>
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-[#00b67a]" aria-hidden="true">
        <polygon points="12,1 15.1,8.6 23.3,9.2 17,14.5 19,22.5 12,18.1 5,22.5 0.7,9.2 8.9,8.6" />
      </svg>
      <span className="text-[26px] font-medium text-[#191919]">Trustpilot</span>
    </div>
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="flex h-[30px] w-[30px] items-center justify-center bg-[#00b67a]">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
            <polygon points="12,2 14.9,8.9 22,9.5 16.6,14.2 18.2,21.3 12,17.6 5.8,21.3 7.4,14.2 2,9.5 9.1,8.9" />
          </svg>
        </span>
      ))}
    </div>
  </div>
);

export default TrustpilotBadge;
