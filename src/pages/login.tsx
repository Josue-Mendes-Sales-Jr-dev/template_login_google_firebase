import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import Link from "next/link";
import { useState } from "react";
import UseAuthCtx from "@/hook/useAuthContext";

export default function Login() {
      const[email, setEmail]=useState('')
      const[password, setPassword]=useState('')

      const useAuth=UseAuthCtx()

    return(
        <>
        <div className="w-screen h-[100vh] flex items-center justify-center">
            <Card title="Login">
            <Input type="email" placeHolder="Digite seu email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <Input type="password" placeHolder="Digite sua senha" value={password} onChange={e=>setPassword(e.target.value)}/>
            <Button title="Entrar"/>
            <hr />
            <Button onChange={useAuth.onChance} className="bg-red-500 hover:bg-red-400" title="Entrar com o google"/>
            <p className="w-[100%]"> Novo por aqui?
                <Link href='/register' className="text-blue-400 w-[90%]"> Crie sua conta gratuitamente</Link>
            </p>
            </Card>
        </div>
        </>

    )
}