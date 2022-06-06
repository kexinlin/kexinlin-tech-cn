export default function Contact() {
  return (
    <div className="container md:w-8/12 w-10/12 items-center  justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24">
      <h2 className="font-black uppercase pb-2 text-3xl text-yellow-500">
        ✉️ 联系我
      </h2>

      <p className="font-rubik font-semibold text-xl text-center text-gray-800 my-10">
        欢迎在下方给我留言 :)
      </p>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            您的留言
          </label>
        </div>
        <div class="md:w-1/3">
          <textarea
            class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
            id="inline-full-name"
            type="text"
          />
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            您的名字
          </label>
        </div>
        <div class="md:w-1/3">
          <input
            class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
            id="inline-full-name"
            type="text"
          />
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            联系方式
          </label>
        </div>
        <div class="md:w-1/3">
          <input
            class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
            id="inline-full-name"
            type="text"
          />
        </div>
      </div>

      <button className="bg-yellow-500 w-64 mx-auto hover:shadow-lg focus:outline-none text-white font-bold py-3 px-10 rounded-full no-underline ">
        飞封信
      </button>
    </div>
  );
}
