import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
    const[email, setEmail]=useState('')
      const[name, setName]=useState('')
      const[password, setPassword]=useState('')

    return(
        <>
        <div className="w-screen h-[100vh] flex items-center justify-center">
            <Card title="Cadastre sua conta">
            <Input type="text" placeHolder="Digite seu nome" value={name} onChange={e=>setName(e.target.value)}/>
            <Input type="email" placeHolder="Digite seu email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <Input type="password" placeHolder="Digite sua senha" value={password} onChange={e=>setPassword(e.target.value)}/>
            <Button title="Cadastrar"/>
            <p className="w-[100%]"> Já tem seu cadastro?
                <Link href='/login' className="text-blue-400 w-[90%]"> Use seu registro</Link>
            </p>        
            </Card>
        </div>
        </>

    )
}