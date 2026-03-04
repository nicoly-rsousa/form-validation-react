import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from './Schema/schema'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import './index.css'


type FormData = z.infer<typeof formSchema>

export default function App() {
    const { handleSubmit, register, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    })
    const navigate = useNavigate()
    const onSubmit = (data: FormData) => {
        console.log(data) //  validação
        navigate('/sucesso') // redireciona para a página 
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-6">Formulário de Endereço</h2>
                {/* Campo CPF */}
                <div className="flex flex-col gap-1 mb-4">
                    <label className="font-bold text-sm">CPF</label>
                    <input
                        {...register('cpf')}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Somente números"
                    />
                    {errors.cpf && (
                        <span className="text-red-500 text-sm">{errors.cpf.message}</span>
                    )}
                </div>

                {/* Campo Nome */}
                <div className="flex flex-col gap-1 mb-4">
                    <label className="font-bold text-sm">Nome Completo</label>
                    <input
                        {...register('nomeCompleto')}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Digite seu nome completo"
                    />
                    {errors.nomeCompleto && (
                        <span className="text-red-500 text-sm">{errors.nomeCompleto.message}</span>
                    )}
                </div>

                {/* Campo CEP */}
                <div className="flex flex-col gap-1 mb-4">
                    <label className="font-bold text-sm">CEP</label>
                    <input
                        {...register('cep')}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Digite seu CEP"
                    />
                    {errors.cep && (
                        <span className="text-red-500 text-sm">{errors.cep.message}</span>
                    )}
                </div>


                {/* Campo Rua */}
                <div className="flex flex-col gap-1 mb-4">
                    <label className="font-bold text-sm">Rua</label>
                    <input
                        {...register('rua')}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Digite seu rua"
                    />
                    {errors.rua && (
                        <span className="text-red-500 text-sm">{errors.rua.message}</span>
                    )}
                </div>


                {/* Campo Número */}
                <div className="flex flex-col gap-1 mb-4">
                    <label className="font-bold text-sm">Número</label>
                    <input
                        {...register('numero')}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Digite o número"
                    />
                    {errors.numero && (
                        <span className="text-red-500 text-sm">{errors.numero.message}</span>
                    )}
                </div>

                {/* Campo Complemento */}
                <div className="flex flex-col gap-1 mb-4">
                    <label className="font-bold text-sm">Complemento</label>
                    <input
                        {...register('complemento')}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Digite o complemento"
                    />
                    {errors.complemento && (
                        <span className="text-red-500 text-sm">{errors.complemento.message}</span>
                    )}
                </div>
                {/* Campo Bairro */}
                <div className="flex flex-col gap-1 mb-4">
                    <label className="font-bold text-sm">Bairro</label>
                    <input
                        {...register('bairro')}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Digite seu bairro"
                    />
                    {errors.bairro && (
                        <span className="text-red-500 text-sm">{errors.bairro.message}</span>
                    )}
                </div>
                {/* Campo Cidade */}
                <div className="flex flex-col gap-1 mb-4">
                    <label className="font-bold text-sm">Cidade</label>
                    <input
                        {...register('cidade')}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Digite sua cidade"
                    />
                    {errors.cidade && (
                        <span className="text-red-500 text-sm">{errors.cidade.message}</span>
                    )}
                </div>
                {/* Campo Estado */}
                <div className="flex flex-col gap-1 mb-4">
                    <label className="font-bold text-sm">Estado</label>
                    <input
                        {...register('estado')}
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Digite seu estado"
                    />
                    {errors.estado && (
                        <span className="text-red-500 text-sm">{errors.estado.message}</span>
                    )}
                </div>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition' type="submit"  >Enviar</button>
            </div>
        </form>
    )
}