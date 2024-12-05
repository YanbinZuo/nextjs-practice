import { verifyAuth } from "@/lib/auth";
import { getTrainings } from "@/lib/training";
import { redirect } from "next/navigation";

const TrainingPage = async () => {
  const result = await verifyAuth();
  console.log("result: ", result)
  if(!result.user) {
    return redirect("/")
  }

  const trainingSessions = getTrainings();

  return (
    <main>
      <h1>Find your favorite activity</h1>
      <ul id="training-sessions">
        {trainingSessions.map((training) => (
          <li key={training.id}>
            <img src={`/trainings/${training.image}`} alt={training.title} />
            <div>
              <h2>{training.title}</h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default TrainingPage;
