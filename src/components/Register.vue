<template>
    <div class="w-full m-auto p-5  max-w-3xl rounded bg-indigo-100">
        <form>
            <div class=" grid md:grid-cols-2 sm:grid-cols-1 gap-4 ">
                <div>
                        <label class="block mb-2 text-indigo-500">FirstName</label>
                        <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="firstname">
                </div>
                <div>
                    <label class="block mb-2 text-indigo-500">LastName</label>
                        <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="lastname">
                </div>
                <div>
                    <label class="block mb-2 text-indigo-500">UserName</label>
                        <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username">
                </div>
                <div>
                    <label class="block mb-2 text-indigo-500" >Email</label>
                        <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="email">
                </div>
                <div >
                    <label class="block mb-2 text-indigo-500" >Password</label>
                        <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username">
                </div>
            </div>
            <div >     
                <button class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" name="submit">Register</button>     
            </div> 
            <footer>
                <router-link :to="{name:'Login'}" class="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Have an account?Login</router-link>
            </footer>    
        </form>    
    </div>
</template>