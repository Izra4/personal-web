import Form from "./form";
import Welcome from "./welcome";

const Index = ({ lexend, poppins }: { lexend: string; poppins: string }) => {
  return (
    <div className="mt-12 flex justify-center items-center flex-col">
      <Welcome lexend={lexend} />
      <Form poppins={poppins}></Form>
    </div>
  );
};

export default Index;
