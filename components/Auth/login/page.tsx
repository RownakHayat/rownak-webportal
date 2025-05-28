// "use client";

// import { zodResolver } from '@hookform/resolvers/zod';
// import { useRouter } from 'next/navigation';
// import React from 'react'
// import { useForm } from 'react-hook-form';
// import * as z from "zod";


// const formSchema = z.object({
//   email: z.string()
//     .min(3, { message: "Email must be at least 3 characters long." })
//     .refine((value) => {
//       return /^\d+$/.test(value) || /\S+@\S+\.\S+/.test(value);
//     }, { message: "Invalid email format or not a valid number." }),
//   password: z.string().min(6, { message: "Password must be at least 6 characters." }),
// });


// const Login = () => {

//  const router = useRouter()
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   })

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//   try {
//     const res = await fetch("https://api.example.com/user");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error("Error fetching user:", err);
//   }
// }


//   return (
//     <div>
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//             <div className="">
//                 <input type="email" />
//                 <input type="text" />
//             </div>
//         </form>
//     </div>
//   )
// }

// export default Login