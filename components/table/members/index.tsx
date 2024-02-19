
import { Membro } from "@prisma/client";

export default function MembersTable({members}: {members:Membro}){
    return(
        <tbody>
            <tr className="border-b hover:bg-blue-100">
                <th className="px-6 py-6 font-medium text-md xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                   {members.id} 
                </th>
                <th className="px-6 py-6 font-medium text-md xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                   {members.cargo} 
                </th>
                <th className="px-6 py-6 font-medium text-md xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                   {members.email} 
                </th>
            </tr>
        </tbody>
               
    )
}