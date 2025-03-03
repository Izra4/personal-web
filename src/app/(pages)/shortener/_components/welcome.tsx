const Welcome = ({ lexend }: { lexend: string }) => {
  return (
    <div className={`${lexend} mb-8`}>
      <p className={`text-primary_text text-center text-2xl font-semibold`}>
        Make your
        <span className="text-secondary_text"> URL </span>
        simpler here,
        <br />
        you can also
        <span className="text-secondary_text"> customize </span> and make it more secure with
        <span className="text-secondary_text"> password! </span>
      </p>
      <p className="text-primary_text text-xs text-center mt-4 -mb-6">
        Don&apos;t worry, it&apos;s permanent as long as my server doesn&apos;t get down...
      </p>
    </div>
  );
};
export default Welcome;
