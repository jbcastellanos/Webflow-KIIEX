import data from '../assets/data.json';

function Form() {

    return (
        <form className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto p-4 bg-[#f3f3f3] justify-center w-10/12 rounded-md px-12 py-20">
            <h1 className='md:col-span-4 text-2xl font-bold text-[#2a173a]'>Informacion de la Empresa</h1>
            <hr className="md:col-span-4 mb-4 mt-[-20px]"/>
            <div className="md:col-span-3">
                <label htmlFor="company-name" className="block mb-2 text-sm font-medium text-gray-900">Nombre de la Empresa *</label>
                <input type="text" id="company-name" name="company-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div className="md:col-span-1">
                <label htmlFor="sigla" className="block text-sm font-medium text-gray-700">Sigla</label>
                <input type="text" id="sigla" name="sigla" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div className="md:col-span-1">
                <label htmlFor="nit" className="block text-sm font-medium text-gray-700">NIT / EIN *</label>
                <input type="text" id="nit" name="nit" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div className="md:col-span-1">
                <label htmlFor="company-type" className="block text-sm font-medium text-gray-700">Tipo de Empresa *</label>
                <select id="company-type" name="company-type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="">Seleccione ...</option>
                {data.tipo_empresa.map((empresa) => (
                    <option key={empresa} value={empresa}>{empresa}</option>
                ))}
                </select>
            </div>

            <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div className="md:col-span-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección de la Empresa *</label>
                <input type="text" id="address" name="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div className="md:col-span-1">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">País *</label>
                <select id="country" name="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="">Seleccione ...</option>
                {data.paises.map((pais) => (
                    <option key={pais} value={pais}>{pais}</option>
                ))}
                </select>
            </div>

            <div className="md:col-span-1">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad *</label>
                <select id="city" name="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="">Seleccione ...</option>
                {data.ciudades.map((ciudad) => (
                    <option key={ciudad} value={ciudad}>{ciudad}</option>
                ))}
                </select>
            </div>

            <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono de la Empresa *</label>
                <input type="tel" id="phone" name="phone" placeholder="(+57) - 000 000 0000" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
        </form>
    )
  }
  export default Form