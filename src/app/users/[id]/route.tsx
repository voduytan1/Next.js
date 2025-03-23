import {users} from "../route";

export async function GET(_request: Request,{params}: {params: { id: string }}){
    const {id} = await params;
    const responseuser = users.find((user) => user.id === Number(id));
    if (!responseuser) {
        return Response.json({ error: "User not found" }, { status: 404 });
    }
    return Response.json(responseuser);
}