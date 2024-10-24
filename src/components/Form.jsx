
function Form() {
    return (
        <form class="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto p-4 bg-[#f3f3f3] justify-center w-10/12 rounded-md px-12 py-20">
            <h1 className='md:col-span-4 text-2xl font-bold text-[#2a173a]'>Informacion de la Empresa</h1>
            <hr className="md:col-span-4 mb-4 mt-[-20px]"/>
            <div class="md:col-span-3">
                <label for="company-name" class="block mb-2 text-sm font-medium text-gray-900">Nombre de la Empresa *</label>
                <input type="text" id="company-name" name="company-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div class="md:col-span-1">
                <label for="sigla" class="block text-sm font-medium text-gray-700">Sigla</label>
                <input type="text" id="sigla" name="sigla" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div class="md:col-span-1">
                <label for="nit" class="block text-sm font-medium text-gray-700">NIT / EIN *</label>
                <input type="text" id="nit" name="nit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div class="md:col-span-1">
                <label for="company-type" class="block text-sm font-medium text-gray-700">Tipo de Empresa *</label>
                <select id="company-type" name="company-type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="">Seleccione ...</option>
                </select>
            </div>

            <div class="md:col-span-2">
                <label for="email" class="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" id="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div class="md:col-span-4">
                <label for="address" class="block text-sm font-medium text-gray-700">Dirección de la Empresa *</label>
                <input type="text" id="address" name="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div class="md:col-span-1">
                <label for="country" class="block text-sm font-medium text-gray-700">País *</label>
                <select id="country" name="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="">Seleccione ...</option>
                </select>
            </div>

            <div class="md:col-span-1">
                <label for="city" class="block text-sm font-medium text-gray-700">Ciudad *</label>
                <select id="city" name="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="">Seleccione ...</option>
                </select>
            </div>

            <div class="md:col-span-2">
                <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono de la Empresa *</label>
                <input type="tel" id="phone" name="phone" placeholder="(+57) - 000 000 0000" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
        </form>
    )
  }
  export default Form