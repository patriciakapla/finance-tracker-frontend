import { useState } from "react";
import Button from "../components/Button";
import Dialog from "../components/Dialog";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      home <Button onClick={handleToggleDialog}>Abre dialog</Button>
      <Dialog isOpen={isOpen}>
        <form>
          <input type="date" />
        </form>
      </Dialog>
    </div>
  );
}

export default Home;
