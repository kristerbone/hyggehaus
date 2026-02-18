import { Section } from '../components/section'

export const metadata = {
  title: 'Our Story - HyggeHaus',
  description: 'How Hygge Haus was inspired — from The Little Book of Hygge to Berlin and Berghain.',
}

export default function OurStoryPage() {
  return (
    <Section id="our-story" className="about-section">
      <div className="section-container">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">How Hygge Haus was inspired</p>
        <div className="about-content">
          <div className="about-text">
            <h3 className="story-subtitle">Arran — First Big Date Weekend</h3>
            <p>
              Krister got me a gift &ldquo;The Little Book of Hygge&rdquo; in late 2025, and from that moment
              forward we identified with a &ldquo;Hygge&rdquo; lifestyle. Cozy, warm and homely. As time unfolded,
              we became more inspired by lighting and color, combined with the incredible nature that
              surrounds us, here in Scotland.
            </p>
            <p>
              Our next BIG date weekend was to Berlin, home of techno, and home to Berghain, the most
              famously, infamous night club in the world, that&rsquo;s notoriously hard to get into.
              It&rsquo;s like a mecca. An imposing germanic building used in the war…
            </p>
            <p>
              We had no particular plan for Berlin, other than to try and get into Berghain. We would
              not be dressed in head to toe black, like the hundreds of other Berghain goers. We would
              be dressed as ourselves—hygge jumpers, cosy jackets, colored wooly hats. It was cold in
              Berlin in December.
            </p>
            <p>
              We were denied entry to Berghain on all three attempts, however we had such fun trying
              that we bought the Hygge Haus domain on our return, initially with the idea of creating
              a &ldquo;Hygge&rdquo; sweatshirt (&ldquo;Hygge&rdquo; on the inside, &ldquo;Berghain&rdquo; on the outside), so we could
              be ourselves AND get into Berghain.
            </p>
            <p>
              As time evolved, we started to develop ideas, inspired by the things we find in nature,
              around the garden, dumped—to create lighting, to build swings, to make seats, to upcycle
              furniture we find, to recycle and reuse.
            </p>
            <p>
              Our mission is to use our hands, and a lot of love, to create bespoke lighting and
              pieces of furniture that nature, and humans, have gifted us with.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
