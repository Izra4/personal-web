const Welcome = ({ lexend }: { lexend: string }) => {
  return (
    <div className="mb-8">
      <p className={`${lexend} text-primary_text text-center text-2xl font-semibold`}>
        Shorten the
        <span className="text-secondary_text"> URL </span>
        you’ve here,
        <br />
        you can also
        <span className="text-secondary_text"> customize </span> it!
      </p>
    </div>
  );
};
export default Welcome;
