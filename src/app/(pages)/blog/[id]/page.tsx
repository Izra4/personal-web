import Navbar from "@/app/_components/navigation";

const PageDetails: React.FC = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col overflow-x-hidden">
      <Navbar></Navbar>
      <h1>Blog Details</h1>
    </div>
  );
};

export default PageDetails;
