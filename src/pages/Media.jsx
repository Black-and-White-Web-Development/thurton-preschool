import DescriptionList from "../components/DescriptionList/DescriptionList";
import List from "../components/List/List";
import Video from "/src/components/Video/Video";
import "./Media.scss";

const Media = function () {
	return (
		<>
			<section className="media fb-col-wrapper">
				<h1>Media</h1>
				<div className="media__items">
					<Video title="...isms" embedId="jeETTwnTIF0">
						<List
							items={[
								"Introduction",
								"Pentatonic",
								"Diatonic",
								"Octatonic",
								"Serial",
								"Minimal",
								"Aleatory",
								"Coda",
							]}
							isOrdered={true}
						/>
						<p className="media__description">
							Performed by the composer on 9th March 2015 in a recital in the Chapel of the
							Ascension, University of Chichester.
						</p>
						<DescriptionList items={[{ Piano: "Terence Allbright" }]} />
					</Video>
					<Video title="Narratives & Rituals" embedId="tLgOI8JfVgI">
						<List
							items={["Nonchalant", "Sinister", "Inexorable", "Comic", "Amorou", "Magical"]}
							isOrdered={true}
						/>
						<p>
							Narrative and ritual are both common qualities in music; here they are emphasised in
							alternate movements, and are most obvious in the final two.
						</p>
						<DescriptionList
							items={[
								{
									Violin: "Marie Schreer",
									Cello: "Takami Sugimoto",
									Piano: "Adam Swayne",
									Percussion: "Jake Brown",
								},
							]}
							description="Performed by members of Riot Ensemble. Recorded live at Wiltshire Music Centre, Bradforn on Avon UK on 12th March 2022."
						/>
					</Video>
					<Video title="Interlude No. 2" embedId="2KEOtwWca9Y">
						<p className="media__description">
							<i>Interlude</i> begins like a Baroque trio sonata with duetting counterpoint, an
							indenpendent bass, and with chords at the centre of the texture; then the music fades
							away in a calm passage of wide harmonies sustained by trills.
						</p>
						<DescriptionList
							items={[
								{
									Flute: "Rob Hawker",
									Viola: "Henrietta Hill",
									Piano: "Clare Simmonds",
								},
							]}
							description="The excellent first performance of what was my only Interlude at the time. No. 1 was
							added much later and is not recorded yet. The Duruflé Trio disbanded after this
							concert, and I'm grateful to them for the use of this recording."
						/>
					</Video>
					<Video title="Two Pierrot Songs" embedId="rmO8p9aBSH0">
						<p className="media__description">
							Two settings of poems from Pierrot Lunaire by Albert Giraud; performed by Irene
							Hoogveld and Lana Bode in 2018. This was the first performance of <i>L&apos;Eglise</i>
							.
						</p>
						<p>
							<i>Cuisine Lyrique</i> was first performed by Jane Manning OBE and the composer on
							November 14th 2007 at St John&apos;s Church, Kingston, Surrey, in a recital presented
							by Kingston University.
						</p>
						<DescriptionList
							items={[
								{
									"Voice (L'Eglise)": "Irene Hoogveld",
									"Voice (Cuisine Lyrique)": "Lana Bode",
									Piano: "Terence Allbright",
								},
							]}
						/>
					</Video>
					<Video title="Wondrous Machine" embedId="wNRyJrvQeQE">
						<p className="media__description">
							The first organ Toccata from my collection Wondrous Machine; played here by its
							dedicatee Timothy Ravalde. More information on the video.
						</p>
						<DescriptionList items={[{ Organ: "Timothy Ravalde" }]} />
					</Video>
					<Video title="Two Pieces for Piano No. 1" embedId="J4AyLWCcFbk">
						<p className="media__description">
							These two pieces were conceived as a pair, and composed in December 2020 and January
							2021. They can be played in either order: one has two similarly jaunty - but
							ultimately serious - themes in a simple ternary form, and the other has two very
							different kinds of music performed at the same time.
						</p>
						<p className="media__description">
							Performed by Terence Allbright on 30th November 2021, at Chichester University.
						</p>
						<DescriptionList items={[{ Piano: "Terence Allbright" }]} />
					</Video>
				</div>
			</section>
		</>
	);
};

export default Media;
