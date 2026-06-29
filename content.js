function term(label, def){
  return `<span class="term" data-def="${def.replace(/"/g,'&quot;')}">${label}<span class="def-pop">${def}</span></span>`;
}

const DOCS = {

declaration: {
  title: "The Declaration of Independence",
  year: "1776",
  eyebrow: "Adopted July 4, 1776 — Second Continental Congress",
  subtitle: "Not a law and not a system of government — a public announcement, addressed to the world, explaining why the thirteen colonies were breaking from Britain.",
  sections: [
    {
      id:"whatitis",
      heading:"What it actually is",
      html:`<p>The Declaration doesn't create any government or grant any rights you can sue over in court today. Think of it as a breakup letter with a legal argument attached: it states a philosophy of government, then lists specific grievances against King George III, then declares the colonies free and independent states. It has no ${term("enforcement mechanism","A way for a court or authority to actually compel compliance. The Declaration has none of its own — nobody can sue to enforce it.")} of its own — its power is persuasive and symbolic, not legal. This is the single most common confusion people have: the Declaration is not part of the body of U.S. law the way the Constitution is.</p>`,
      check:{
        q:"What does the Declaration of Independence actually do, legally?",
        options:[
          "It establishes the structure of the U.S. government.",
          "It announces separation from Britain and explains why, but creates no government and isn't enforceable law today.",
          "It lists individual rights that courts still enforce directly.",
          "It amends the Constitution."
        ],
        correct:1,
        correction:"The Declaration has no legal/governing function today — no court enforces it directly. That job belongs to the Constitution. The Declaration is a statement of principles and grievances, not a legal code."
      }
    },
    {
      id:"structure",
      heading:"Key structure",
      intro:"Tap each part to see what's actually in it.",
      sourceUrl:"https://www.archives.gov/founding-docs/declaration-transcript",
      reveal:[
        {label:"The Preamble", desc:"States the purpose: when a people must explain to the world why they're separating from another government.", text:"When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation."},
        {label:"The Statement of Principles", desc:"The philosophical core — natural rights, consent of the governed, and the right to alter or abolish unjust government.", text:"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. — That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, — That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government..."},
        {label:"The List of Grievances", desc:"27 specific charges against King George III, building the legal case that he'd become a tyrant. Scroll to read all of them.", text:"He has refused his Assent to Laws, the most wholesome and necessary for the public good.<br><br>He has forbidden his Governors to pass Laws of immediate and pressing importance, unless suspended in their operation till his Assent should be obtained; and when so suspended, he has utterly neglected to attend to them.<br><br>He has refused to pass other Laws for the accommodation of large districts of people, unless those people would relinquish the right of Representation in the Legislature, a right inestimable to them and formidable to tyrants only.<br><br>He has called together legislative bodies at places unusual, uncomfortable, and distant from the depository of their public Records, for the sole purpose of fatiguing them into compliance with his measures.<br><br>He has dissolved Representative Houses repeatedly, for opposing with manly firmness his invasions on the rights of the people.<br><br>He has refused for a long time, after such dissolutions, to cause others to be elected; whereby the Legislative powers, incapable of Annihilation, have returned to the People at large for their exercise; the State remaining in the mean time exposed to all the dangers of invasion from without, and convulsions within.<br><br>He has endeavoured to prevent the population of these States; for that purpose obstructing the Laws for Naturalization of Foreigners; refusing to pass others to encourage their migrations hither, and raising the conditions of new Appropriations of Lands.<br><br>He has obstructed the Administration of Justice, by refusing his Assent to Laws for establishing Judiciary powers.<br><br>He has made Judges dependent on his Will alone, for the tenure of their offices, and the amount and payment of their salaries.<br><br>He has erected a multitude of New Offices, and sent hither swarms of Officers to harrass our people, and eat out their substance.<br><br>He has kept among us, in times of peace, Standing Armies without the Consent of our legislatures.<br><br>He has affected to render the Military independent of and superior to the Civil power.<br><br>He has combined with others to subject us to a jurisdiction foreign to our constitution, and unacknowledged by our laws; giving his Assent to their Acts of pretended Legislation:<br>&nbsp;&nbsp;For Quartering large bodies of armed troops among us:<br>&nbsp;&nbsp;For protecting them, by a mock Trial, from punishment for any Murders which they should commit on the Inhabitants of these States:<br>&nbsp;&nbsp;For cutting off our Trade with all parts of the world:<br>&nbsp;&nbsp;For imposing Taxes on us without our Consent:<br>&nbsp;&nbsp;For depriving us in many cases, of the benefits of Trial by Jury:<br>&nbsp;&nbsp;For transporting us beyond Seas to be tried for pretended offences:<br>&nbsp;&nbsp;For abolishing the free System of English Laws in a neighbouring Province, establishing therein an Arbitrary government, and enlarging its Boundaries so as to render it at once an example and fit instrument for introducing the same absolute rule into these Colonies:<br>&nbsp;&nbsp;For taking away our Charters, abolishing our most valuable Laws, and altering fundamentally the Forms of our Governments:<br>&nbsp;&nbsp;For suspending our own Legislatures, and declaring themselves invested with power to legislate for us in all cases whatsoever.<br><br>He has abdicated Government here, by declaring us out of his Protection and waging War against us.<br><br>He has plundered our seas, ravaged our Coasts, burnt our towns, and destroyed the lives of our people.<br><br>He is at this time transporting large Armies of foreign Mercenaries to compleat the works of death, desolation and tyranny, already begun with circumstances of Cruelty &amp; perfidy scarcely paralleled in the most barbarous ages, and totally unworthy the Head of a civilized nation.<br><br>He has constrained our fellow Citizens taken Captive on the high Seas to bear Arms against their Country, to become the executioners of their friends and Brethren, or to fall themselves by their Hands.<br><br>He has excited domestic insurrections amongst us, and has endeavoured to bring on the inhabitants of our frontiers, the merciless Indian Savages, whose known rule of warfare, is an undistinguished destruction of all ages, sexes and conditions."},
        {label:"The Denunciation", desc:"A shorter set of complaints against the British people for not restraining the King.", text:"Nor have We been wanting in attentions to our British brethren. We have warned them from time to time of attempts by their legislature to extend an unwarrantable jurisdiction over us. We have reminded them of the circumstances of our emigration and settlement here. We have appealed to their native justice and magnanimity, and we have conjured them by the ties of our common kindred to disavow these usurpations..."},
        {label:"The Declaration Itself", desc:"The actual operative sentence — declaring the colonies 'Free and Independent States,' absolved of allegiance to the British Crown.", text:"We, therefore, the Representatives of the united States of America, in General Congress, Assembled, appealing to the Supreme Judge of the world for the rectitude of our intentions, do, in the Name, and by Authority of the good People of these Colonies, solemnly publish and declare, That these United Colonies are, and of Right ought to be Free and Independent States; that they are Absolved from all Allegiance to the British Crown, and that all political connection between them and the State of Great Britain, is and ought to be totally dissolved..."},
      ],
      check:{
        q:"What makes up the bulk of the Declaration's middle section?",
        options:[
          "A list of taxes Congress could levy",
          "A list of 27 grievances against King George III",
          "The text of the Bill of Rights",
          "Rules for electing a president"
        ],
        correct:1,
        correction:"The middle of the Declaration is a long list of specific grievances against the King — the legal/factual case for why separation was justified."
      }
    },
    {
      id:"phrases",
      heading:"Phrasing worth recognizing",
      intro:"Tap a phrase to see why it matters.",
      phrases: [
        {text:"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.",
         gloss:"The most quoted sentence in American political writing. Note: 'unalienable' rights here means rights that pre-exist government — government doesn't grant them, it's only supposed to protect them. That idea (natural rights vs. granted rights) is the philosophical engine for everything that follows."},
        {text:"Governments are instituted among Men, deriving their just powers from the consent of the governed.",
         gloss:"This is the consent-of-the-governed principle — government's legitimacy comes from the people, not from divine right or conquest."},
        {text:"...it is the Right of the People to alter or to abolish it, and to institute new Government...",
         gloss:"The justification for revolution itself: if government stops protecting these rights, the people have the right to replace it."},
      ],
      check:{
        q:"The famous phrase 'all men are created equal' belongs to which document?",
        options:["The Constitution","The Bill of Rights","The Declaration of Independence","The Articles of Confederation"],
        correct:2,
        correction:"That line is from the Declaration's statement of principles, not the Constitution. The Constitution's opening words are 'We the People.'"
      }
    },
    {
      id:"today",
      heading:"Why it matters today",
      html:`<p>The Declaration isn't cited in court the way the Constitution is, but its ideas (${term("equality","Here, equality before government and law, not economic or social equality — the document doesn't address those.")}, ${term("natural rights","Rights claimed to exist independent of any government, simply by virtue of being human.")}, consent of the governed) are constantly invoked in political debate, often by people on very different sides of an argument — which is part of why it's worth being precise about what it actually says versus what it's commonly assumed to say.</p>`,
      check:{
        q:"What does 'unalienable rights' mean in the Declaration's context?",
        options:[
          "Rights granted by the government that can be revoked",
          "Rights that exist independent of government and can't be legitimately taken away",
          "Rights only available to landowners in 1776",
          "Rights listed in the Bill of Rights"
        ],
        correct:1,
        correction:"'Unalienable' (natural) rights are framed as pre-existing government — government's job is to protect them, not grant them. This is a philosophical claim, separate from any specific legal right."
      }
    },
  ],
},

constitution: {
  title: "The Constitution",
  year: "1787 / ratified 1788",
  eyebrow: "Drafted 1787, Philadelphia — the actual frame of government",
  subtitle: "The operating system. This is the document that creates the government, divides its powers, and is actual enforceable law today.",
  sections: [
    {
      id:"whatitis",
      heading:"What it actually is",
      html:`<p>Where the Declaration is a one-time announcement, the Constitution is the ongoing rulebook. It creates three branches of government, defines what each can and can't do, and sets up the relationship between the federal government and the states. Unlike the Declaration, it's ${term("amendable","Changeable through a formal process — Article V. It's been amended 27 times so far, most recently in 1992.")} and it's the literal supreme law of the land — federal courts interpret and apply it every day. The original document had no list of individual rights; that came two years later as the first ten amendments (the Bill of Rights).</p>`,
      check:{
        q:"Which document actually creates Congress, the Presidency, and the federal courts?",
        options:["The Declaration of Independence","The Constitution","The Bill of Rights","The Federalist Papers"],
        correct:1,
        correction:"The Constitution is the document that structures the government itself. The Declaration announces independence; the Bill of Rights adds individual protections after the fact."
      }
    },
    {
      id:"structure",
      heading:"Key structure",
      intro:"Tap each article to see what it covers.",
      sourceUrl:"https://www.archives.gov/founding-docs/constitution-transcript",
      reveal:[
        {label:"The Preamble", desc:"\"We the People...\" — one sentence stating the document's purpose. Not legally operative itself, but sets the frame: the government's authority comes from the people, not the states or a monarch.", text:"We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."},
        {label:"Article I — The Legislature", desc:"Creates Congress (House + Senate), and is the longest article — lists Congress's enumerated powers in Section 8 (the power to tax, declare war, regulate commerce, etc.).", text:"All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives. — Article I, Section 1 (Section 8 then lists specific powers: to lay and collect taxes, regulate commerce, declare war, raise armies, and more.)"},
        {label:"Article II — The Executive", desc:"Creates the Presidency, the Electoral College, and the President's powers (commander-in-chief, treaties, appointments, veto).", text:"The executive Power shall be vested in a President of the United States of America. He shall hold his Office during the Term of four Years, and, together with the Vice President, chosen for the same Term, be elected... — Article II, Section 1"},
        {label:"Article III — The Judiciary", desc:"Creates the Supreme Court and gives Congress power to create lower federal courts. Judicial review (courts striking down unconstitutional laws) isn't spelled out here — it was established by the Court itself in Marbury v. Madison, 1803.", text:"The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish. The Judges, both of the supreme and inferior Courts, shall hold their Offices during good Behaviour... — Article III, Section 1"},
        {label:"Article IV — States' Relations", desc:"Full faith and credit between states, extradition, and the process for admitting new states.", text:"Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State. And the Congress may by general Laws prescribe the Manner in which such Acts, Records and Proceedings shall be proved, and the Effect thereof. — Article IV, Section 1"},
        {label:"Article V — Amendment", desc:"How the Constitution itself gets changed — proposal by 2/3 of Congress (or a convention) and ratification by 3/4 of the states.", text:"The Congress, whenever two thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two thirds of the several States, shall call a Convention for proposing Amendments, which... shall be valid... when ratified by the Legislatures of three fourths of the several States... — Article V"},
        {label:"Article VI — Supremacy Clause", desc:"Federal law and the Constitution override conflicting state laws.", text:"This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land; and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of any State to the Contrary notwithstanding. — Article VI"},
        {label:"Article VII — Ratification", desc:"Set the bar for the document taking effect: 9 of 13 states.", text:"The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same. — Article VII"},
      ],
      check:{
        q:"Where are Congress's specific powers (tax, commerce, declare war, etc.) listed?",
        options:["Article I, Section 8","The Preamble","The 14th Amendment","Article III"],
        correct:0,
        correction:"Article I, Section 8 — the enumerated powers clause. Most debates about federal overreach are arguments about how broadly to read this section, especially the Commerce Clause."
      }
    },
    {
      id:"phrases",
      heading:"Phrasing worth recognizing",
      intro:"Tap a phrase to see why it matters.",
      phrases: [
        {text:"We the People of the United States, in Order to form a more perfect Union...",
         gloss:"The opening words. The shift from 'We the People' to a Union of states (rather than 'We the States') was itself a political statement at the time — it locates sovereignty in the people, not the states."},
        {text:"Congress shall have Power to lay and collect Taxes...regulate Commerce...declare War...",
         gloss:"From Article I, Section 8 — the enumerated powers. Nearly every modern fight about 'federal overreach' is ultimately a fight about how far these specific listed powers (especially the Commerce Clause) stretch."},
        {text:"This Constitution...shall be the supreme Law of the Land.",
         gloss:"Article VI's Supremacy Clause — the reason federal law generally wins when it conflicts with state law."},
      ],
      check:{
        q:"Did the original 1787 Constitution include a list of individual rights like free speech?",
        options:["Yes, in Article I","Yes, in the Preamble","No — that was added in 1791 as the Bill of Rights","No, and it has never been added"],
        correct:2,
        correction:"This is the single most common mix-up. The original Constitution had no individual rights list. The first ten amendments — the Bill of Rights — were added in 1791 specifically to address that gap."
      }
    },
    {
      id:"today",
      heading:"Why it matters today",
      html:`<p>Most real-world constitutional fights are about how broadly to read Article I's enumerated powers (especially the ${term("Commerce Clause","The clause giving Congress power to regulate interstate commerce — stretched over time to justify a huge range of federal laws, and a constant target of disputes over its limits.")}), the separation of powers between Article I and Article II (war powers, appointments, executive orders), and Article III's scope (what courts can and can't decide). The original 1787 text contains no individual rights list at all — that's the most common mix-up people have between the Constitution and the Bill of Rights.</p>`,
      check:{
        q:"Where did the power of 'judicial review' (courts striking down unconstitutional laws) come from?",
        options:[
          "It's explicitly written into Article III",
          "It was established by the Supreme Court itself in Marbury v. Madison (1803)",
          "It's in the Bill of Rights",
          "It was added by the 14th Amendment"
        ],
        correct:1,
        correction:"Judicial review isn't spelled out in the text at all — the Supreme Court asserted this power for itself in Marbury v. Madison (1803), and it's been accepted practice ever since."
      }
    },
  ],
},

billofrights: {
  title: "The Bill of Rights",
  year: "1791",
  eyebrow: "Ratified December 15, 1791 — the first ten amendments",
  subtitle: "Added to satisfy states (and citizens) who worried the new federal government, as written in 1787, didn't explicitly protect individual liberty.",
  sections: [
    {
      id:"whatitis",
      heading:"What it actually is",
      html:`<p>The original Constitution almost didn't get ratified without a promise that a list of individual rights would be added immediately. James Madison drafted what became the first ten amendments, ratified in 1791. Originally, the Bill of Rights restrained only the federal government — states could (and did) restrict speech, religion, etc. on their own. That changed gradually through the 14th Amendment (1868) and a doctrine called ${term("incorporation","The process by which the Supreme Court applied most Bill of Rights protections to state governments too, amendment by amendment, mostly during the 20th century.")}, through which the Supreme Court applied most Bill of Rights protections to state governments too.</p>
      <p><strong>On the "Articles vs. Amendments" confusion:</strong> When Congress proposed the Bill of Rights in 1789, it called each one an "Article" — twelve Articles were proposed in total. Only ten were ratified by the states, and those ten became the ${term("1st through 10th Amendments","We number them starting from 1, but the original 1789 proposal numbered them 1–12. Articles 1 and 2 failed to ratify (Article 2 was eventually ratified in 1992, as the 27th Amendment). So our '1st Amendment' was originally 'Article the Third' in the 1789 bill.")} to the Constitution. Separately, the Constitution's own structure is also divided into "Articles" — Article I (Congress), Article II (President), Article III (Courts), and so on up to Article VII. Same word, completely different things.</p>`,
      check:{
        q:"As originally written, did the Bill of Rights restrain state governments too, or only the federal government?",
        options:[
          "Only the federal government — states were bound in later, mostly through the 14th Amendment",
          "Both, equally, from 1791 onward",
          "Only state governments",
          "Neither — it was purely symbolic"
        ],
        correct:0,
        correction:"Originally, 'Congress shall make no law...' meant exactly that — Congress, i.e. the federal government. States were largely free to restrict speech, religion, etc. on their own until the 14th Amendment (1868) and the incorporation doctrine gradually extended most protections to the states too, mostly in the 20th century."
      }
    },
    {
      id:"structure",
      heading:"Key structure",
      intro:"Tap each amendment to see what it covers. (The original 1789 proposal called them 'Articles I–XII.' Ten were ratified and became Amendments 1–10.)",
      sourceUrl:"https://www.archives.gov/founding-docs/bill-of-rights-transcript",
      reveal:[
        {label:"1st Amendment", desc:"Speech, religion (establishment + free exercise), press, assembly, petition.", text:"Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances."},
        {label:"2nd Amendment", desc:"Right to keep and bear arms.", text:"A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed."},
        {label:"3rd Amendment", desc:"No quartering of soldiers in private homes without consent. Almost never litigated.", text:"No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law."},
        {label:"4th Amendment", desc:"No unreasonable searches and seizures; warrant requirements.", text:"The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized."},
        {label:"5th Amendment", desc:"Grand jury indictment, double jeopardy, self-incrimination ('the Fifth'), due process, takings clause (just compensation).", text:"No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury... nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation."},
        {label:"6th Amendment", desc:"Speedy/public trial, impartial jury, right to counsel, right to confront witnesses.", text:"In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed... and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence."},
        {label:"7th Amendment", desc:"Jury trial in civil cases over a certain value.", text:"In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law."},
        {label:"8th Amendment", desc:"No excessive bail/fines, no cruel and unusual punishment.", text:"Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted."},
        {label:"9th Amendment", desc:"Listing some rights doesn't mean others (unlisted ones) don't exist.", text:"The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people."},
        {label:"10th Amendment", desc:"Powers not given to the federal government are reserved to the states or the people.", text:"The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people."},
      ],
      check:{
        q:"What does the 10th Amendment say?",
        options:[
          "States can override federal law at will",
          "Powers not given to the federal government are reserved to the states or the people",
          "All rights belong only to the federal government",
          "It bans cruel and unusual punishment"
        ],
        correct:1,
        correction:"The 10th Amendment is the 'reserved powers' clause — anything the Constitution doesn't hand to the federal government stays with the states or the people. It's the textual anchor for most federalism arguments."
      }
    },
    {
      id:"phrases",
      heading:"Phrasing worth recognizing",
      intro:"Tap a phrase to see why it matters.",
      phrases: [
        {text:"Congress shall make no law...abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble...",
         gloss:"1st Amendment. Note it originally restrained only Congress — 'Congress shall make no law' — which is exactly why incorporation via the 14th Amendment mattered so much later."},
        {text:"The right of the people to be secure...against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause...",
         gloss:"4th Amendment — most modern policing and digital-privacy law (cell phone searches, wiretaps, data warrants) traces back to this clause."},
        {text:"No person shall be...deprived of life, liberty, or property, without due process of law.",
         gloss:"5th Amendment due process clause — its near-twin appears again in the 14th Amendment, this time binding the states."},
      ],
      check:{
        q:"Which amendment guarantees the right to a lawyer in criminal cases?",
        options:["4th","5th","6th","7th"],
        correct:2,
        correction:"The 6th Amendment. Its right-to-counsel guarantee is the constitutional basis for public defenders, confirmed in Gideon v. Wainwright (1963)."
      }
    },
    {
      id:"today",
      heading:"Why it matters today",
      html:`<p>The 1st, 4th, 5th, and 6th Amendments generate the overwhelming majority of real-world Bill of Rights litigation — free speech online, police searches of phones and cars, ${term("Miranda rights","The requirement that police inform suspects of their 5th and 6th Amendment rights before interrogation, from Miranda v. Arizona (1966).")}, and the right to a lawyer. The 2nd Amendment generates fewer cases but enormous public attention. The 3rd and 7th are largely historical footnotes today.</p>`,
      check:{
        q:"Which amendment is most often described today as largely a historical footnote, rarely litigated?",
        options:["1st","3rd","4th","5th"],
        correct:1,
        correction:"The 3rd Amendment (no quartering of soldiers in homes) is the classic example of a provision almost never tested in modern courts — unlike the 1st, 4th, 5th, and 6th, which generate huge volumes of cases."
      }
    },
  ],
},
};

const AMENDMENTS_TODAY = [
  {num:"1", title:"Speech, Religion, Press, Assembly", tag:"Most litigated",
   text:"Covers government censorship, religious liberty disputes, protest rights, and — increasingly — what counts as 'speech' online and whether platforms or the government are doing the restricting."},
  {num:"2", title:"Right to Bear Arms", tag:"Most publicly contested",
   text:"Generates relatively few Supreme Court cases historically, but is at the center of ongoing public and legislative fights over gun regulation, especially since District of Columbia v. Heller (2008) confirmed an individual right."},
  {num:"4", title:"Searches & Seizures", tag:"High litigation volume",
   text:"Originally about physical searches of homes and papers; now the main battleground for digital privacy — cell phone location data, searches at borders, and police use of new surveillance tech."},
  {num:"5", title:"Due Process, Self-Incrimination, Takings", tag:"Foundational to criminal law",
   text:"Source of 'pleading the Fifth,' double jeopardy protection, and the requirement of 'just compensation' when government takes private property."},
  {num:"6", title:"Right to Counsel & Fair Trial", tag:"Underpins public defense",
   text:"Established the right to a lawyer in criminal cases (Gideon v. Wainwright, 1963) — the constitutional basis for public defenders."},
  {num:"14", title:"Equal Protection & Due Process (states)", tag:"Most consequential amendment after the original Bill of Rights",
   text:"Ratified 1868. Extends due process and equal protection against state governments, and is the vehicle ('incorporation') that made most of the Bill of Rights apply to states, not just the federal government. Central to cases on segregation, marriage equality, and most modern civil rights law."},
];

const SORT_ITEMS = [
  {text:"\"All men are created equal\"", doc:"declaration"},
  {text:"Creates the Electoral College", doc:"constitution"},
  {text:"Right against unreasonable searches and seizures", doc:"billofrights"},
  {text:"A list of 27 grievances against King George III", doc:"declaration"},
  {text:"\"We the People...\"", doc:"constitution"},
  {text:"Right to a lawyer in criminal cases", doc:"billofrights"},
  {text:"Has no enforcement mechanism of its own", doc:"declaration"},
  {text:"Article V — the amendment process", doc:"constitution"},
  {text:"Originally restrained only the federal government, not the states", doc:"billofrights"},
  {text:"Adopted July 4, 1776", doc:"declaration"},
  {text:"The Supremacy Clause", doc:"constitution"},
  {text:"Protection against double jeopardy and self-incrimination", doc:"billofrights"},
  {text:"\"...the consent of the governed\"", doc:"declaration"},
  {text:"Establishes the Supreme Court", doc:"constitution"},
  {text:"Freedom of speech, religion, press, and assembly", doc:"billofrights"},
];

SORT_ITEMS.push(
  {text:"Argued for judicial review years before the Supreme Court claimed it", doc:"federalist"},
  {text:"\"Ambition must be made to counteract ambition\"", doc:"federalist"},
  {text:"Warned the new federal courts would keep expanding their own power", doc:"antifederalist"},
  {text:"Pressure that directly led to the Bill of Rights being added", doc:"antifederalist"},
  {text:"Congress could request funds from states but not compel them", doc:"articles"},
  {text:"Required unanimous consent of all 13 states to amend", doc:"articles"},
  {text:"Banned slavery north of the Ohio River", doc:"northwestordinance"},
  {text:"Set the three-stage process for territories to become states", doc:"northwestordinance"}
);

const DOC_LABELS = {
  declaration: "Declaration",
  constitution: "Constitution",
  billofrights: "Bill of Rights",
  federalist: "Federalist Papers",
  antifederalist: "Anti-Federalist Papers",
  articles: "Articles of Confederation",
  northwestordinance: "Northwest Ordinance"
};

// ---------- CONTEXT & DEBATE DOCUMENTS ----------

DOCS.federalist = {
  title: "The Federalist Papers",
  year: "1787–1788",
  eyebrow: "Hamilton, Madison & Jay, writing under the shared pen name \"Publius\"",
  subtitle: "85 essays written to persuade New York to ratify the Constitution. Not law — but the best surviving explanation of what its authors thought they were building.",
  sections:[
    {
      id:"whatitis",
      heading:"What it actually is",
      html:`<p>These essays have no legal force — they're persuasive writing, aimed at a single state's ratification vote. But because two of the Constitution's chief architects wrote them, courts and historians still treat them as the closest thing to a window into ${term("original intent","What the people who wrote and ratified the Constitution understood it to mean at the time — a key question in many modern legal disputes.")}. When a Supreme Court opinion today argues about what the framers "meant," it's often quoting one of these essays.</p>`,
      check:{
        q:"What is the best description of the Federalist Papers?",
        options:[
          "Part of the Constitution itself",
          "85 persuasive essays supporting ratification, frequently cited as evidence of original intent but not law",
          "The official minutes of the Constitutional Convention",
          "An early version of the Bill of Rights"
        ],
        correct:1,
        correction:"The Federalist Papers carry no legal force of their own. Their influence comes from being written by people who helped draft the Constitution — which makes them valuable evidence of intent, not binding text."
      }
    },
    {
      id:"structure",
      heading:"The three essays that matter most",
      intro:"Tap each to see its core argument.",
      sourceUrl:"https://avalon.law.yale.edu/subject_menus/fed.asp",
      reveal:[
        {label:"No. 10 (Madison)", desc:"Argues a large republic controls the danger of 'factions' (interest groups) better than a small one — the opposite of what most political theory at the time assumed.", text:"Extend the sphere, and you take in a greater variety of parties and interests; you make it less probable that a majority of the whole will have a common motive to invade the rights of other citizens... The influence of factious leaders may kindle a flame within their particular States, but will be unable to spread a general conflagration through the other States. — Federalist No. 10"},
        {label:"No. 51 (Madison)", desc:"The actual logic behind checks and balances: 'If men were angels, no government would be necessary... ambition must be made to counteract ambition.' Power is split between branches because no branch can be trusted to police itself.", text:"If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary. In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself. — Federalist No. 51"},
        {label:"No. 78 (Hamilton)", desc:"Argues for what would become judicial review — courts striking down unconstitutional laws — years before the Supreme Court actually claimed that power in Marbury v. Madison (1803).", text:"The interpretation of the laws is the proper and peculiar province of the courts. A constitution is, in fact, and must be regarded by the judges, as a fundamental law. It therefore belongs to them to ascertain its meaning, as well as the meaning of any particular act proceeding from the legislative body. If there should happen to be an irreconcilable variance between the two, that which has the superior obligation and validity ought, of course, to be preferred. — Federalist No. 78"},
      ],
      check:{
        q:"Which essay argued for judicial review years before the Supreme Court actually claimed that power?",
        options:["No. 10","No. 51","No. 78","No. 1"],
        correct:2,
        correction:"Federalist No. 78 (Hamilton) made the case for judicial review in 1788 — fifteen years before the Supreme Court asserted it for itself in Marbury v. Madison (1803)."
      }
    },
    {
      id:"today",
      heading:"Why it matters today",
      html:`<p>Federalist No. 51's logic — that ${term("ambition must be made to counteract ambition","Madison's argument that separation of powers works not because officials are virtuous, but because each branch is given the self-interest to check the others.")} — is still the standard explanation given for why the presidency, Congress, and the courts are built to compete with each other rather than cooperate smoothly. Justices across the ideological spectrum cite the Federalist Papers regularly when arguing about what the Constitution was originally meant to do.</p>`,
      check:{
        q:"Are the Federalist Papers legally binding, the way the Constitution is?",
        options:["Yes, they're part of the Constitution","No — they're persuasive essays, though courts still cite them as evidence of original intent","Only the essays written by Hamilton are binding","They were repealed in 1803"],
        correct:1,
        correction:"No legal force of their own — but because they explain the reasoning of two key framers, they remain a go-to source whenever a court asks what the Constitution was originally meant to mean."
      }
    },
  ],
};

DOCS.antifederalist = {
  title: "The Anti-Federalist Papers",
  year: "1787–1788",
  eyebrow: "Brutus, Cato, and other writers — mostly still pseudonymous today",
  subtitle: "The other side of the ratification debate: essays warning that the new Constitution handed too much power to a distant federal government.",
  sections:[
    {
      id:"whatitis",
      heading:"What it actually is",
      html:`<p>Without these essays, the ratification debate looks one-sided — as if everyone agreed with Hamilton and Madison. They didn't. Anti-Federalist writers (mostly writing under pen names, many still not conclusively identified) argued the new federal government could become as distant and unaccountable as the British monarchy had been, especially since the original 1787 draft had ${term("no bill of rights","The original Constitution listed no individual rights at all — that gap is exactly what Anti-Federalist pressure forced lawmakers to fix in 1791.")}. Their pressure is the direct reason the Bill of Rights exists.</p>`,
      check:{
        q:"What was the central Anti-Federalist objection that directly led to the Bill of Rights?",
        options:[
          "That the Constitution was too short",
          "That the federal government would have too much unchecked power, with no bill of rights to limit it",
          "That states should have no representation in Congress",
          "That the President's term was too long"
        ],
        correct:1,
        correction:"Anti-Federalists warned a strong federal government with no explicit limits on its power over individuals was dangerous. That argument is exactly why the first ten amendments were added in 1791."
      }
    },
    {
      id:"structure",
      heading:"The two strands of the argument",
      intro:"Tap each to see its core worry.",
      sourceUrl:"https://avalon.law.yale.edu/subject_menus/antifed.asp",
      reveal:[
        {label:"\"Brutus\" essays", desc:"Most concerned with the federal judiciary — warned that federal courts, once created, would keep expanding their own power with little check on them. A concern still raised today about judicial power.", text:"The judicial power of the United States is to be vested in a supreme court, and in such inferior courts as Congress may from time to time ordain and establish... These courts will have authority to decide upon the validity of the laws of any of the states, in all cases where they come in question before them... The general legislature might... by judicial decisions, undermine all the powers of the state governments. — Brutus No. 1"},
        {label:"\"Cato\" essays", desc:"Argued directly against Federalist No. 10 — that a republic this large and diverse couldn't represent its people well, and power would drift toward a small distant elite.", text:"...a very extensive territory cannot be governed on the principles of freedom, otherwise than by a confederation of republics... the representation will be so small that your members of Congress will be above the controul of the people... and the senators will be in the interest of, and assimilate to, a standing aristocracy. — Cato No. 3"},
      ],
      check:{
        q:"Which Anti-Federalist writer's essays focused specifically on worries about the federal judiciary's growing power?",
        options:["Cato","Brutus","Publius","Hamilton"],
        correct:1,
        correction:"\"Brutus\" essays focused on the federal courts — warning they'd steadily expand their own authority with little to check them, a concern that still echoes in debates about judicial power today."
      }
    },
    {
      id:"today",
      heading:"Why it matters today",
      html:`<p>Arguments about ${term("federal overreach","The claim that the federal government is exercising more power than the Constitution actually grants it.")}, distrust of distant judicial or federal authority, and concern about an overly powerful central government all have a direct ancestor in these essays. Reading only the Federalist Papers gives a one-sided picture of how contested ratification actually was — it passed by narrow margins in several key states.</p>`,
      check:{
        q:"Why is it useful to read the Anti-Federalist Papers alongside the Federalist Papers?",
        options:[
          "They're legally binding, unlike the Federalist Papers",
          "They show ratification was genuinely contested, not a foregone conclusion the Federalists simply explained",
          "They were written later and override the Federalist arguments",
          "They are the source text for the Bill of Rights word-for-word"
        ],
        correct:1,
        correction:"Neither set of essays is law. But reading only one side makes ratification look like a formality when it was actually a close, contested fight — one that directly produced the Bill of Rights as a compromise."
      }
    },
  ],
};

DOCS.articles = {
  title: "The Articles of Confederation",
  year: "Ratified 1781",
  eyebrow: "The first U.S. national government — replaced in 1789",
  subtitle: "A deliberately weak national government. Its failure is the direct reason the Constitutional Convention happened at all.",
  sections:[
    {
      id:"whatitis",
      heading:"What it actually is",
      html:`<p>After breaking from a king, the original 13 states built a national government almost designed to have no real power — understandable, but unworkable. Congress could request money and troops from states but couldn't compel either. There was no national ${term("executive","No president or equivalent — no single person empowered to enforce national decisions.")} and no national court system. Each state, regardless of size, got one vote, and amending the Articles required unanimous consent of all 13 states — which in practice meant they were almost impossible to fix.</p>`,
      check:{
        q:"Could the government under the Articles of Confederation directly tax citizens?",
        options:["Yes, freely","No — it could only request money from the states, which could refuse","Only during wartime","Only with unanimous Senate approval"],
        correct:1,
        correction:"Congress under the Articles had no power to tax directly — it could only ask states for money, and states routinely fell short or refused outright. This was one of the central weaknesses that doomed the system."
      }
    },
    {
      id:"structure",
      heading:"What was missing, compared to the Constitution",
      intro:"Tap each gap to see how the Constitution later fixed it.",
      sourceUrl:"https://avalon.law.yale.edu/18th_century/artconf.asp",
      reveal:[
        {label:"No executive branch", desc:"Nobody to enforce national decisions. The Constitution's fix: Article II creates the Presidency.", text:"Each state retains its sovereignty, freedom, and independence, and every Power, Jurisdiction, and right, which is not by this confederation expressly delegated to the United States, in Congress assembled. — Articles of Confederation, Article II (all power stayed with the states; there was no president or executive to act on behalf of the whole nation)"},
        {label:"No national court system", desc:"No consistent way to resolve disputes between states. The Constitution's fix: Article III creates the Supreme Court and federal judiciary.", text:"The United States in Congress assembled shall... appoint courts for the trial of piracies and felonies committed on the high seas and establish courts for receiving and determining finally appeals in all cases of captures... — Article IX (the only judicial power granted — limited to piracy and war prizes; no general federal courts existed)"},
        {label:"No power to tax directly", desc:"Congress could only request funds from states. The Constitution's fix: Article I gives Congress direct taxing power.", text:"All charges of war, and all other expences that shall be incurred for the common defence or general welfare... shall be defrayed out of a common treasury, which shall be supplied by the several states, in proportion to the value of all land within each state... — Article VIII (states decided whether to pay; many didn't)"},
        {label:"Amendment required unanimous consent", desc:"All 13 states had to agree — nearly impossible. The Constitution's fix: Article V requires only 3/4 of states.", text:"...nor shall any alteration at any time hereafter be made in any of them; unless such alteration be agreed to in a Congress of the United States, and be afterwards confirmed by the legislatures of every State. — Article XIII"},
      ],
      check:{
        q:"What does the Constitution's Article V require for an amendment to pass, compared to the Articles of Confederation's all-13-states requirement?",
        options:["A simple majority of states","3/4 of the states, after proposal by 2/3 of Congress","Unanimous consent, same as before","Only the President's approval"],
        correct:1,
        correction:"Article V deliberately lowered the bar from unanimous consent to 3/4 of states (after a 2/3 congressional proposal) — still high, but achievable, unlike the near-impossible unanimity the Articles required."
      }
    },
    {
      id:"today",
      heading:"Why it matters today",
      html:`<p>${term("Shays' Rebellion","An armed uprising of indebted farmers in Massachusetts (1786–87) that the weak national government struggled to respond to — widely seen as the final proof the Articles of Confederation weren't working.")} in 1786–87 is usually cited as the event that convinced many leaders the Articles had to be replaced, not patched. It's a useful reminder that the Constitution wasn't written in a vacuum — it was a direct response to a government that had already, visibly, failed.</p>`,
      check:{
        q:"What event is most often cited as the final proof the Articles of Confederation weren't working?",
        options:["The Boston Tea Party","Shays' Rebellion","The Louisiana Purchase","The War of 1812"],
        correct:1,
        correction:"Shays' Rebellion (1786–87) — an uprising the weak national government struggled to put down — convinced many leaders the Articles needed to be replaced rather than amended, helping set the stage for the Constitutional Convention."
      }
    },
  ],
};

DOCS.northwestordinance = {
  title: "The Northwest Ordinance",
  year: "1787",
  eyebrow: "Passed by the Confederation Congress — the same year as the Constitutional Convention",
  subtitle: "Set the process for turning western territories into new states, on equal footing with the original 13 — and banned slavery there, a rare point of clarity in an era of compromise.",
  sections:[
    {
      id:"whatitis",
      heading:"What it actually is",
      html:`<p>This is the rulebook for how the United States grew. It set out a three-stage process: a territory starts under an appointed governor, gains a degree of self-government as population grows, and becomes a full state — admitted on ${term("equal footing","New states would have the same rights and standing as the original 13, not be treated as permanent colonies of the older states.")} with the states that already existed. Every state that joined the union after the original 13 followed some version of this model.</p>`,
      check:{
        q:"What core principle did the Northwest Ordinance establish for new states?",
        options:[
          "New states would be permanent colonies of the older states",
          "New states would be admitted on equal footing with the original 13",
          "Only territories with no enslaved population could ever become states",
          "New states would have no representation in Congress"
        ],
        correct:1,
        correction:"The 'equal footing' principle meant new states would have the same rights as the original 13 once admitted, not a lesser, colony-like status. This shaped how the U.S. expanded for the next century-plus."
      }
    },
    {
      id:"structure",
      heading:"What it actually contained",
      intro:"Tap each part to see what's in it.",
      sourceUrl:"https://avalon.law.yale.edu/18th_century/nworder.asp",
      reveal:[
        {label:"Three-stage admission process", desc:"Territory with an appointed governor → organized territory with some self-government → full statehood once population thresholds were met.", text:"...whenever any of the said States shall have sixty thousand free inhabitants therein, such State shall be admitted, by its delegates, into the Congress of the United States, on an equal footing with the original States in all respects whatever, and shall be at liberty to form a permanent constitution and State government... — Northwest Ordinance, Article V"},
        {label:"Banned slavery in the territory", desc:"Article 6 prohibited slavery north of the Ohio River — notable because the Constitution being drafted the same year deliberately avoided directly addressing the question.", text:"There shall be neither slavery nor involuntary servitude in the said territory, otherwise than in the punishment of crimes whereof the party shall have been duly convicted: Provided, always, That any person escaping into the same, from whom labor or service is lawfully claimed in any one of the original States, such fugitive may be lawfully reclaimed... — Northwest Ordinance, Article VI"},
        {label:"Basic civil liberties", desc:"Guaranteed some protections (religious freedom, certain legal rights) in these territories before the Bill of Rights existed at the federal level.", text:"No person, demeaning himself in a peaceable and orderly manner, shall ever be molested on account of his mode of worship or religious sentiments, in the said territory. — Northwest Ordinance, Article I"},
        {label:"Encouraged public education", desc:"Set aside land in each township specifically to support public schools — an early federal nod to public education.", text:"Religion, morality, and knowledge, being necessary to good government and the happiness of mankind, schools and the means of education shall forever be encouraged. — Northwest Ordinance, Article III"},
      ],
      check:{
        q:"What did the Northwest Ordinance's Article 6 do?",
        options:["Established the Supreme Court","Banned slavery in the territory north of the Ohio River","Created the first national bank","Set the U.S.–Canada border"],
        correct:1,
        correction:"Article 6 banned slavery in the Northwest Territory — a clear stance the Constitution being written that same year deliberately avoided taking at the national level."
      }
    },
    {
      id:"today",
      heading:"Why it matters today",
      html:`<p>The Ordinance is a useful corrective to any assumption that the founding generation was unanimous on slavery — the same year the Constitution avoided the issue through compromise, this law took a direct stance in the territory it governed. It's also the quiet origin of how dozens of states eventually joined a union that started with only 13.</p>`,
      check:{
        q:"Why is the Northwest Ordinance a useful document to know about alongside the Constitution?",
        options:[
          "It replaced the Constitution",
          "It shows the founding generation wasn't unanimous on slavery, taking a direct stance the same year the Constitution avoided one",
          "It was written by the same five men who wrote the Constitution",
          "It abolished slavery nationwide"
        ],
        correct:1,
        correction:"It didn't abolish slavery nationwide — only in this one territory. But the contrast with the Constitution's silence on the question, in the very same year, is a useful nuance often left out of the founding story."
      }
    },
  ],
};

// ---------- KEY PEOPLE ----------

const KEY_PEOPLE = [
  {name:"Thomas Jefferson", role:"Principal author, Declaration of Independence",
   blurb:"Drafted most of the Declaration's text at age 33. Later the 3rd President. Not present at the Constitutional Convention — he was serving as minister to France at the time."},
  {name:"Benjamin Franklin", role:"Elder statesman, diplomat, editor",
   blurb:"At 81, the oldest delegate at the Constitutional Convention. Helped edit the Declaration and was instrumental in securing French support during the Revolution."},
  {name:"John Adams", role:"Independence advocate, 2nd President",
   blurb:"Pushed hard for declaring independence in 1776 and urged Jefferson to write it. Later became the new nation's first Vice President, then its second President."},
  {name:"George Washington", role:"Convention president, 1st President",
   blurb:"Presided over the Constitutional Convention but didn't write the document himself — his presence lent it credibility. Set the precedent of a two-term presidency."},
  {name:"James Madison", role:"\"Father of the Constitution,\" drafted the Bill of Rights",
   blurb:"Took detailed notes at the Convention, shaped much of the Constitution's structure, co-wrote the Federalist Papers, then personally drafted the Bill of Rights in 1789."},
  {name:"Alexander Hamilton", role:"Lead author, Federalist Papers; first Treasury Secretary",
   blurb:"Wrote the majority of the Federalist Papers, arguing for a strong federal government — including the case for judicial review in No. 78, years before the Supreme Court claimed it."},
  {name:"John Jay", role:"Federalist Papers co-author, first Chief Justice",
   blurb:"Wrote several Federalist essays, then became the first Chief Justice of the United States Supreme Court in 1789."},
  {name:"George Mason", role:"Refused to sign the Constitution over its lack of a bill of rights",
   blurb:"A Virginia delegate whose objection — that the Constitution had no explicit protection for individual rights — fed directly into the push for the Bill of Rights."},
  {name:"Patrick Henry", role:"Anti-Federalist, opposed ratification",
   blurb:"Famous for \"Give me liberty, or give me death!\" (1775). Later argued forcefully against ratifying the Constitution, fearing it gave the federal government too much power."},
];
