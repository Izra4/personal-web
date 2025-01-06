"use client";
import Input from "./input";

const ReviewForm = ({poppins} : {poppins: string}) => {
  return (
    <form className="flex flex-col w-full h-full text-primary_text font-medium text-md">
      <Input
        poppinsClass={poppins}
        id="name"
        name="name"
        label="Name / Initials (optional)"
        placeholder="optional"
        isTextarea={false}
      />
      <Input
        poppinsClass={poppins}
        id="review"
        name="review"
        label="Your honest review"
        placeholder="Give me your best words"
        isTextarea={true}
      />
    </form>
  );
};

export default ReviewForm;
