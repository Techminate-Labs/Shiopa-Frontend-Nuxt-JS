<template>
  <div>
    <!---slider--->
    <div class="carousel relative shadow-2xl bg-white">
    <div class="carousel-inner relative overflow-hidden w-full">
      <!--Slide 1-->
      <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
      <div class="carousel-item absolute opacity-0" style="height:100% ">
      <!---banner---->
      <div class="flex">
        <div class="flex-1 ...">
           <div class="bg-cover bg-no-repeat bg-#E5E7EB flex content-center items-center justify-center"
            style="background-image: url('http://demoapus-wp.com/maison/wp-content/uploads/2017/07/slider31.jpg');">
       </div>
        </div>
         <div class="flex-1 ...">
            <div class="container relative mx-auto">
                <div class="items-center flex flex-wrap">
                  <div class="w-full  lg:w-8/12 px-15 py-32 mx-10">
                    <h2 class="text-black bold text-4xl mx-20">
                      Chainet
                    </h2>
                    <a
                      href="#"
                      class="text-gray-800 hover:text-yellow-600 underline text-2xl inline-block cursor-pointer mx-20">Accessories
                    </a>
                </div>
                </div>
              </div>
         </div>
        </div>
      <!---banner---->
        </div>
        <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

        <!--Slide 2-->
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:100%;">
        <!---banner---->
        <div class="flex">
            <div class="flex-1 ...">
              <div class="bg-cover bg-no-repeat bg-#E5E7EB flex content-center items-center justify-center"
                style="background-image: url('http://demoapus-wp.com/maison/wp-content/uploads/2017/07/Bead.png');">
              </div>
            </div>
            <div class="flex-1 ...">
                <div class="container relative mx-auto">
                    <div class="items-center flex flex-wrap">
                      <div class="w-full  lg:w-8/12 px-15 py-32 mx-10">
                        <h2 class="text-black bold text-4xl mx-20">
                          Chainet
                        </h2>
                        <a
                          href="#"
                          class="text-gray-800 hover:text-yellow-600 underline text-2xl inline-block cursor-pointer mx-20">Accessories
                        </a>
                    </div>
                    </div>
                  </div>
            </div>
          </div>
        <!---banner---->
        </div>
        <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
        <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
        <!--Slide 3-->
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:100% width: 800">
          <!---banner---->
        <div class="flex">
          <div class="flex-1 ...">
            <div class="bg-cover bg-no-repeat bg-#E5E7EB flex content-center items-center justify-center"
              style="background-image: url('http://demoapus-wp.com/maison/wp-content/uploads/2017/07/Bead.png');">
           </div>
          </div>
          <div class="flex-1 ...">
              <div class="container relative mx-auto">
                  <div class="items-center flex flex-wrap">
                    <div class="w-full  lg:w-8/12 px-15 py-32 mx-10">
                      <h2 class="text-black bold text-4xl mx-20">
                        Chainet
                      </h2>
                      <a
                        href="#"
                        class="text-gray-800 hover:text-yellow-600 underline text-2xl inline-block cursor-pointer mx-20">Accessories
                      </a>
                  </div>
                  </div>
                </div>
          </div>
        </div>
        <!---banner---->
        </div>
            <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-black rounded-full bg-blue hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-black rounded-full bg-blue hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

            <!-- Add additional indicators for each slide-->
            <ol class="text-left carousel-indicators">
                <li class="inline-block mr-3">
                  <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                </li>
                <li class="inline-block mr-3">
                  <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                </li>
                <li class="inline-block mr-3">
                  <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                </li>
            </ol>
        </div>
      </div>
      <!---slider--->
  </div>
</template>

<script>
export default {

}
</script>

<style>
 .carousel-open:checked + .carousel-item {
				position: static;
				opacity: 100;
			}
			.carousel-item {
				-webkit-transition: opacity 0.6s ease-out;
				transition: opacity 0.6s ease-out;
			}
			#carousel-1:checked ~ .control-1,
			#carousel-2:checked ~ .control-2,
			#carousel-3:checked ~ .control-3 {
				display: block;
			}
			.carousel-indicators {
				list-style: none;
				margin: 0;
				padding: 0;
				position: absolute;
				bottom: 2%;
				left: 0;
				right: 0;
				text-align: center;
				z-index: 10;
			}
			#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
			#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
			#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
				color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
			}
      .bg-cover.bg-no-repeat.flex.content-center.items-center.justify-center {
          width: 750px;
          height: 550px;
      }
</style>