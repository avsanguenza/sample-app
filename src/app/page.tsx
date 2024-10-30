import Vanish from "./vanish";
import Stopwatch from "./stopwatch";
import Todo from "./todo";
import Form from "./form";
export default function Home() {
  return (
    <>

    <div className="flex flex-col justify-center items-center  gap-y-5">
      <div>
        <Vanish/>
      </div>
      <div>
      <Stopwatch/>
      </div>
      <div>
      <Todo/>
      </div>
      <div>
      <Form/>
      </div>
    </div>
    </>
  );
}
