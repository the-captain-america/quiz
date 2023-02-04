import React from 'react';

const Overview = () => {
  return (
    <div>
      <h2>Notes</h2>
      <section>
        <h2>What did we learn about HTML?</h2>
        <ul>
          <li>
            HTML is a markup language that acts as the
            <strong>building blocks</strong> and starting point to any website
            application.
          </li>
          <li>
            We learned about <span>span</span>, <span>div</span>,
            <span>head</span>, <span>html</span>, <span>link</span>,
            <span>title</span> and <span>script</span> tags.
          </li>
          <li>
            Note: When any browser encounters a <span>.html</span> file, it will
            attempt to decode it / read it / interpret it. If a
            <span>script</span> is founds inside the <span>.html</span> file,
            then it will attempt to load that script.
          </li>
        </ul>
      </section>

      <section>
        <h2>What did we learn last week?</h2>
        <ul>
          <li>
            We learned a little bit about html and css. We touched a little bit
            on javascript.
          </li>
          <li>
            We learned about how to import css files and a script into the
            <span>html</span> stuff on the screen.
          </li>
          <li>
            What is a <strong>"link"</strong> tag? this is for importing or
            using stuff from outside of our project (or inside our project) to
            adjust or change the view. So this could be adding an image to our
            application, or this could be adding a styles.css file to our
            project. This could also be adding a javascript file from outside
            into our project.
          </li>
        </ul>
      </section>
      <section>
        <h2>What is a component?</h2>
        <p>
          A component is the concept of breaking down complex things (code in
          this case) into smaller more readable pieces.
        </p>
        <ul>
          <li>
            A component in the case of React (ie: Javascript) is a combination
            of several technologies (HTML, CSS, and Javascript.)
          </li>
          <li>
            Components have a unique ability to maintain themselves, and they do
            not effect other parts of code, instead they only deal with the code
            written within themselves (on the page).
          </li>
          <li>
            Components can do many thing, render text to a screen, allow for
            user interaction by using the mouse / cursor or iPhone /iPad touch
            capabilities.
          </li>
        </ul>
      </section>
      <section>
        <h2>Understanding Javascript</h2>
        <ul>
          <li>
            We learned <span>console.log('put some message here...');</span>
          </li>
          <li>
            We learned <span>document.getElementById('...');</span>
          </li>
          <li>
            We learned about javascript variable assignment ie:
            <span>var</span>, <span>let</span>, <span>const</span>
          </li>
          <li>
            We learned about the 6 main types in javascript.
            <span>boolean</span>,<span>string</span>,<span>number</span>,
            <span>null</span>,<span>undefined</span>,<span>object</span>
          </li>
          <li>
            Discussed how we use variables to store information / logic / values
            as a reference later to be used / consumed or rendered to the screen
            (perhaps at a later time).
          </li>
          <li>
            We learned how to change the font color of some text after finding
            the element in which we want to do something with
            <span>document.getElementById('...etc...')</span> and then declaring
            a <span>style</span>.color = "pink"
          </li>
          <li>
            We learned about <span>"section"</span> which is similar to
            <span>"div"</span>
            We learned that "divs" are meant to organise content. For example
            inside any application online (browser / iPhone), we use "divs" to
            layout the content and help separate groups of elements from other
            elements.
          </li>
          <li class="focused">we are learning how things all link up.</li>
        </ul>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};

export { Overview };
