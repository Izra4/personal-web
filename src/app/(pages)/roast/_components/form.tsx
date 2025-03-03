"use client";
import Input from "./input";

const ReviewForm = ({
  poppins,
  name,
  setName,
  review,
  setReview,
}: {
  poppins: string;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  review: string;
  setReview: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <form className="flex flex-col w-full h-full text-primary_text font-medium text-md">
      <Input
        poppinsClass={poppins}
        id="name"
        name="name"
        label="Name / Initials (optional)"
        placeholder="optional"
        isTextarea={false}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        poppinsClass={poppins}
        id="review"
        name="review"
        label="Your honest review"
        placeholder="Give me your best words"
        isTextarea={true}
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
    </form>
  );
};

export default ReviewForm;
