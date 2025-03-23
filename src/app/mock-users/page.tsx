import { revalidatePath } from "next/cache";

type User = {
    id: number;
    name: string;
}

export default async function UsersServer(){
    await new Promise(resolve=>setTimeout(resolve, 1000));
    const response = await fetch(`http://localhost:3000/api/users`);
    const users = await response.json();

    async function addUser(formData: FormData) {
        "use server";
        const name = formData.get("name");
        const res = await fetch(`http://localhost:3000/api/users`,{
            method: "POST",
            headers: {
                "content-type":"application/json",
            },
            body: JSON.stringify({name})
        })
        const newUser = await res.json();
        console.log(newUser);
        revalidatePath("/mock-users");  
    }
    return (
        <div className="py-10">
      <form action={addUser} className="mb-4">
        <input
          type="text"
          name="name"
          required
          className="p-2 mr-2 border border-gray-300 rounded text-white"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4 ">
        {users.map((user: User) => (
          <div
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
    )
}