import Form from "./form";
import Welcome from "./welcome";

const Index = ({ lexend, poppins }: { lexend: string; poppins: string }) => {
  return (
    <div className="m-12 flex justify-center items-center flex-col overflow-x-hidden">
      <Welcome lexend={lexend} />
      <Form poppins={poppins}></Form>
    </div>
  );
};

export default Index;
