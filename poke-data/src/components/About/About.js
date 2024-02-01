import "./About.css";

export default function About() {
  return (
    <article className="about">
      <h2 className="about__header">Welcome!</h2>
      <p className="about__intro about__paragraph">
        Welcome to my pokedata app! This app is here to help you plan out your
        battles against gym leaders in the Jhoto region. You'll find quick
        overviews of the first eight gyms in the Gold, Silver, & Crystal games.
      </p>
      <p className="about__gyms about__paragraph">
        Start by navigating to the gyms page. There you can quickly look up
        information about each gym including where it's located, what badge you
        get, who the gym leader is, & most importantly what pokemon each leader
        uses. You'll also find information about the rewards you recieve once
        you're victorious. Information for each gym is organized in the same
        order as the games. The gyms page can be found by clicking on the word
        "Gyms" at the top of the page or by opening the menu if you're using the
        app on a mobile device.
      </p>
      <p className="about__pokemon about__paragraph">
        Next is the Pokemon page. Here you'll find every pokemon that is used
        throughout your journey collecting the first eight badges. You'll notice
        that they're not listed in the order that they appear in a pokedex.
        That's because they're listed in order of gym leaders. The farther into
        the game you are the farther down the page the pokemon you're looking
        for will be. Each pokemon card is interactive so when you click on one a
        modal will display on the center of the page that shows important
        information for that pokemon. The modal is where you find a pokemon's
        level, what moves it uses, as well as what type it is. Some pokemon are
        listed more than once. That's because some gym leaders have multiple of
        the same pokemon on their team. However, sometimes even though it's the
        same pokemon it'll be slightly different than the others. For example if
        you examine all of Claire's Dragonairs you'll notice they're nearly
        identical except each one knows one move that's unique to it. You can
        reach the pokemon page by clicking on the word "Pokemon" at the top of
        the page, or by opening the menu if you're using the app on a mobile
        device.
      </p>
      <p className="about__conclusion about__paragraph">
        And that's really all there is to it. This app was designed with two
        goals in mind.
        <ol>
          <li>
            <p>Simplicity</p>
          </li>
          <li>
            <p>Better useability</p>
          </li>
        </ol>
        All the information here was provided by two sources that I'll link to
        at the bottom of the page. The first is the pokeapi. The second is
        serebii. Serebii was the main source of inspiration for the app. Their
        website has a page that allows you to plan out your battles against all
        16 gym leaders in the Gold, Silver, & Crystal games. When you visit the
        site on your phone however it just seems like there's too much going on.
        The text is too small, the page is responsive, but it seems to just
        shrink more than anything else. There's sidebars on both sides of the
        page which can be very distracting. I really liked thier idea & just
        thought it'd be even better if it was more mobile friendly with less
        distractions so here it is! I hope you enjoy using Pokedata & that it
        helps you make it all the way to the elite four. Good luck!
      </p>
    </article>
  );
}
