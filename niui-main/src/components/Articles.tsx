import { BookOpen, Scale, Users, Home } from 'lucide-react';

interface Article {
  icon: React.ReactNode;
  tag: string;
  title: string;
  paragraphs: string[];
}

const ARTICLES: Article[] = [
  {
    icon: <Scale size={20} />,
    tag: 'Legal & Authority',
    title: 'Is a Free Chore Contract Legally Binding for Roommates?',
    paragraphs: [
      'A written roommate agreement or chore contract operates as a form of private civil contract between co-tenants. While courts in most jurisdictions will not dispatch a judge to enforce daily dishwashing schedules, a properly signed peer-to-peer roommate agreement holds meaningful practical and legal weight. When both parties sign a clearly written document detailing shared responsibilities, that agreement becomes tangible documentary evidence of mutual intent. In the event of a deposit dispute, property damage disagreement, or landlord-mediated conflict, a signed chore contract can be submitted as supporting evidence in small claims court proceedings. Many magistrates and mediators rely heavily on written records when assessing whether a tenant acted in good faith with regard to property maintenance obligations.',
      'The legal legitimacy of a free roommate contract is further reinforced by the fundamental principles of contract law: offer, acceptance, and mutual consideration. When Roommate A and Roommate B both voluntarily sign an agreement that establishes equitable household responsibilities, the document demonstrates a clear bilateral understanding. Should a landlord initiate a deduction from the security deposit citing general uncleanliness or damage, the existence of a signed chore rotation agreement can serve as powerful counter-evidence that both residents had structured, documented protocols in place. In small claims court cases involving deposit losses or property damage — a common student renter and young professional friction point — even an informal but signed written agreement has been cited as evidence of reasonable household management. The barrier to protection is simply documentation.',
    ],
  },
  {
    icon: <Users size={20} />,
    tag: 'Practical Value',
    title: 'How to Fair-Share Apartment Cleaning Without Starting a Drama',
    paragraphs: [
      'The single most common source of roommate conflict is not personality differences or noise complaints — it is the accumulation of unspoken expectations about who cleans what and when. The most effective tactical solution to this universal co-living friction point is the establishment of a formal, written chore rotation chart signed by all residents before the lease begins. A structured rotation should assign specific tasks — kitchen deep-cleaning, bathroom scrubbing, floor mopping, trash runs, and appliance wipe-downs — to specific residents on a weekly or bi-weekly cycle. Setting explicit cleaning intervals (for example, "shower and toilet deep-cleaned every Sunday before noon") eliminates the subjectivity that fuels passive-aggressive behavior. When the standard is written and mutually acknowledged, no resident can claim ignorance, and no resident needs to feel like the sole enforcer.',
      'Beyond the chore chart itself, eliminating the passive-aggressive text chain is one of the highest-value outcomes of a signed accountability framework. Without a written document, cleaning reminders default to informal messages — texts, notes, verbal requests — all of which carry an inherent social cost and tend to escalate emotionally over time. A signed chore contract substitutes personal pressure with a neutral, pre-agreed standard that both parties endorsed willingly. When a kitchen counter goes unwiped, the response is not "Can you please clean up after yourself?" — a phrase virtually guaranteed to generate defensiveness — but rather a quiet reference to Section 1 of the agreement that both residents already signed. This transforms a personal confrontation into an administrative reminder, dramatically reducing interpersonal tension and protecting the long-term quality of the shared living relationship.',
    ],
  },
  {
    icon: <Home size={20} />,
    tag: 'Social Boundaries',
    title: 'Setting House Rules: Fridge Boundaries and Overnight Guest Policies',
    paragraphs: [
      'Two of the highest-friction areas in any shared apartment are refrigerator boundaries and overnight guest frequency, yet they are the areas least likely to be discussed explicitly before move-in day. Unauthorized consumption of a roommate\'s food — reaching for someone\'s labeled yogurt or finishing the last of a shared condiment without replacing it — triggers a disproportionately strong emotional response because it is experienced as a violation of personal space and financial fairness simultaneously. Establishing a formal Fridge Treaty that designates shelf ownership, shared pantry items, and a monthly rotation schedule for restocking common supplies like toilet paper, dish soap, and trash bags eliminates the guesswork that causes passive resentment. When responsibilities are pre-assigned in writing and signed, residents are no longer relying on social pressure or goodwill to enforce fairness — the document does it for them.',
      'Overnight guest policies represent an equally high-stakes boundary because they directly affect sleep quality, bathroom access, personal comfort, and long-term mental health in a shared living environment. The presence of frequent or unannounced overnight guests disrupts the established domestic rhythm of the household and can make non-hosting residents feel like uninvited guests in their own home. Clearly documented guest rules — such as limiting overnight stays to a maximum of two nights per week and requiring 24-hour advance notice — set expectations transparently before any tension arises. Similarly, enforcing quiet hours from 10:00 PM to 7:00 AM daily provides a documented standard that protects every resident\'s right to rest, a non-negotiable prerequisite for academic performance, professional productivity, and general well-being. When these policies are signed and formalized before conflicts arise, they function as a proactive shield rather than a reactive punishment, making them dramatically more effective at preserving roommate harmony over the long term.',
    ],
  },
];

export default function Articles() {
  return (
    <section className="no-print max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3">
          <BookOpen size={14} />
          Knowledge Base
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
          Roommate Agreement Guide
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
          Expert guidance on co-living contracts, cleaning accountability, and setting healthy house rules that actually stick.
        </p>
      </div>

      {/* Articles grid */}
      <div className="grid md:grid-cols-1 gap-8">
        {ARTICLES.map((article, i) => (
          <article
            key={i}
            className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-slate-600/60 transition-colors duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/20 flex items-center justify-center text-sky-400">
                {article.icon}
              </div>
              <span className="text-xs font-semibold tracking-widest text-sky-400/80 uppercase">
                {article.tag}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-5 leading-snug">
              {article.title}
            </h3>

            <div className="flex flex-col gap-4">
              {article.paragraphs.map((para, j) => (
                <p key={j} className="text-sm text-slate-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
