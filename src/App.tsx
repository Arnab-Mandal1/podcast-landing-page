import React, { useState, useEffect } from 'react';
// Removed lucide-react imports
// import { PlayCircle, Podcast, Speaker, Users, ExternalLink, Linkedin, Twitter, Instagram, ArrowLeft } from 'lucide-react';

// Mock data for podcast episodes
interface Episode {
    id: string;
    title: string;
    description: string;
    date: string;
    audioUrl: string;
    imageUrl: string;
    showNotes: string;
    transcript: string;
}

const mockEpisodes: Episode[] = [
    {
        id: 'ep1',
        title: 'The Future of AI in Everyday Life',
        description: 'Explore how artificial intelligence is shaping our daily routines and what to expect next.',
        date: 'August 28, 2025',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Placeholder audio
        imageUrl: 'https://placehold.co/1200x600/60a5fa/ffffff?text=EPISODE+1',
        showNotes: `
      <h2>Episode 1: The Future of AI in Everyday Life</h2>
      <p>In this inaugural episode, we dive deep into the pervasive influence of Artificial Intelligence on our contemporary lives. From smart home devices that anticipate your needs to advanced algorithms that personalize your online experience, AI is no longer a futuristic concept but a present reality.</p>
      <h3>Key Discussion Points:</h3>
      <ul>
        <li>The evolution of AI: from theoretical concepts to practical applications.</li>
        <li>Current applications: AI in healthcare, finance, entertainment, and more.</li>
        <li>Ethical considerations: data privacy, algorithmic bias, and job displacement.</li>
        <li>The road ahead: What advancements can we expect in the next decade?</li>
        <li>The human element: How AI can augment, rather than replace, human capabilities.</li>
      </ul>
      <h3>Mentioned Resources:</h3>
      <ul>
        <li><a href="https://openai.com/" target="_blank" class="text-blue-600 hover:underline">OpenAI</a></li>
        <li><a href="https://deepmind.google/discover/blog/" target="_blank" class="text-blue-600 hover:underline">DeepMind Blog</a></li>
        <li>Book: "Superintelligence: Paths, Dangers, Strategies" by Nick Bostrom</li>
      </ul>
      <p>Join us next time as we explore the impact of quantum computing!</p>
    `,
        transcript: `
      [00:00:00] **Host:** Welcome to "The Future Now," the podcast that explores the cutting edge of technology and its impact on our world. I'm your host, Alex Chen, and today we're tackling a topic that's on everyone's mind: the future of AI in everyday life.
      [00:00:15] **Host:** Artificial intelligence has moved from the realm of science fiction to a fundamental part of our daily routines. Think about it: your smartphone, your streaming service recommendations, even your car's navigation system – all powered by AI.
      [00:00:30] **Host:** But what does this really mean for us? Is AI a benevolent assistant, or a potential threat? We'll explore the current applications, the ethical dilemmas, and what the next decade holds for this transformative technology.
      [00:00:45] **Host:** Let's start with a quick look at how far AI has come. From simple rule-based systems to complex neural networks capable of learning and adapting, the evolution has been breathtaking.
      [00:01:00] **Host:** In healthcare, AI is assisting doctors in diagnosing diseases earlier and more accurately. In finance, it's detecting fraud and optimizing trading strategies. And in entertainment, it's personalizing your content experience like never before.
      [00:01:15] **Host:** However, with great power comes great responsibility. The ethical considerations are paramount. We need to discuss data privacy, ensuring that our personal information is used responsibly.
      [00:01:30] **Host:** Algorithmic bias is another critical issue. If AI systems are trained on biased data, they will perpetuate and even amplify those biases. And of course, the perennial question of job displacement – how will AI impact the workforce?
      [00:01:45] **Host:** Looking ahead, we can expect even more sophisticated AI. Imagine hyper-personalized learning experiences, more advanced autonomous systems, and AI assisting in solving complex global challenges like climate change.
      [00:02:00] **Host:** The key is to ensure that AI is developed and deployed responsibly, with human well-being at its core. It's about augmentation, not replacement. AI can free us from mundane tasks, allowing us to focus on creativity, critical thinking, and human connection.
      [00:02:15] **Host:** Thank you for joining us on "The Future Now." We hope this episode has given you food for thought about the incredible potential and crucial considerations of AI.
      [00:02:25] **Host:** Don't forget to subscribe to our podcast on your favorite platform and follow us on social media for more insights. Join us next time as we explore the impact of quantum computing!
    `,
    },
    {
        id: 'ep2',
        title: 'Blockchain Beyond Cryptocurrencies',
        description: 'Discover the revolutionary applications of blockchain technology outside of digital currencies.',
        date: 'August 21, 2025',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Placeholder audio
        imageUrl: 'https://placehold.co/1200x600/f87171/ffffff?text=EPISODE+2',
        showNotes: `
      <h2>Episode 2: Blockchain Beyond Cryptocurrencies</h2>
      <p>Welcome back to "The Future Now"! Today, we're demystifying blockchain technology. While often associated with Bitcoin and other cryptocurrencies, blockchain's potential extends far beyond digital money. It's a foundational technology that could revolutionize industries from supply chain management to intellectual property.</p>
      <h3>Key Discussion Points:</h3>
      <ul>
        <li>What is blockchain? A simple explanation of distributed ledger technology.</li>
        <li>Immutability and transparency: Why these features are game-changers.</li>
        <li>Smart contracts: Automating agreements without intermediaries.</li>
        <li>Real-world applications: Supply chain traceability, digital identity, voting systems, and more.</li>
        <li>Challenges and adoption hurdles: Scalability, regulation, and energy consumption.</li>
      </ul>
      <h3>Mentioned Resources:</h3>
      <ul>
        <li><a href="https://ethereum.org/en/" target="_blank" class="text-blue-600 hover:underline">Ethereum Official Website</a></li>
        <li><a href="https://hyperledger.org/" target="_blank" class="text-blue-600 hover:underline">Hyperledger Projects</a></li>
        <li>Book: "Blockchain Revolution" by Don Tapscott and Alex Tapscott</li>
      </ul>
      <p>Next week, we'll be looking into the exciting world of sustainable energy solutions.</p>
    `,
        transcript: `
      [00:00:00] **Host:** Hello and welcome back to "The Future Now." I'm Alex Chen, and today we're diving into a technology that's been making headlines for years, often misunderstood: blockchain.
      [00:00:10] **Host:** When you hear blockchain, you probably think of Bitcoin or NFTs. And while those are certainly prominent applications, the underlying technology has a much broader, more transformative potential.
      [00:00:20] **Host:** At its core, blockchain is a distributed ledger, a decentralized database that's shared across a network of computers. What makes it revolutionary are its key characteristics: immutability and transparency.
      [00:00:35] **Host:** Once a transaction or a piece of data is recorded on the blockchain, it's incredibly difficult to alter or remove. This creates a highly secure and tamper-proof record, visible to all participants in the network.
      [00:00:50] **Host:** Beyond cryptocurrencies, consider smart contracts. These are self-executing contracts with the terms of the agreement directly written into code. They automatically execute when predefined conditions are met, eliminating the need for intermediaries and reducing costs and delays.
      [00:01:10] **Host:** The applications are vast. In supply chain management, blockchain can provide unprecedented transparency, tracking goods from their origin to the consumer, verifying authenticity, and reducing fraud.
      [00:01:25] **Host:** For digital identity, it can give individuals more control over their personal data, allowing them to selectively share information securely. Even voting systems could become more transparent and trustworthy with blockchain integration.
      [00:01:40] **Host:** Of course, there are challenges. Scalability is a major one – how to process a huge number of transactions efficiently. Regulatory frameworks are still evolving, and the energy consumption of some blockchain networks is a concern.
      [00:01:55] **Host:** But the innovation continues, and solutions are being developed. Blockchain is not just a technology; it's a new way of organizing information and trust, with the potential to reshape countless industries.
      [00:02:10] **Host:** That's all for this episode of "The Future Now." Join us next week as we explore the exciting world of sustainable energy solutions. Don't forget to like, subscribe, and share!
    `,
    },
    {
        id: 'ep3',
        title: 'The Rise of Quantum Computing',
        description: 'Unravel the mysteries of quantum mechanics and its mind-bending applications in computing.',
        date: 'August 14, 2025',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', // Placeholder audio
        imageUrl: 'https://placehold.co/1200x600/34d399/ffffff?text=EPISODE+3',
        showNotes: `
      <h2>Episode 3: The Rise of Quantum Computing</h2>
      <p>Greetings, future thinkers! In this episode of "The Future Now," we embark on a journey into the realm of quantum computing. This revolutionary technology leverages the bizarre laws of quantum mechanics to solve problems that are currently intractable for even the most powerful supercomputers.</p>
      <h3>Key Discussion Points:</h3>
      <ul>
        <li>Classical vs. Quantum: Understanding the fundamental differences in computation.</li>
        <li>Superposition and Entanglement: The two pillars of quantum computing.</li>
        <li>Qubits: The quantum equivalent of classical bits.</li>
        <li>Potential applications: Drug discovery, materials science, cryptography, and complex optimization.</li>
        <li>Challenges and the road to a practical quantum computer.</li>
      </ul>
      <h3>Mentioned Resources:</h3>
      <ul>
        <li><a href="https://quantum-computing.ibm.com/" target="_blank" class="text-blue-600 hover:underline">IBM Quantum Experience</a></li>
        <li><a href="https://developers.google.com/quantum/culture/glossary" target="_blank" class="text-blue-600 hover:underline">Google Quantum AI</a></li>
        <li>Book: "Quantum Computing for Everyone" by Chris Bernhardt</li>
      </ul>
      <p>Next time, we're exploring the fascinating world of sustainable urban living.</p>
    `,
        transcript: `
      [00:00:00] **Host:** Welcome back to "The Future Now." I'm Alex Chen, and today we're venturing into perhaps the most mind-bending technological frontier: quantum computing.
      [00:00:10] **Host:** If you thought AI and blockchain were complex, quantum computing operates on principles that defy our classical understanding of the universe. It's truly a game-changer.
      [00:00:20] **Host:** Unlike classical computers that store information as bits, which are either 0 or 1, quantum computers use qubits. Qubits can be both 0 and 1 simultaneously through a phenomenon called superposition.
      [00:00:35] **Host:** Even more bizarre is entanglement, where two or more qubits become linked, and the state of one instantaneously affects the state of the others, regardless of distance. These quantum phenomena allow quantum computers to perform calculations that are impossible for classical machines.
      [00:00:55] **Host:** What can this do? Imagine simulating complex molecular structures to design revolutionary new drugs or materials. Picture breaking currently unbreakable encryption or optimizing incredibly complex logistical problems that would take classical computers eons to solve.
      [01:05:00] **Host:** Drug discovery, materials science, financial modeling, and artificial intelligence itself could all be supercharged by quantum computing.
      [01:05:15] **Host:** The challenges are immense, however. Building and maintaining quantum computers is incredibly difficult, requiring ultra-cold temperatures and extreme isolation. Error correction is also a significant hurdle.
      [01:05:30] **Host:** We're still in the early stages, but the progress is astonishing. Major tech companies and research institutions are pouring resources into this field, and we're seeing quantum computers tackle increasingly complex problems.
      [01:05:45] **Host:** This isn't a technology that will replace our everyday laptops, but rather a powerful tool for specific, highly complex computational tasks that could lead to breakthroughs in almost every scientific and technological domain.
      [01:06:00] **Host:** Thank you for joining us on this quantum journey on "The Future Now." It's a field that truly pushes the boundaries of what's possible.
      [01:06:10] **Host:** Don't forget to subscribe and share your thoughts on social media. Next time, we're exploring the fascinating world of sustainable urban living.
    `,
    },
];

// Helper to format text with line breaks
const formatTextWithBreaks = (text: string) => {
    return text.split('\n').map((item, key) => (
        <React.Fragment key={key}>
            {item}
            <br />
        </React.Fragment>
    ));
};

// Component for the Hero Section
const HeroSection: React.FC<{ latestEpisode: Episode; onPlay: (episode: Episode) => void }> = ({ latestEpisode, onPlay }) => (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16 md:py-24 px-4 overflow-hidden rounded-lg shadow-xl">
        <div className="absolute inset-0 bg-pattern opacity-10"></div> {/* Subtle background pattern */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">The Future Now Podcast</h1>
            <p className="text-xl md:text-2xl font-light mb-8 opacity-90">Unraveling tomorrow's tech, today.</p>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-white border-opacity-20 mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">Latest Episode:</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300">{latestEpisode.title}</h3>
                <p className="text-lg mb-6 opacity-80 line-clamp-3">{latestEpisode.description}</p>
                <button
                    onClick={() => onPlay(latestEpisode)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
                >
                    <span className="material-icons text-2xl mr-3">play_circle</span> Listen Now
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white py-2 px-5 rounded-full text-lg shadow-md transition-colors duration-200">
                    <span className="material-icons text-xl mr-2">mic</span> Apple Podcasts
                </a>
                <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white py-2 px-5 rounded-full text-lg shadow-md transition-colors duration-200">
                    <span className="material-icons text-xl mr-2">headphones</span> Spotify
                </a>
                <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white py-2 px-5 rounded-full text-lg shadow-md transition-colors duration-200">
                    <span className="material-icons text-xl mr-2">link</span> Google Podcasts
                </a>
            </div>
        </div>
    </section>
);

// Component for an individual Episode Card
const EpisodeCard: React.FC<{ episode: Episode; onViewDetail: (episode: Episode) => void }> = ({ episode, onViewDetail }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row">
        <div className="md:w-1/3 flex-shrink-0">
            <img src={episode.imageUrl} alt={episode.title} className="w-full h-48 object-cover md:h-full" />
        </div>
        <div className="p-6 md:w-2/3 flex flex-col justify-between">
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{episode.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{episode.date}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{episode.description}</p>
            </div>
            <button
                onClick={() => onViewDetail(episode)}
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full self-start shadow-md transition-all duration-300 transform hover:scale-105"
            >
                View Episode Details
            </button>
        </div>
    </div>
);

// Component for the Episode List Section
const EpisodeList: React.FC<{ episodes: Episode[]; onViewDetail: (episode: Episode) => void }> = ({ episodes, onViewDetail }) => (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">All Episodes</h2>
            <div className="grid gap-8 lg:grid-cols-2">
                {episodes.map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode} onViewDetail={onViewDetail} />
                ))}
            </div>
        </div>
    </section>
);

// Component for the About Section
const AboutSection: React.FC = () => (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">About The Future Now</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                "The Future Now" is your weekly deep dive into the innovations, trends, and breakthroughs shaping tomorrow's world. Join us as we interview leading experts, break down complex concepts, and explore the societal impact of emerging technologies like AI, blockchain, quantum computing, and sustainable energy. Our mission is to make the future accessible, understandable, and exciting for everyone.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-xl shadow-inner border border-gray-200 dark:border-gray-600">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Your Host</h3>
                <img
                    src="https://placehold.co/150x150/e2e8f0/64748b?text=Alex+Chen"
                    alt="Host Alex Chen"
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500"
                />
                <p className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Alex Chen</p>
                <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed">
                    Alex Chen is a futurist, tech enthusiast, and award-winning journalist with over a decade of experience covering the intersection of technology and society. With a passion for demystifying complex topics, Alex brings an insightful and engaging perspective to "The Future Now."
                </p>
            </div>
        </div>
    </section>
);

// Component for Social Links
const SocialLinks: React.FC = () => (
    <section className="py-16 px-4 bg-blue-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">Connect With Us</h2>
            <div className="flex justify-center gap-6">
                <a href="#" target="_blank" aria-label="Follow us on Twitter" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                    <span className="material-icons text-4xl">share</span>
                </a>
                <a href="#" target="_blank" aria-label="Follow us on Instagram" className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300">
                    <span className="material-icons text-4xl">share</span>
                </a>
                <a href="#" target="_blank" aria-label="Connect with us on LinkedIn" className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-600 transition-colors duration-300">
                    <span className="material-icons text-4xl">public</span>
                </a>
                <a href="#" target="_blank" aria-label="Email us" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300">
                    <span className="material-icons text-4xl">mail</span>
                </a>
            </div>
        </div>
    </section>
);

// Component for Episode Detail Page
const EpisodeDetail: React.FC<{ episode: Episode; onBack: () => void }> = ({ episode, onBack }) => {
    const [currentTab, setCurrentTab] = useState<'showNotes' | 'transcript'>('showNotes');

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4">
            <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10">
                <button
                    onClick={onBack}
                    className="mb-8 flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors duration-200 font-semibold"
                >
                    <span className="material-icons text-xl mr-2">arrow_back</span> Back to Episodes
                </button>

                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">{episode.title}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{episode.date}</p>

                <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <audio controls src={episode.audioUrl} className="w-full"></audio>
                </div>

                <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                    <button
                        onClick={() => setCurrentTab('showNotes')}
                        className={`py-3 px-6 text-lg font-medium ${currentTab === 'showNotes' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
                    >
                        Show Notes
                    </button>
                    <button
                        onClick={() => setCurrentTab('transcript')}
                        className={`py-3 px-6 text-lg font-medium ${currentTab === 'transcript' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
                    >
                        Transcript
                    </button>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    {currentTab === 'showNotes' ? (
                        <div dangerouslySetInnerHTML={{ __html: episode.showNotes }} />
                    ) : (
                        <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed text-gray-800 dark:text-gray-200">
              {formatTextWithBreaks(episode.transcript)}
            </pre>
                    )}
                </div>
            </div>
        </div>
    );
};

// Main App Component
const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<'home' | 'episodeDetail'>('home');
    const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

    const handleViewDetail = (episode: Episode) => {
        setSelectedEpisode(episode);
        setCurrentView('episodeDetail');
        window.scrollTo(0, 0); // Scroll to top on navigation
    };

    const handleBackToHome = () => {
        setSelectedEpisode(null);
        setCurrentView('home');
        window.scrollTo(0, 0); // Scroll to top on navigation
    };

    const handleListenNow = (episode: Episode) => {
        setSelectedEpisode(episode);
        setCurrentView('episodeDetail');
        window.scrollTo(0, 0); // Scroll to top on navigation
        // Optionally, could directly play audio here or on the detail page
    };

    return (
        <div className="font-inter antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
            <style>{`
        /* Custom pattern for hero section */
        .bg-pattern {
          background-image: radial-gradient(#ffffff20 1px, transparent 1px), radial-gradient(#ffffff20 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: 0 0, 20px 20px;
        }

        /* Basic dark mode adjustments for prose class (Tailwind Typography) */
        .dark .prose h1, .dark .prose h2, .dark .prose h3, .dark .prose h4, .dark .prose h5, .dark .prose h6 {
          color: #e2e8f0; /* slate-200 */
        }
        .dark .prose p {
          color: #cbd5e1; /* slate-300 */
        }
        .dark .prose a {
          color: #a78bfa; /* violet-400 */
        }
        .dark .prose ul, .dark .prose ol {
          color: #cbd5e1; /* slate-300 */
        }
        .dark .prose li {
          color: #cbd5e1; /* slate-300 */
        }
      `}</style>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> {/* Google Material Icons */}
            <script src="https://cdn.tailwindcss.com"></script>

            {currentView === 'home' ? (
                <>
                    <HeroSection latestEpisode={mockEpisodes[0]} onPlay={handleListenNow} />
                    <EpisodeList episodes={mockEpisodes} onViewDetail={handleViewDetail} />
                    <AboutSection />
                    <SocialLinks />
                    <Footer />
                </>
            ) : (
                selectedEpisode && <EpisodeDetail episode={selectedEpisode} onBack={handleBackToHome} />
            )}
        </div>
    );
};

// Component for the Footer
const Footer: React.FC = () => (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
            <p className="mb-4">&copy; {new Date().getFullYear()} The Future Now Podcast. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
            </nav>
        </div>
    </footer>
);

export default App;
