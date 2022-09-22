<template>
  <div class="mx-auto container py-16 px-6 md:pr-0 md:pl-12 bg-gray-100">
    <div class="border-red-900 border-b-4 pb-4 flex">
      <div class="flex-1">
        <h1
          class="text-4xl font-bold uppercase font-black tracking-wide text-gray-800"
        >
          Adam Dilger
        </h1>
        <h2 class="text-lg text-red-900 opacity-70">Software Developer</h2>
      </div>
      <div class="mx-4 flex flex-col text-right">
        <a href="#">0000 000 000</a>
        <a href="#">home address</a>
        <a href="to:example@gmail.com">example@gmail.com</a>
      </div>
    </div>

    <div class="flex md:space-x-16 flex-col md:flex-row">
      <div class="flex-1">
        <section class="mt-8">
          <h3>Profile</h3>

          <p>I am a software developer lol</p>
          <p>Like doing extra work</p>

          <ul>
            <li>Enthusiatic</li>
            <li>Self Driven? wut</li>
            <li>Public speaking or smth</li>
          </ul>
        </section>

        <section class="mt-5">
          <h3>Experience</h3>

          <div>Geometry - Feb 2020 - present</div>
          <div>RXP Feb 2018 - Feb 2020</div>
        </section>

        <section class="mt-5">
          <h3>Acheivements</h3>

          <h4>Migrate bespoke ERD Diagram generator to StarUML</h4>
          <p>
            Geometry use a code generator and ER diagram modeller to generate
            the Java/SQL for their APIs. I successfully transitioned most
            projects from an inhouse, unmaintained, C++ based ER modelling
            software to StarUML. This required creating a StarUML extension to
            import from a custom ER diagram format, extending the Java based
            code generator to allow StarUML's MDJ as an input, and to be able to
            generate the same code with no differences. The outcome was a better
            developer experience and a more practical and supported toolchian.
          </p>

          <h4>Upgraded bespoke Time Management website to Vue3 + Golang API</h4>
          <p>
            Successfully upgraded Geometry's bespoke time management website and
            API from PHP+HTML/JS to a Vue3 + TailwindCSS SPA and a Golang API,
            deployed with docker. The outcome was an easier and more enjoyable
            to use time management system for staff, and a more maintainable
            stack.
          </p>
        </section>
      </div>
      <div class="bg-red-100 px-6">
        <section class="mt-8">
          <h3>Skill set</h3>

          <ul>
            <li><Icon name="tabler:brand-javascript" /> Typescript</li>
            <li><Icon name="tabler:brand-netbeans" />Java/Spring</li>
            <li><Icon name="tabler:brand-vue" />Vue3</li>
            <li><Icon name="tabler:brand-tailwind" />TailwindCSS/Bootstrap5</li>
            <li><Icon name="tabler:brand-google" />Golang</li>
            <li>
              <Icon name="tabler:brand-git" />General CLI proficiency
              (bash/vim/git)
            </li>
          </ul>
        </section>

        <section class="mt-5">
          <h3>Education</h3>

          <ul>
            <li class="flex items-center">
              <Icon name="ph:graduation-cap" />
              <div>
                <div>Bachelor of Science - 2015 - 2018</div>
                <div class="text-xs text-gray-500">
                  (Maj. Comp Sci, Min. Mathematics)
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section class="mt-8">
          <h3>Extra curricular resources</h3>

          <ul>
            <li>
              <a
                href="https://www.vuemastery.com/courses/vue3-deep-dive-with-evan-you/vue3-overview"
              >
                <Icon name="ph:monitor-play" />
                Vue 3 Deep Dive with Evan You
              </a>
            </li>
            <li>
              <a href="https://frontendmasters.com/courses/algorithms/">
                <Icon name="ph:monitor-play" />
                The Last Algorithms Course You'll Need
              </a>
            </li>
            <li>
              <a href="https://www.refactoringui.com">
                <Icon name="ph:book-bookmark" />
                Refactoring UI
              </a>
            </li>
            <li>
              <a href="https://www.gopl.io/">
                <Icon name="ph:book-bookmark" />
                The Go Programming Language
              </a>
            </li>
          </ul>
        </section>

        <section class="mt-8">
          <h3>Hobbies</h3>

          <ul>
            <li><Icon name="tabler:chef-hat" /> Cooking</li>
            <li><Icon name="tabler:music" />Guitar</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
section h3 {
  @apply border-red-800 text-red-800 border-l-8 mt-4 py-1 pl-3 text-lg font-bold uppercase tracking-wide;
}

section h4 {
  @apply text-red-800 mt-4;
}

section p {
  @apply py-4;
}

ul {
  @apply mt-2;
}

li {
  @apply py-2;
}

li .icon {
  @apply mr-2 text-red-700;
}
</style>
