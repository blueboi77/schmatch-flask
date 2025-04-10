export interface Scheme {
  id: string;
  title: string;
  description: string;
  eligibilityCriteria: {
    minAge?: number;
    maxAge?: number;
    castes?: string[];
    occupations?: string[];
    annualIncome?: {
      min?: number;
      max?: number;
    };
  };
  benefits: string[];
  applicationLink: string;
  healthCondition?: string;
  educationLevel?: string;
  state?: string;
}

export const schemes: Scheme[] = [
  {
    "id": "a2ks.json",
    "title": "Access To Knowledge For Technology Development And Dissemination (A2K+) - Studies",
    "description": "Access to Knowledge for Technology Development and Dissemination (A2K+) is a scheme targeted towards developing mechanisms to disseminate science, technology and innovation-related information to industries, research and academic institutions, In-house R&amp;amp;D units of industry, Scientific &amp;amp; Industrial Research Organizations (SIROs), consultants, industry associations, techno-entrepreneurs, government departments and others. &lt;br&gt; &gt; **Supported Programmes** 1: Supporting industrial technology-related studies (A2K+ Studies) 2: Supporting the organization of national and international conferences, exhibitions etc. (A2K+ Events) 3: Support for Technology Development and Utilization Programme for Women 4: Technology Development and Demonstration Programme (TDDP) &lt;br&gt; &gt; **Objectives** The objective of the A2K+ Studies program is to support emerging areas of technology aimed at providing useful information and knowledge base to industry, industry associations, academia, research institutions, consultants, entrepreneurs, research students, and policymakers for doing any further work in these areas; to study and analyze the developments in the emerging technology areas and document the findings, leanings, and outcomes for wider dissemination; and preparation of status reports on technologies from publicly funded institutions, that are ready for commercialization with a view to catalyzing the translation of research output from institutions to market.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The support shall be towards the following items of expenditure:",
      "Note 1: DSIR support towards manpower expenses shall remain fixed respective of changes in fellowship rates if any.",
      "Note 2: No support is granted for setting up general-purpose infrastructural facilities."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "aabym.json",
    "title": "Aam Aadmi Bima Yojana (Maharashtra)",
    "description": "The &amp;quot;Aam Aadmi Bima Yojana&amp;quot; scheme is implemented by the Social Justice &amp;amp; Special Assistance Department, Government of Maharashtra. This Centrally Sponsored Scheme is aimed at providing insurance and scholarship benefits to landless laborers in rural areas, aged 18 to 59 years. The annual premium for each member is \u20b9200/-, with 50% of the premium subsidized by the State and Central Governments. The scheme covers all categories of beneficiaries and focuses on providing financial security through insurance and educational scholarships.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "adps.json",
    "title": "AlCTE - Distinguished Professional Scheme",
    "description": "The All India Council for Technical Education (AICTE), under the Ministry of Education, has launched the AICTE-Distinguished Professionals Scheme. This initiative aims to enhance the quality of technical education in India by leveraging the expertise of professionals, emeritus professors, and eminent personalities. > **Objective:** The Distinguished Professional Scheme (DPS) intends to utilize the expertise of highly qualified and eminent professionals by creating a pool of experts from industry, institutes, research labs, and senior civil service officers in their domain to motivate and inspire the students/faculty members of AICTE-approved institutes. > **Expectations from Distinguished Professionals:** (i) Interaction with faculty, UG /PG, and Ph.D. students. (ii) Promotion of industry connect program. (iii) Promotion of Research and Innovation. (iv) Promotion of startups and entrepreneurship. (v) Support the Institution to enhance the employability of students. (vi) Promotion of Indian Knowledge System (IKS) and activities related to societal upliftment. > **Duration:** The Distinguished Professional Scheme nominees can hold their position for up to three years or until they turn 75, whichever comes first. Extensions are possible based on fitness.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ai-tgses.json",
    "title": "AICTE-INAE Travel Grant Scheme For Engineering Students From AICTE Approved Engineering College/Institution",
    "description": "A Travel Grant Scheme by the All India Council for Technical Education (AICTE) and by the Indian National Academy of Engineering (INAE), for the students from AICTE approved Engineering College/institutions. The scheme aims at enhancing the quality of engineering education in the country and to inculcate a culture of research amongst the students. The scheme aims to provide partial travel assistance and registration fees to Bachelors&#39;s and Masters&#39;s Level engineering students for presenting a research paper at an international scientific event(conference/seminar/symposium/workshop/exhibition etc) to encourage engineering students to engage in research. Pre-final and final year students of B.E./B.Tech or Integrated M.Tech and first and second-year students of M.E./M. Tech from AICTE-approved Engineering Institutions is eligible under the scheme. The student must have scored a minimum 7 CGPA or 65% in order to be eligible to apply under this scheme. The student should have a letter of acceptance for presenting a research paper that has been accepted in a conference/seminar/symposium/workshop/exhibition abroad.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Financial Support"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "aicte-spices.json",
    "title": "AICTE - Scheme For Promoting Interests, Creativity And Ethics Among Students",
    "description": "The scheme &quot;AICTE - Scheme for Promoting Interests, Creativity and Ethics among Students (SPICES)&quot; is a scheme for the institutions by the All India Council for Technical Education (AICTE), Department of Higher Education (DoHE). This scheme provides financial support to institutions for developing students&#39; clubs for the well-rounded development of students by promoting their interests, creativity, and ethics. This club should serve as a model for other clubs in the institution and also those in other institutions. <br> Objective To energize and position students club/ Chapters/ Societies as facilitating entities for the pursuit of individual interests, creative work, showcasing talent, networking and teamwork opportunities, social experience; organization and management skills, exposure to professional ethics, etc.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Duration: One-Year",
      "Limit of Funding: \u20b9 1,00,000 only (one-time grant to one institute)",
      "Disbursement of the Funds: \u20b9 1,00,000 as advance",
      "Programs/ Activities targeted in the Clubs: Evolution of Interests/Hobbies, Creativity/ Imagination/ Innovation, and Ethics/ Value through a range of student activities."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "aicte-ssss.json",
    "title": "AICTE-Swanath Scholarship Scheme For Students",
    "description": "A scholarship scheme by the Student Development Cell (StDC) of All India Council for Technical Education (AICTE) to provide encouragement and support to orphans, wards of parents who died due to Covid-19, wards of Armed Forces, and Central Paramilitary Forces martyred in action (Shaheed) to pursue education. This is an attempt to give every such child, an opportunity to study further and prepare for a successful future through education in AICTE Approved institutions and courses. The family income from all sources should not be more than \u20b98,00,000 per annum during the financial year of the application. The candidate should be currently studying in the AICTE Approved institutions and courses at the Degree/Diploma level in regular mode (in 1st /2nd / 3rd /4th year). The candidate should NOT be a Recipient of any of the Central Govt. / State Govt. / AICTE Sponsored scholarships. A maximum of 2000 scholarships (1000 for Degree Students and 1000 for Diploma Students) will be awarded every year to eligible candidates as above. \u20b950,000.00 per annum for every year of study i.e. maximum 4 years duration for first-year admitted Degree students and maximum 3 years for Diploma Students as lump sum amount towards payment of college fee, purchase of computer, stationeries, books, equipment, software, etc.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "NUMBER OF SCHOLARSHIPS",
      "A maximum of 2000 scholarships (1000 for Degree Students and 1000 for Diploma Students) will be awarded",
      "every year to eligible candidates as above.",
      "AMOUNT OF SCHOLARSHIP",
      "Rs. 50,000.00 per annum for every year of study i.e. maximum 4 years duration for the first year admitted Degree students and maximum 3 years for Diploma Students as lump sum amount towards payment of college fee, purchase of computer, stationeries, books, equipment, software, etc.",
      "No other additional grant will be payable in lieu of hostel charges, medical charges, etc. In case the student is currently studying in the 2nd /3rd/4th year at degree level the duration of the scholarship will be reduced to 3/2/1 year respectively. Similarly, for students currently studying in the 2nd /3rd year at diploma level, the duration of the scholarship will be reduced to 2/1 year respectively."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "aiideals.json",
    "title": "AICTE-IDEA (Idea Development, Evaluation & Application) LAB SCHEME",
    "description": "AICTE has decided to establish IDEA (Idea Development, Evaluation &amp;amp; Application) Lab in AICTE approved institutions, encouraging students for application of science, technology engineering and mathematics (STEM) fundamentals towards enhanced hands-on experience, learning by doing and even product visualization. As a common facility embedded in the institution, the IDEA Lab will make engineering graduates more imaginative and creative, besides getting basic training in the 21st century skills like- critical thinking, problem solving, design thinking, collaboration, communication, lifelong learning etc. IDEA Lab can facilitate the students and faculty to \u201cengage, explore, experience, express and excel\u201d as desired by the Hon&amp;#39;ble Prime Minister in the wake of release of National Educational Policy 2020, &gt; **Purpose:** - The purpose of IDEA Lab is to provide all facilities under one roof, for conversion of an idea into a prototype. With these facilities in the campus, more students and faculty will be encouraged to take up creative work and in the process, get training on creative thinking, problem solving, collaboration etc. which conventional labs are not able to. - The focus will be on training students so that they become imaginative and creative and stay so at the workplaces they join. The whole idea is to transform engineering education with such a Lab in all colleges and for this they must proactively expose all students to the IDEA Lab, organize training sessions for interested students as well as support projects and by providing online learning materials. &gt; **Proposal:** - As the IDEA Lab is going to be a long-term intervention aiming to transform education imparted in the institution, the proposal must spell out a clear vision for the Lab, plan of implementation, mobilization of resources, strength and enthusiasm of faculty, utilization and expansion of facilities, etc. - The alignment of activities with larger national goals/ missions/ initiatives or industrial requirements or serving disadvantaged sections of society etc. and commitment of resources for the same, will impart an edge for any proposal. - Shortlisted proposals will be subjected to scrutiny by a panel of experts before sanctioning of the project by AICTE. &gt; **Implementation:** The college/ educational campus/ university and industry are expected to participate financially, to match the contribution sought from AICTE or even exceed it, in establishing the IDEA Lab which ideally requires: - An area of 5000 sq. ft. - Should ideally remain open 24x7. - To be equipped with facilities, tools and consumables to support translation of an idea to prototype development or develop solution of a problem. - To hold workshops/ trainings, ideation sessions, boot-camps, competitions etc. and participate in similar activities organized by other IDEA Labs/ organizers and also in national/ international events so as to ensure that IDEA Lab is used productively and also extensively. - To maintain the IDEA Lab, keep it well-furnished, take care of security, provide a safe working environment and stock adequate supplies of consumables. - To provide necessary staff and all support facilities and amenities required to operate and maintain the Lab. - To follow the guidelines issued by AICTE in the matter of IDEA Lab and other Government of India rules besides following the enunciated Code of Conduct (as in Annexures) in letter and spirit. <br> <br> <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "am-gris.json",
    "title": "AICTE \u2013 Mitacs Globalink Research Internship (GRI) Scheme",
    "description": "AICTE, on 23rd February 2018, entered into a Memorandum of Understanding with Mathematics of Information Technology and Computer Systems (MITACS) Canada for AICTE \u2013 MITACS Globalink Research Internships (GRI) Program to foster cross-border partnerships focused on creating a platform that opens the path for collaborative research between Canada and India to a wider pool of student talent in India. The AICTE-MITACS GRI Program is open to Science, Technology, Engineering, and Mathematics (STEM) disciplines. The duration of the internship is 12 weeks. A maximum of 300 students are accepted in a financial year. The student fulfilling the eligibility criteria shall apply directly to MITACS Canada via its portal. The total cost of the program is $12,000 CAD per student. MITACS will contribute $9,000 CAD per student. AICTE will contribute $3,000 CAD per student. The full cost per student includes airfare, visa, medical, stipend, accommodation, Globalink Student Mentors, programming, and research costs. It will also include access to Globalink branded activities in Canada, which may include professional skills workshops, receptions, and industrial engagement activities.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ams.json",
    "title": "AICTE-Margdarshan scheme",
    "description": "Margdarshan Initiative has been introduced by All India Council for Technical Education in 2018 for facilitating the technical institutes in order to improve the quality of technical education as a whole through accreditation by providing access to the facilities available in host institute.This Initiative is a facilitative mechanism that aims to foster &amp; augment the support ecosystem in the Institutes approved by AICTE for enhancing their quality across all domains. > **Margdarshan Institute or Mentor Institute(MI):** A well-established AICTE approved institute/Centrally Funded Institutes such as IITs/ NITs /IIITS/IISc/ISERs/IIMs etc. referred to as Margdarshan Institute or Mentor Institute (MI) is supported with an objective to mentor up to 10 nearby institutes in achieving accreditation. > **Mentee Beneficiary Institute (MBI):** A mentee beneficiary institute (MBI) shall be facilitated by the MI by sharing the best practices, guidance for initiating project proposals, achieving outcome based education and other related aspect. The MBI should be located within a reasonable distance of MI (approximately 200 km). The MI shall be required to submit a list of potential MBIs (limited to 10 institutes) while submitting the application. It may be noted that the participation of an institute to receive mentoring by an MI is purely on voluntary basis. On confirmation of the nomination as MI from AICTE, an MoU shall be executed between the MI and the respective associated MBIs. The Council does not approve of any sort of financial transaction or effect accruing out of such MOU. General terms and conditions of MOUs may be mutually decided between the MI and respective MBIs. In addition, MOU should mandatorily contain undertaking from respective MBIs stating that: - They have never been enrolled as MIs by AICTE. - They have never been mapped as MBI with any other MI. - None of their programs were accredited in the past ten years. > **Prerequisites:** An institute seeking MI status must carry out an initial assessment of MBI to ascertain the threshold of host institute for getting accreditation (check of basic parameters such as admissions/enrolment for last three years, faculty, infrastructure etc.). Selecting a MBI without having adequate potential shall be a futile exercise. MIs have to submit present status of the department-wise approved intake, enrolled admissions and present accreditation status of all the proposed MBIs. <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "For Margdarshan Institute or Mentor Institute(MI):",
      "Note: It is clarified that overall expenditure shall not exceed the funds sanctioned/ allotted to the MI. No reimbursement shall be made for expenditure exceeding the given amount.",
      "For Mentee Beneficiary Institute (MBI):"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "arps.json",
    "title": "AICTE - Research Promotion Scheme (RPS)",
    "description": "The scheme &quot;AICTE - Research Promotion Scheme (RPS)&quot; was introduced by the All India Council for Technical Education (AICTE), Department of Higher Education (DoHE) in order to promote research in identified thrust areas of technical education. AICTE approved Technical Institutions/University Departments having the relevant PG programs and having full-time regular faculty with research experience and publications, are eligible to apply to this scheme. The maximum limit of funding is \u20b9 25,00,000. The duration of the project will be three years from the date of receipt of funds in the institute\u2019s account.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Duration of the Project:",
      "The duration of the project will be three years from the date of receipt of funds in the institute\u2019s account.",
      "Limit of Funding:",
      "(a) Maximum limit of funding is \u20b9 25,00,000.",
      "(b) Non-Recurring 75% and Recurring 25% of the total sanctioned grant.",
      "Disbursement of the Funds:",
      "(a) 100% Non-recurring and 50% of the recurring grant of the total sanctioned amount.",
      "(b) 50% of the total sanctioned recurring grant only after submission of the Audited Utilization Certificate and all requisite documents.",
      "Note 1: The grant will be utilized strictly for the purpose as specified in the sanction letter. Re-appropriation of funds from Recurring to Non-Recurring is allowed but not vice versa; Non-Recurring and recurring heads are 75% and 25% respectively of the total grant unless otherwise recommended by",
      "AICTE experts. The list of equipment decided by the experts is final and there can be no changes",
      "later on.",
      "Note 2: The equipment(s)/item(s) purchased from out of non-recurring should be as per the specifications sanctioned by AICTE. The purchase cost below the sanction cost shall be restricted to the actual cost, and vice versa restricted to sanctioned cost. Excess costs shall be met by the Institute from its own resources.",
      "Note 3: The recurring grant can be utilized for the items sanctioned by the AICTE. This should not be used for travel abroad to attend conferences/seminars. However, for presenting a Paper in a Seminar /",
      "Conference within the country, the travel expenses may be met from the recurring grant. Further,",
      "expenditure incurred towards hiring staff on a contract basis shall be considered only if the same",
      "was recommended by the Experts and approved by AICTE. No budget be utilized for hiring",
      "permanent staff."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "astpss.json",
    "title": " AICTE SHORT TERM TRAINING PROGRAMME-SFURTI SCHEME",
    "description": "Short Term Training Programme-SFURTI Program, launched by the All India Council for Technical Education (AICTE), aims to provide financial assistance to the institutions for conducting faculty and student trainings to enable faculty members and students in the field of technical education and to introspect and learn techniques that can help prepare faculty and students to impart their research work in the development of small-scale business for the nation. All India Council For Technical Education (AICTE) and Indian Micro Enterprises Development Foundation (IMEDF) is conducting STTP-SFURTI Program .This is a special purpose vehicle for developing alternatives group that accelerates the development of micro-enterprises. IMEDF is also the nodal agency of Ministry of Micro, Small and Medium Enterprises, Government of India for the development of clusters under STTP-SFURTI (Scheme of Fund for Regeneration of Traditional Industries. &lt;br&gt; **Objectives:** - To understand the Scheme of Fund for Regeneration of Traditional Industries (SFURTI). - To train the students and faculty in identifying and presenting a project proposal. - To enhance and sharpen their skills to develop a viable detailed project report. - To understand resource management for building a project with technological and social innovations. - To develop an in depth understanding of project management, resolve challenges faced in sustainable rural economic development and derive lessons on social, economic and environmental impacts. &lt;br&gt; &lt;br&gt; <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Financial Assistance: Limit of funding \u20b9 4,00,000/- to the institution.",
      "Disbursement of the Fund:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "asttpsu.json",
    "title": "AICTE-SHORT TERM TRAINING PROGRAMME (STTP) (UT-J&K,LADAKH AND NER)",
    "description": "Short Term Training Program (STTP) in North-Eastern Region (NER) and UTs of J&amp;amp;K and Ladakh intends to conduct faculty trainings through financial assistance from AICTE to enable faculty members in the field of technical education introspect learn techniques that can help prepare students for active and successful participants in a knowledge society. &lt;br&gt; **Duration of Programme:** It is a residential programme of six days. The approved STTP shall be conducted within six months from the date of release of funds.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "asyadcf.json",
    "title": "Award Of Scholarships To Young Artists In Different Cultural Fields",
    "description": "The scheme \u201cAward of Scholarships to Young Artists in Different Cultural Fields\u201d was launched by the Ministry of Culture, Government of India. This scheme seeks to give assistance to young artists of outstanding promise for advanced training within India in the field of Indian Classical Music, Indian Classical Dance, Theatre, Mime, Visual art, Folk, Traditional and Indigenous Arts, and Light Classical Music. **Subjects/Fields in which Scholarships can be awarded:** 1. Indian Classical Music - Classical Hindustani Music (Vocal and Instrumental), Classical Carnatic Music (Vocal &amp;amp; Instrumental, etc.) 1. Indian Classical Dance/ Dance Music - Bharatnatyam, Kathak, Kuchipudi, Kathakali, Mohiniattam, Odissi Dance/ Music, Manipuri Dance/ Music, Thangta, Gaudiya Nritya, Chhau Dance/ Music, Sattriya dance. 1. Theatre - Any specialized aspect of theatre art, including acting, direction, etc., but excluding playwriting and research. Mime. 1. Visual Arts - Graphics, Sculpture, Painting, Creative Photography, Pottery &amp;amp; Ceramics, etc. 1. Folk, Traditional, and Indigenous Arts - Puppetry, Folk Theatre, Folk dances, Folk Songs, Folk Music, etc. 1. Light Classical Music - a) Thumri, Dadra, Tappa, Qawali, Ghazal, b) Light Classical music based on Carnatic Style, etc. c) Rabindra Sangeet, Nazrul Geeti, Atulprasad. **Terms of Scholarship:** 1. The nature of training will be determined in each case after taking into consideration the previous training and background of the scholar. Normally, it will be in the nature of advanced training under a Guru/Master or in a recognized institution. 1. The Scholar will be required to undergo a rigorous training. Such training will include minimum of three hours a day for practice alone apart from the time spent for acquiring knowledge of the theory of the subject/field concerned and also an appreciation of the related disciplines.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "atbwt.json",
    "title": "AICTE-Technical Book Writing & Translation Scheme",
    "description": "AICTE-Technical Book Writing &amp;amp; Translation scheme has been launched by the All India Council for Technical Education (AICTE) to promote the use of &amp;#39;Scheduled Regional Language&amp;#39; in Technical Education for creating knowledge base in local language and to encourage creation of treasure of latest technical knowledge incorporating the newest developments by grant of financial support to the distinguished faculty/writers/translators. &gt; **Objectives:** To encourage, promote and support maximum number of writers to write and publish the technical subject books in Indian scheduled regional language including Hindi. &gt; **List of (12) Scheduled Regional Languages included in Technical Book Writing Scheme of AICTE:** 1. Hindi. 1. Assamese. 1. Bengali. 1. Gujarati. 1. Kannada. 1. Malayalam. 1. Marathi. 1. Odia. 1. Punjabi. 1. Tamil. 1. Telugu. 1. Urdu.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Maximum funding for translation work and for original Technical Book Writing (Funding will be shared in case of multiple authors) shall be limited to :"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "atppe.json",
    "title": "AICTE-Training programs for Physical Education Trainers/Sport-Games Teachers/Director of Sports",
    "description": "Training programs for Physical Education Trainers/Sport-Games Teachers/Director of Sports, launched by All India Council for Technical Education, aims to support institutions in conducting trainings to develop the skill of the participants to involve the masses in traditional sports/games and fun games for physical activity through recreation. **Objective:** The objectives of this program are: - To orient the participants to develop physical fitness through mass participation in physical activities. - To develop the skill of the participants to involve the masses in traditional sports/games and fun games for physical activity through recreation. - To update the participants with modern rules, regulations and techniques. - To empower the participants to contribute to sports management and sports technology and to manage mass physical activities for fitness and recreation. **Duration/Type/Participants:** Two weeks residential program with minimum Twenty Five participants. **Period of completion of Training Programme:** The programme will be conducted within six months of receipt of fund from AICTE. If it is not conducted during above period due to any reason, then fund along with interest is to be returned to AICTE. **Test and Certificate:** A test to be conducted at the end of the Program and a certificate to be issued to only those participants who attended the Program and qualified in the test. **Terms and conditions:** - Funds once released/sanctioned for organizing the particular topic/ area of program cannot be utilized for any other program. - In case the event is cancelled, the funds will be returned back to AICTE immediately with interest accrued thereon. - Any extra money required to complete the program must be borne by the institute from their own resources. But the quality of the activities should not be compromised. - At least 25 percentage of course curriculum should be transacted through resource persons from outside the training institutions. However, Honorarium to Resource Persons (within and outside) including TA/DA shall be restricted \u20b9 2,000,00/-.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Funding to the institution: \u20b9 6,39,000/- per program."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "atujtfl.json",
    "title": "AICTE- Technical University Joint Training Programs for Librarians",
    "description": "AICTE- Technical University Joint Training Programs for Librarians, launched by the All India Council for Technical Education, aims to provide financial assistance in conducting training for Librarians to prepare them for being successful and effective in a knowledge society. **Objectives:** The objectives of the program are; - To provide a dynamic and quality user centered library and information services that enhance teaching, learning and research while inculcating life-long learning skills and fostering human development. - To bring high quality, scholarly information resources and services to the University through Library. **Duration/Type/Participants:** The AICTE \u2013 technical university will be of five days residential training program with minimum 25-30 participants. **Number of Programs:** The university shall conduct one such training program in a financial year. **Training on moral values:** Minimum one session of 3 hours in the program for Librarians may be kept for training related to Moral Values, Ethics, Behavioral Sciences &amp;amp; Attitude etc. **Infrastructure:** Being a residential program, the university shall have requisite infrastructure viz. guest house and dining hall etc. **Role and responsibilities of technical university:** - The university shall conduct the joint training program for Librarians strictly in accordance with the provisions of the scheme document. - The university will do the certification of these programs jointly with AICTE. It shall be ensured by the university that the certificates shall be issued only to those participants, who qualify the test to be necessarily conducted at the end. - The university will act as the facilitator for the operation of the training program. - The university will be accountable for finance/ grants sanctioned under the scheme and shall abide by the terms and conditions stipulated by AICTE for financial grants. - The university will constitute a Project Monitoring committee for effective implementation of the scheme. AICTE will provide its representative as a member on that committee. - The university shall submit, yearly report, detailed statement of expenditure and Utilization Certificate, in the prescribed format for sanctioned grants, within a month after the end of each financial year duly audited by a certified Chartered Accountant firm. The accounts shall be open to inspection by the officials of AICTE and an audit by the Statutory Auditors. - After conduct of each of the training program, the documents shall be submitted by the university to AICTE.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The maximum total expenditure for conduct of one training program will be \u20b9 3,00,000/- (or the actual amount expended) to be shared 50:50 by AICTE and Technical university."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "avowwobc.json",
    "title": "Assistance to Voluntary Organizations Working for Welfare of OBCs ",
    "description": "The central sector scheme &amp;quot;Assistance to Voluntary Organizations Working for Welfare of OBCs&amp;quot; was launched by the Ministry of Social Justice and Empowerment, Government of India. The scheme aims to involve the voluntary sector to improve the educational and socio-economic conditions of the target group i.e. OBCs, to upgrade skills to enable them to start income-generating activities on their own or get gainfully employed in some sector or the other. The projects can be implemented in villages under the Saansad Adarsh Gram Yojana (SAGY). &lt;br&gt; &gt; **Types of Activities Covered** Carpentry, Computer Education, Craft Centre, Dari making Training, Diesel Pump set repairing, Electrical training, Fruit Preservation Training, Gem cutting, Welding and Fitter training, Photography, Plumbing, Printing, composing and book binding, Scooter, motorcycle and auto-rickshaw repairing, Spinning and weaving, Typing and shorthand, Tie and dye training, Leather art, Denting and spray painting, TV, VCR and radio repair.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Extent of Assistance:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ayuvfak.json",
    "title": "AICTE - YOUTH UNDERTAKING VISIT FOR ACQUIRING KNOWLEDGE (YUVAK): STUDY TOUR OF ATAL TUNNEL, HIMACHAL PRADESH",
    "description": "AICTE has launched a new scheme namely ,AICTE YOUTH UNDERTAKING VISIT FOR ACQUTRING KNOWLEDGE (YUVAK) STUDY TOUR OF ATAL TUNNEL, HIMACHAL PRADESH, on 21st May 2021 to provide financial grants to the team of one faculty and 10 students from AICTE approved institutions for the study tour of ATAL TUNNEL. **Objectives:** - To gain firsthand knowledge &amp;amp; information about the latest techniques used in construction of the tunnel and in particular about the New Austrian tunneling method. - Gain insight about the challenges &amp;amp; of risks encountered during the execution of this project and their resolution with particular reference to excavation during heavy snowfall in winter, blasting and digging of unstable rocks, alignment of the tunnel in view of digging &amp;amp; excavation from both ends of the tunnel, excavation &amp;amp; tunneling at more than 46 avalanche sites on approaches to the tunnel, disposal of huge quantities of excavated rock and soil, constant dewatering of heavy ingress of water, mudslides, landslides etc. - For enhancing the quality of engineering education in the country and to inculcate the research &amp;amp; innovation culture amongst the students. - To encourage engineering students to improve their field of technical education.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Grant will be for Team of 10 Students + 1 Faculty member of the Institute as per details below:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "bbbp.json",
    "title": "Beti Bachao Beti Padhao",
    "description": "In 2015, the Indian government introduced the Beti Bachao, Beti Padhao (BBBP) scheme to address concerns about gender discrimination and women empowerment in the country. The name Beti Bachao, Beti Padhao translates to \u2018Save the girl child, educate the girl child\u2019. The scheme aims to educate citizens against gender bias and improve the efficacy of welfare services for girls. It was launched with initial funding of Rs. 100 crore (US$ 13.5 million). <br> > **Objectives:** The Beti Bachao Beti Padhao Yojana aims to achieve the following goals: 1. Improve the child sex ratio 2. Ensure gender equality and women empowerment 3. Prevent gender-biased, sex-selective elimination 4. Ensure survival and protection of the girl child 5. Encourage education and participation of the girl child <br> > **The scheme is divided into three components:** (1) advocacy campaigns were launched to address the issue of declining CSR and SBR; (2) multi-sectoral interventions were planned and are being implemented in gender-critical districts across the country; and (3) a financial incentive-linked scheme\u2014Sukanya Samriddhi scheme\u2014was launched to encourage parents to build a fund for female children. <br> > **Key beneficiaries under the BBBP initiative:** 1. Primary Segment: Young and newly married couples; pregnant and lactating mothers; and parents. 2. Secondary Segment: Youth, adolescents (girls and boys), in-laws, medical doctors/ practitioners, private hospitals, nursing homes and diagnostic centres. 3. Tertiary Segment: Officials, PRIs, frontline workers, women SHGs/collectives, religious leaders, voluntary organisations, media, medical associations, industry associations and the people at large. <br> Programmes and interventions designed to incentivise improvements in the CSR and SRB ratios are being implemented in the shortlisted gender-critical districts. The scheme outlines measurable outcomes and indicators to monitor progress in these 640 districts. The performance targets are as follows: 1. Improve SRB in select gender-critical districts by 2 points per year 2. Reduce gender differentials in the under-five child mortality rate metric by 1.5 points per year 3. Provide functional toilets for girls in every school in select districts 4. Increase first trimester antenatal care registration by 1% per year 5. Improve nutritional status by reducing the number of underweight and anaemic girls (under five years of age) <br> > **Key Developments:** 1. The National SRB Index has shown an upward trend from 918 (2014-15) to 934 (2019-20), an improvement of 16 points in five years. 2. 422 districts out of the 640 districts covered under BBBP have shown improvement in SRB from 2014-15 to 2018-19. 3. The National Gross Enrolment Ratio (GER) of girls in secondary schools improved from 77.45 (2014-15) to 81.32 (2018-19)\u20143.87 points in four years. 4. Proportion of schools with separate, functional toilets for girls rose from 92.1% in 2014-15 to 95.1% in 2018-19. 5. 1st trimester ANC registration rate increased from 61% in 2014-15 to 71% in 2019-20. Institutional deliveries rate soared from 87% in 2014-15 to 94% in 2019-20.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Under this scheme, several initiatives have been undertaken by districts to build consciousness among target groups and other stakeholders:",
      "Digital Guddi-Gudda Board:",
      "A digital platform for exhibiting gender disparity in birth rates and providing information on schemes and programmes created for safeguarding the girl child",
      "Udaan - Sapne Di Duniya De Rubaru:",
      "Initiative offering girls an opportunity to shadow professionals in fields of their choice",
      "My Aim My Target Campaign:",
      "Recognition programme to felicitate top academic performances by girls in higher secondary schools",
      "Lakshya Se Rubaru:",
      "Internship programme for female students in colleges \u2013 for encouraging them to make informed decisions about their careers",
      "Noor Jeevan Ka Betiyan:",
      "A week-long campaign celebrated with gender empowerment theme-based interactive activities organised in Panchayats, schools, and colleges",
      "Bitiya and Birba:",
      "Awareness campaign on the BBBP initiative, along with environmental protection. Under this, each mother of a newly born girl child is celebrated and honored with a plant",
      "Aao School Chalein:",
      "Enrolment campaign involving door-to-door visits and registrations to ensure 100% enrolment of girls in schools",
      "Collector Ki Class:",
      "Initiative offering free coaching classes and career counselling for underprivileged girls in public schools and colleges",
      "Bal Cabinet:",
      "Youth leadership programme where girl students simulate government cabinets and ministerial roles to discuss and resolve issues"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "bfa.json",
    "title": "Buti Foundation Award",
    "description": "The Buti Foundation Award, established in 2007 by the Buti Foundation, New Delhi, is a biennial award recognizing innovative and outstanding research in the field of Plasma Science &amp; Technology. The award aims to honor a Scientist/Engineer under the age of 45 years for their significant contributions to this field. The award includes a medal and a cash prize.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "biocare.json",
    "title": "Biotechnology Career Advancement And Re-orientation (BioCARe) Programme For Women Scientists",
    "description": "Biotechnology Career Advancement and Re-orientation (BioCARe) Programme, a special scheme of the Department of Biotechnology (DBT), Ministry of Science &amp;amp; Technology, the government of India aims to enhance the participation of women scientists in India towards research in Biotechnology and allied area. The program is mainly for the career development of unemployed female scientists for whom it will be the first \u201csanctioned\u201d extramural research funding. Through this endeavor of the Department, a concerted effort would be made to give women scientists a strong foothold into the scientific profession, to help them re-enter the mainstream, and to provide a launch pad for further forays into the field of science and technology. Accordingly, applications are invited from Indian female scientists to apply to the program. On the behalf of Department of Biotechnology, this program is being managed by the Processing and Management Unit (PMU) established at International Centre for Genetic Engineering and Biotechnology (ICGEB), New Delhi.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Date of Commencement of Project & its Duration",
      "Project Cost & Fellowship to Project Investigator",
      "Project Cost & Fellowship: Based on the applicant's qualifying degree, the budget support is provided in the following two categories:",
      "Category: Category-I",
      "Qualifying Degree: Ph.D. in any discipline of Life Sciences or allied areas or interdisciplinary sciences /MD/MDS/M.V.Sc.",
      "Research Grant: Restricted up to \u20b9 60,00,000 (includes consolidated Fellowship of \u20b9 68,000/month).",
      "Category: Category-II",
      "Qualifying Degree: M.Tech. in Biotechnology or allied areas / MPharma/ equivalent degree.",
      "Research Grant: Restricted up to \u20b9 40,00,000 (Includes consolidated Fellowship of \u20b9 50,000/month)."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "bsrs.json",
    "title": "BSR Scheme",
    "description": "> **Introduction** The Research Fellowship in Sciences for meritorious students BSR scheme of the UGC is open to candidates who are selected for registering for the Ph.D. program of the university through a procedure outlined already in the UGC notification by a regular admission procedure. The registration for Ph.D. may follow after the admissions. <br> > **Objectives** The objective of the BSR scheme is to provide opportunities to meritorious candidates to undertake advanced studies and research leading to Ph.D. degrees in sciences. <br> > **Eligibility** The candidates who are selected for registering to the Ph.D. program of the university through a procedure outlined already in the UGC notification by a regular admission procedure in Universities with Potential for Excellence/Centres with Potential for Excellence / Centres of Advance Studies and Department of Special Assistance identified by UGC. The registration for Ph.D. may follow after the admissions.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Financial Assistance",
      "Fellowship",
      "For GATE/NET Qualified candidates:",
      "JRF @ 24,800/-pm for 2 years; SRF@ Rs. 27,900 pm for the remaining period",
      "For others:",
      "JRF @ Rs. 21,700/- for 2 years; SRF @ Rs. 24,800/- pm for the remaining period",
      "Contingency Contingency",
      "@ Rs. 12,000/- pa for JRF; @ Rs. 25,000/- pa for SRF",
      "HRA",
      "i) Suitable hostel accommodation may be provided to the candidates in the institutions. In such cases, the fellow is eligible to draw only hostel fees excluding mess, electricity, water charges, etc. A certificate to this effect is to be furnished through the Registrar/Director/Principal. HRA is not permissible for those candidates who are staying in Hostel accommodation.",
      "ii) In case of non-availability of hostel accommodation, the fellow may be provided with single accommodation by the host institution. In such cases, the rent paid by the fellow on an actual basis may be reimbursed subject to the ceiling of HRA as per Govt. of India norms.",
      "iii) If the fellow makes her own arrangements of accommodation, he/she may be entitled to draw HRA as per the categorization of cities by the Govt. of India.",
      "Medical",
      "No separate/fixed medical assistance is provided. However, the Fellow may avail the medical",
      "facilities available in the University/Institution/College.",
      "Leave",
      "1. Leave for a maximum period of 30 days in a year in addition to public holidays may be taken by the BSR Fellow with the approval of the Head of Department. However, they are not entitled to any other vacations, such as summer, winter, and pooja vacations.",
      "2. Candidates are eligible for maternity/ paternity leave at full rates of the fellowship as per The government of India rules once during the tenure of the award.",
      "3. The fellow, in special cases, may be allowed by the Commission, academic leave without fellowship and contingency for a period not exceeding one year during the tenure of the award on the recommendation of the Head of the department of the institution concerned to undertake academic/ teaching assignment or foreign travel in connection with academic work. The expenditure on travel cannot be claimed from UGC. The period",
      "of leave without fellowship will be counted towards the tenure."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ccsnfpfscsmap.json",
    "title": "Central Sector Scheme of National Fellowship for Providing Fellowship to Scheduled Caste Students to Pursue M.Phil. & PhD",
    "description": "&amp;quot;Central Sector Scheme of National Fellowship for Providing Fellowship to Scheduled Caste Students to Pursue M.Phil. &amp;amp; PhD&amp;quot; is a Fellowship Scheme by the Department of Social Justice &amp;amp; Empowerment, Ministry of Social Justice &amp;amp; Empowerment. The scheme was introduced during the financial year 2005-06 to provide opportunities to Scheduled Castes students to pursue higher education leading to M.Phil/Ph.D degrees in Sciences, Humanities and Social Science streams. The objective of the scheme is to provide fellowships in the form of financial assistance to students belonging to the SC category to pursue higher studies leading to an M.Phil/Ph.D in Science, Humanities, or Social Science, in Indian Universities/Institutions/Colleges recognized by UGC. UGC is the nodal agency for implementing the scheme and is responsible for laying down procedures/ guidelines for implementing the scheme, including selection of beneficiaries and disbursement of fellowships to selected candidates.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Number of Slots",
      "Validity",
      "Duration of the Fellowship",
      "Rate of Fellowship",
      "Head: Fellowship in All Streams",
      "Rate Applicable for JRF: Rs. 31,000/- p.m. for initial two years",
      "Rate Applicable for SRF: Rs.35,000/-p.m. for remaining tenure",
      "Head: Contingency for Humanities & Social Sciences",
      "Rate Applicable for JRF: Rs.10,000/- p.a. for initial two years",
      "Rate Applicable for SRF: Rs.20,500/- p.a. for remaining tenure",
      "Head: Contingency for Sciences",
      "Rate Applicable for JRF: Rs. 12,000/- p.a. for initial two years",
      "Rate Applicable for SRF: Rs.25,000/-p.a. for remaining tenure.",
      "Head: Escort/ Reader Assistance (All Subjects) for Physically and Visually Handicapped Candidates",
      "Rate Applicable for JRF: Rs.2,000/-p.m.",
      "Rate Applicable for SRF: Rs.2,000/-p.m.",
      "Head: House Rent Allowance (HRA)",
      "Rate Applicable: 8%, 16% and 24% to those students who are not provided with hostel accommodation, in accordance with Govt. of India norms as applicable in the city/location where the research fellows are working.",
      "Mode of Disbursal",
      "The disbursal of the fellowship will be directly into the beneficiary's Aadhaar-linked Bank Account via Direct Benefit Transfer (DBT)."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "crs.json",
    "title": "Collaborative Research Scheme (CRS)",
    "description": "Launched by the All India Council for Technical Education, Collaborative Research Scheme (CRS) aims to provide financial support in the form of research grants to the young TEQIP faculties recruited in different Technical Education Quality Improvement Programme (TEQIP) institutes so as to collaborate for research and build research community. &lt;br&gt; &gt; **Duration of the Project:** - Duration of the project will be of One year from the date of receipt of funds in the institute\u2019s account. &lt;br&gt; &gt; **Processing Methodology:** The proposal shall be assessed by an expert committee constituted as follows: - Three members expert committee not below the rank of Associate Professor. Fourth member will evaluate if any of the three are not available. - At least two members among the experts shall be from the concerned stream. &lt;br&gt; &gt; **Terms and conditions:** - The Principal Investigator has the primary responsibility of the implementation of the project. - In case the Principal Investigator leaves the Institution without transfer of the project or goes on long leave, the Co- Principal Investigator 1 would be allowed to continue with the project, subject to the consent of the Principal Investigator and approval from AICTE. All such requests should be sent to AICTE in advance. Therefore, association of a Co- Principal Investigator-1 (Co-PI-1) as ref.1.2(d)in the project is mandatory. - In case the Principal Investigator leaves the Institute and there is no other associated Co-Investigator to carry out the project then the project will be terminated at that stage and PI along with Co-PI-1(From Host Institute) will submit Utilization Certificate. No further grant will be released. - The grant will be utilized strictly for the purpose as specified in the sanction letter. Re-appropriation of funds from one head to another is strictly not permitted; Recurring and Non-Recurring heads are 40% and 60% respectively of the total grant, unless otherwise recommended by TEQIP experts. The list of equipment decided by the experts will be final and no changes will be permitted subsequently. - Once the project is sanctioned, the Council shall not consider any request for additional grant. - Separate institutional overheads for execution of the project shall not be provided. - Out of the project grant, no funds can be used for going abroad to attend - Conferences/Seminars. However, for presentation a paper in a Seminar/Conferencewithin the Country, the travel expenses may be met out from the recurring component of the grant.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Limit of Funding:",
      "Note:",
      "Disbursement of the funds:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "css-nos-st.json",
    "title": "National Overseas Scholarship For Scheduled Tribes (ST) Students",
    "description": "A scholarship scheme by the Ministry of Tribal Affairs for regular, full-time students from Scheduled Tribes, to obtain higher education (post-graduate courses viz. Masters, Ph.D. and Post-Doctoral Research) from foreign institutes/universities. The Scheme is implemented through the Indian Embassies/Missions abroad, Ministry of External Affairs. 30% of the scholarship awards are earmarked for female candidates. Bachelor-level courses in any discipline are not covered under the scheme. Financial assistance is provided till completion of the course/research or the prescribed duration of the course, whichever is earlier. Selection is based on Interview based merit list prepared by An Expert Committee. The Scholarship comprises of tuition fee, Annual Maintenance allowance of USD 15400, Contingency Charges of USD 1532, Poll Tax, Visa Fee, Medical Insurance, Cost of Air journey, Incidental Journey expenses. The fields of study covered in this scheme are -: 1. Pure/Applied Science/Engineering/Technology/Mathematics(STEM), 1. Management, 1. Economics, 1. Finance, 1. Law, 1. Agriculture/Medicine, 1. Humanities/Social Science/Fine Arts. - **Number of Award:** 20 awards every year would be sanctioned to ST students as under: **Sl. No****Category****No. of Award** 1.Scheduled Tribes (ST) candidates 172.Particularly Vulnerable Tribal Groups (PVTG)03**Total****20** - **Subjects and Slots covered under the Scheme:** The subjects/disciplines in which student can opt for studies abroad and the number of slots available under each field for grant of award are listed below: - **Field of study****Number of slots for the field of study** Pure/Applied Science/ Engineering/Technology/ Mathematics (STEM) 10Management, Economics, Finance, Law04Agriculture/Medicine04Humanities/Social Science/Fine Arts 02 - **Duration of award with Financial Assistance:** Financial assistance will be provided till completion of the course/research or the prescribed duration of the course, whichever is earlier: - **Sl. No****Course****Maximum Duration** 1.Post-Doctoral Research 2 years 2.Ph. D4 years (four years) 3.Master&amp;amp;amp;#39;s Degree 1 or 2 years (One/Two years) depending upon the type and duration of the Course.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Note: Extension of stay beyond prescribed duration for levels of courses as mentioned above, will be without financial assistance of any kind except the air passage to return to India, if the candidate decides to come back to India on completion of the course."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "csspostmsossi.json",
    "title": "Centrally Sponsored Scheme of Post-Matric Scholarship for OBC Students for studying in India",
    "description": "&amp;quot;Dr. Ambedakar Centrally Sponsored Scheme of Post-Matric Scholarships for the Other Backward Class (OBC) Students for Studying in India&amp;quot; is a Scholarship Scheme by the Department of Social Justice and Empowerment, Ministry of Social Justice and Empowerment. The objective of the scheme is to provide financial assistance to OBC students studying at the post-matriculation or post-secondary stage to enable them to complete their education. These scholarships shall be available for studies in India only and will be awarded by the Government of State/Union Territory to which the applicant actually belongs, i.e. permanently settled.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Maintenance Allowance",
      "Group A",
      "Rate of Maintenance Allowance (\u20b9 per month): Hostellers: 750; Day Scholars: 350.",
      "Group B",
      "Rate of Maintenance Allowance (\u20b9 per month): Hostellers: 510; Day Scholars: 335.",
      "Group C",
      "All other courses leading to a graduate degree not covered under Group A & B e.g. BA/B.Sc./B.Com etc.",
      "Rate of Maintenance Allowance (\u20b9 per month): Hostellers: 400; Day Scholars: 210.",
      "Group D",
      "All post-matriculation level non-degree courses for which entrance qualification is High School (Class X), e.g. senior secondary certificate (class XI and XII); both general and vocational stream, ITI courses, 3-year diploma courses in Polytechnics, etc.",
      "Rate of Maintenance Allowance (\u20b9 per month): Hostellers: 260; Day Scholars: 160.",
      "NOTE: Scholars who are entitled to free boarding and/or lodging will be paid maintenance chargers at 1/3rd of the hostellers' rate.",
      "Reader Charges for Blind Students (Blind Scholars)",
      "The blind scholars will be given an additional amount as 'Readers Charges' as mentioned below:",
      "Group: A & B; Reader Allowance (\u20b9 per month): 175",
      "Group: C; Reader Allowance (\u20b9 per month): 130",
      "Group: D; Reader Allowance (\u20b9 per month): 90",
      "Fees",
      "Scholars will be paid enrolment/registration, tuition, games, union, library, magazine, medical examination and such other fees compulsorily payable by the scholar to the institution or University/Board. Refundable deposit-like caution money and security deposit will, however, be excluded.",
      "Study Tours",
      "Study tour charges upto a maximum of Rs. 900/- per annum limited to the actual expenditure incurred by the student on transportation charges etc., will be paid to the scholars studying professional and technical courses, provided that the head of the institution certifies that the study tour is essential for the scholar for completion of his/her course of study.",
      "Thesis Typing/ Printing Charges",
      "Thesis typing/printing charges upto a maximum of Rs. 1000 will be paid to research scholars on the recommendation of the Head of the Institution.",
      "Mode of Disbursal",
      "In order to ensure timely payment of scholarship amount to the beneficiaries, the State Government/UT administrations are requested to avoid cash payment of scholarship amount and are required to issue instructions to all concerned that payment of scholarship should be made directly to beneficiaries through their accounts in post offices/banks with phased transition to Smart Cards.",
      "Duration of Awards",
      "The award once made will be tenable from the stage at which it is given to the completion of the course subject to good conduct and regularity in attendance.",
      "Renewal of Awards",
      "It will be renewed from year to year provided that within a course, which is continuous for a number of years, the scholar secures promotion to the next higher class irrespective of the fact whether such examinations are conducted by a University or the Institution."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "csspremsobcsi.json",
    "title": "Centrally Sponsored Scheme of Pre-matric Scholarship to Other Backward Classes (OBC) for Studies in India",
    "description": "&amp;quot;Centrally Sponsored Scheme of Pre-matric Scholarship to Other Backward Classes (OBC) for Studies in India&amp;quot; is a Scholarship Scheme by the Department of Social Justice and Empowerment, Ministry of Social Justice and Empowerment. The objective is to award scholarships to school-going children of poorer OBC parents whose annual income is below double the poverty line. &lt;br&gt; &gt; **Duration of Scholarship** The scholarships may be given to the students enrolled in class 1st or any subsequent class of the pre-matric stage in the case of day scholars, and class 3rd or any subsequent class of the pre-matric stage in the case of hostlers. The scholarship will terminate at the end of class 10th. The duration of the scholarship in an academic year will be 10 months.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Scholarship",
      "Ad-Hoc Grant",
      "The scholarship amount will be payable from the date of joining to the date of leaving the school, excluding the period of vacation, which will be about 10 months in a year except in the cases where the students enter late or leave early in the midst of academic year."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "csss-cus.json",
    "title": "Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) Central Sector Scheme of Scholarship for College and University students",
    "description": "&amp;quot;Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) Central Sector Scheme of Scholarship for College and University Students&amp;quot; is a Scholarship Scheme by the Department of Higher Education, Ministry of Education. The primary objective of the scheme is to provide financial assistance to meritorious students from poor families to meet a part of their day-to-day expenses while pursuing higher studies. The scholarships are awarded based on the results of the Higher Secondary/ Class 12th Board Examination. A maximum of 82,000 fresh scholarships per annum are provided for pursuing Graduate/ Postgraduate degrees in colleges and universities and for professional courses, such as Medical, Engineering etc.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Rate of Scholarship",
      "Mode of Disbursal",
      "The scholarship will be disbursed directly into the savings bank accounts of the beneficiaries through Direct Benefit Transfer (DBT)."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "cvcis.json",
    "title": "Central Vigilance Commission (CVC) Internship Scheme",
    "description": "Central Vigilance Commission initiated an Internship Scheme in the year 2016. This Scheme seeks to engage Indian Nationals, who are Graduates (awaiting final year results) /Post Graduate or Research Students enrolled in reputed Universities/Institutions in India or abroad and preferably studying Law, IT, MBA, Social Sciences and associated subjects as \u201cInterns\u201d. The interns shall be attached to the Commission and would be expected to supplement the process of analysis within the Commission through the desirable empirical collection and collation of in-house and other information. For the Interns, the exposure to the functioning of the Commission may be an add-on in furthering their own career goals in other Sectors or International Organizations. <br> > **Objectives** 1. To allow young academic talent to be associated with the Commission\u2019s work for mutual benefit. 1. The Interns may benefit by getting exposure to the Commission\u2019s functioning and the vigilance issues involved and contribute to the policy formulation of the Commission by generating policy inputs such as empirical analysis, briefing reports, policy papers etc. 1. The commission may benefit from the additional resources in the form of young talent and their output which will add to its policy formulation base. <br> > **Duration** The period of Internship shall be for a minimum period of one month extendable to two months. <br> > **Number of Interns** A minimum of three Interns are to be permitted to work in the Commission between May to August. <br> > **Declaration of Secrecy** The interns will be required to furnish a Declaration of Secrecy prior to the commencement of the internship.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Remuneration",
      "Interns may be given a stipend of \u20b9 10,000 per month necessary to meet the conveyance and other daily needs of the Interns.",
      "NOTE: The internship is neither a job nor a promise for a job in the future.",
      "Logistics and Support",
      "The commission shall provide them with working space, internet facility and other necessities as deemed fit by the Branch heads.",
      "NOTE: The Interns may arrange their own transport and accommodation at their own expense.",
      "Certificate of Internship",
      "A certificate will be awarded to the Interns upon satisfactory completion of the internship and submission of their end-of-assignment report which will be evaluated by the Branch Officer with whom the intern is attached."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "dacssiselosobcebc.json",
    "title": "Dr Ambedkar Central Sector Scheme of Interest Subsidy on Educational Loans for Overseas Studies for Other Backward Classes (OBCs) and Economically Backward Classes (EBCs)",
    "description": "&quot;Dr Ambedkar Central Sector Scheme of Interest Subsidy on Educational Loans for Overseas Studies for Other Backward Classes (OBCs) and Economically Backward Classes (EBCs)&quot; is an Education Loan Scheme by the Department of Social Justice and Empowerment, Ministry of Social Justice and Empowerment. <br> Implementing Agency The Scheme will be implemented by the Nodal Bank as per the MoU between the Banks and the Ministry of Social Justice &amp; Empowerment. <br> Scope The scheme provides interest subsidy to the students belonging to the OBCs and EBCs on the interest payable for the period of the moratorium for the Education Loans for overseas studies to pursue approved courses of studies abroad at Masters, M.Phil. and PhD level. <br> Objective To award interest subsidies to meritorious students belonging to the Other Backward Classes and Economically Backward Classes to provide them with better opportunities for higher education abroad and enhance their employability.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "NOTE 1: After the period of moratorium is over, the interest on the outstanding loan amount shall be paid by the student, in accordance with the existing Educational Loan Scheme as may be amended from time to time.",
      "NOTE 2: The candidate will bear the Principal instalments and interest beyond the moratorium period.",
      "Release of Funds",
      "The funds will be released to the applicants on a first-come-first-served basis, subject to a maximum amount to be worked out every year based on the total budget made available that year, under the scheme."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "dacsspostmsebcs.json",
    "title": "Dr. Ambedakar Centrally Sponsored Scheme of Post-Matric Scholarships for the Economically Backward Class (EBC) Students",
    "description": "&amp;quot;Dr. Ambedakar Centrally Sponsored Scheme of Post-Matric Scholarships for the Economically Backward Class (EBC) Students&amp;quot; is a Scholarship Scheme by the Department of Social Justice and Empowerment, Ministry of Social Justice and Empowerment. The objective of the scheme is to provide financial assistance to the Economically Backward Class (EBC) students studying at the post-matriculation or post-secondary stage to enable them to complete their education. These scholarships shall be available for studies in India only and will be awarded by the Government of State/Union Territory to which the applicant actually belongs, i.e. permanently settled.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Maintenance Allowance",
      "Group A",
      "Rate of Maintenance Allowance (\u20b9 per month): Hostellers: 750; Day Scholars: 350.",
      "Group B",
      "Rate of Maintenance Allowance (\u20b9 per month): Hostellers: 510; Day Scholars: 335.",
      "Group C",
      "All other courses leading to a graduate degree not covered under Group A & B e.g. BA/B.Sc./B.Com etc.",
      "Rate of Maintenance Allowance (\u20b9 per month): Hostellers: 400; Day Scholars: 210.",
      "Group D",
      "All post-matriculation level non-degree courses for which entrance qualification is High School (Class X), e.g. senior secondary certificate (class XI and XII); both general and vocational stream, ITI courses, 3-year diploma courses in Polytechnics, etc.",
      "Rate of Maintenance Allowance (\u20b9 per month): Hostellers: 260; Day Scholars: 160.",
      "NOTE: Scholars who are entitled to free boarding and/or lodging will be paid maintenance chargers at 1/3rd of the hostellers' rate.",
      "Reader Charges for Blind Students (Blind Scholars)",
      "The blind scholars will be given an additional amount as 'Readers Charges' as mentioned below:",
      "Group: A & B; Reader Allowance (\u20b9 per month): 175",
      "Group: C; Reader Allowance (\u20b9 per month): 130",
      "Group: D; Reader Allowance (\u20b9 per month): 90",
      "Fees",
      "Scholars will be paid enrolment/registration, tuition, games, union, library, magazine, medical examination and such other fees compulsorily payable by the scholar to the institution or University/Board. Refundable deposit-like caution money and security deposit will, however, be excluded.",
      "Study Tours",
      "Study tour charges upto a maximum of Rs. 900/- per annum limited to the actual expenditure incurred by the student on transportation charges etc., will be paid to the scholars studying professional and technical courses, provided that the head of the institution certifies that the study tour is essential for the scholar for completion of his/her course of study.",
      "Thesis Typing/ Printing Charges",
      "Thesis typing/printing charges upto a maximum of Rs. 1000 will be paid to research scholars on the recommendation of the Head of the Institution.",
      "Mode of Disbursal",
      "In order to ensure timely payment of scholarship amount to the beneficiaries, the State Government/UT administrations are requested to avoid cash payment of scholarship amount and are required to issue instructions to all concerned that payment of scholarship should be made directly to beneficiaries through their accounts in post offices/banks with phased transition to Smart Cards.",
      "Duration of Awards",
      "The award once made will be tenable from the stage at which it is given to the completion of the course subject to good conduct and regularity in attendance.",
      "Renewal of Awards",
      "It will be renewed from year to year provided that within a course, which is continuous for a number of years, the scholar secures promotion to the next higher class irrespective of the fact whether such examinations are conducted by a University or the Institution."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "dcpf.json",
    "title": "AICTE - Distinguished Chair Professor Fellowship",
    "description": "A Fellowship Scheme by the All India Council for Technical Education, Ministry of Education. The Distinguished Chair Professor Fellowship intends to utilize the expertise of highly qualified and experienced superannuated professionals who have made unparalleled, exceptional professional contributions to society in their respective fields/disciplines for motivating and inspiring students/faculty of AICTE-approved institutes. The fellowship is tenable for a period of three years or the age of 75 years whichever is earlier, extendable till 80 years of age subject to fitness. The Fellowship consists of an honorarium of \u20b910,000/- for full-day interaction with the Faculty/ Students of the host institute and nearby located institutions for up to a maximum of five days in a single trip.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The Fellowship consists of -",
      "(i) An honorarium of Rs. 10,000/- (Rupees Ten thousand per day) for full-day interaction with the Faculty/ Students of the host institute and nearby located institutions up to a maximum of five days in a single trip.",
      "(ii) Actual expenses on travel by train / air/ car etc.",
      "(iii) In Online Mode: An institution is allowed to host only 5 online sessions/talks with only 1 (one) DCP assigned to your institution by AICTE. A session will be a minimum of 2 hours followed by 1 hour of interaction."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ddskpdfs.json",
    "title": "Dr. D.S. Kothari Post Doctoral Fellowships In Sciences",
    "description": "Dr. D.S. Kothari Post Doctoral Fellowships in Sciences was introduced by the University Grants Commission, Dept. of Higher Education. In addition to the existing RA/PDF positions provided by various funding agencies, a need was felt for a PDF scheme running in a flexible mode, with fast track, online handling, and decision-making. The initiative would offer \u20b9 10,00,000 in financial assistance to 132 selected candidates. <br> The tenure is 2 years. The scheme is open for full-time research work, predominantly to young researchers preferably below 35 years of age who have been awarded their Ph.D. Degree under science faculty. The Reservation Policy of the Government of India with regard to SC/ST/OBC/PH is followed. The upper age limit for applicants is 35 years, with a relaxation in age for SC/ST/OBC/Women candidates applicable as per Government of India Norms.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Financial Assistance:",
      "The tenure of the award is three years with no provision for further extension. The financial assistance available under the scheme is as follows:",
      "Fellowship",
      "@ Rs. 43,800/- pm for I year",
      "@ Rs.45,000/- pm for II year",
      "@ Rs. 46,500/- pm for III year",
      "Contingency",
      "@Rs.1,00,000/-p.a.",
      "HRA:",
      "i) Suitable hostel accommodation may be provided to the candidates in the institutions. In such cases, the fellow is eligible to draw only hostel fees excluding mess, electricity, water charges, etc. A certificate to this effect is to be furnished through the Registrar/Director/Principal. HRA is not permissible for those candidates who are staying in Hostel accommodation.",
      "ii) In case of non-availability of hostel accommodation, the fellow may be provided with single accommodation by the host institution. In such cases, the rent paid by the fellow on an actual basis may be reimbursed subject to the ceiling of HRA as per Govt. of India norms.",
      "iii) If the fellow makes her own arrangements of accommodation, he/she may be entitled to draw HRA as per the categorization of cities by the Govt. of India.",
      "Medical:",
      "No separate/fixed medical assistance is provided. However, the Post-Doctoral Fellow may avail of the medical facilities available in the University/Institution/College.",
      "Leave:",
      "i) Leave for a maximum period of 30 days in a year in addition to public holidays may be taken by the Post-Doctoral Fellow with the approval of the Head of the Department. However, they are not entitled to any other vacations, such as summer, winter, and pooja vacations.",
      "ii) Candidates are eligible for maternity/ paternity to leave at full rates of the fellowship as per Government of India rules once during the tenure of the award.",
      "iii) The fellow, in special cases, may be allowed by the Commission, academic leave without fellowship and contingency for a period not exceeding one year during the tenure of the award on the recommendation of the Head of the department of the institution concerned to undertake academic/ teaching assignment or foreign travel in connection with academic work. The expenditure on travel cannot be claimed from UGC. The period of leave without fellowship will be counted towards the tenure."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ddskrgnrfm.json",
    "title": "Dr. D.S. Kothari Research Grant For Newly Recruited Faculty Members",
    "description": "The scheme &quot;Dr. D.S. Kothari Research Grant for Newly Recruited Faculty Members&quot; is a research grant scheme by the University Grants Commission (UGC), Department of Higher Education (DoHE). The purpose of the research grant is to provide opportunities to regularly appointed faculty members of Universities/ Institutes/ Colleges to pursue research in their area(s). All teachers who are newly appointed at the level of Assistant Professor against permanent posts in the university shall be eligible to receive financial support under the scheme. The Assistant professor should possess a Ph.D. degree with a minimum of five (5) research papers to his / her credit, published in journals of international repute. There are 132 slots, and the tenure is 2 years. The quantum of support under the scheme is \u20b9 10,00,000.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Tenure and Slots",
      "Tenure: 2 years; Slots: 132",
      "Financial Assistance",
      "The quantum of support under the scheme is \u20b9 10,00,000. The grant can be utilized for purchasing items like minor equipment, consumables, contingencies, fieldwork, travel, etc. The items/equipment purchased from this grant shall be the property of the University.",
      "Note 1: The grant cannot be used for international travel, purchasing furniture items or for",
      "appointing a project assistant or research fellow.",
      "Note 2: The quantum of funds under these heads can be decided by the recipient depending on",
      "his / her needs."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ddsy.json",
    "title": "Deen Dayal SPARSH Yojana (Scholarship For Promotion Of Aptitude & Research In Stamps As A Hobby)",
    "description": "The Department of Posts, Ministry of Communications has launched a Scholarship Scheme called &quot;Deen Dayal SPARSH Yojana&quot; to award children in the class category of Standard 6th to 9th. It is proposed to award annual scholarships to students who have good academic records and are also pursuing &#39;Philately&#39; as a hobby. The objective of the scholarship is to \u201cPromote Philately among children at a young age in a sustainable manner that can reinforce and supplement the academic curriculum in addition to providing a hobby that can help them relax and de-stress\u201d. <br> > **Number of Scholarships** 1. 920 scholarships will be awarded to students at the PAN India level. 1. Every Postal Circle will give a maximum of 40 scholarships to 10 students each from Standard 6th, 7th, 8th, and 9th.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Amount of Scholarship",
      "Renewability",
      "Mentor"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "dfft-scheme.json",
    "title": "Domestic Funding Of Foreign Training",
    "description": "The scheme &amp;quot;Domestic Funding of Foreign Training (DFFT)&amp;quot; is a scheme introduced by the Department of Personnel and Training, Government of India in the year 2001-02 with an objective to upgrade the knowledge &amp;amp; skills of the Government officers as well as to provide exposure to international best practices by deputing them to different long/short\u2010term training programmes. The Training Division of the Department of Personnel and Training has been implementing the scheme. The DFFT Scheme envisages leveraging the officers with exposure to international best practices and developments in the field of policy and governance by nominating the officers to Universities/Institutes abroad and enhancing the knowledge, skills, and competence of the officers in their current areas of employment and also in their future assignments.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "dpiit-is.json",
    "title": "DPIIT Internship Scheme",
    "description": "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce &amp;amp; Industry has been implementing internship scheme for the students pursuing Under Graduate/Post Graduate degree or are Research Scholars enrolled in recognized University/Institution within India or abroad. The objective behind the internship scheme is to give exposure to the students to understand the working culture of Govt. of India and exposure to the schemes being run by this Department. Students can choose a period of their choice ranging from one month /two months / three months as per their requirements. The applications will be accepted online mode only.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "drpdhma.json",
    "title": "Dr. Panjabrao Deshmukh Hostel Maintenance Allowance",
    "description": "The Panjabrao Deshmukh Scheme is a welfare scheme launched by the Government of Maharashtra to provide financial assistance to students from economically weaker sections of the society who are pursuing higher education. The scheme provides financial assistance to students for their tuition fees, examination fees, and other related expenses. <br> The objective of this scheme is to encourage and support students from economically weaker sections of the society to pursue higher education and to help them achieve their career aspirations. The scheme aims to bridge the gap between the economically privileged and underprivileged students and to ensure that every deserving student has equal access to higher education. <br> Under this scheme, eligible students can apply for financial assistance through the online portal of the scheme. The applicants are required to provide their personal details, academic records, income certificate, and other relevant documents as per the guidelines of the scheme. The applications are then verified and scrutinized by the authorities, and the financial assistance is provided to the eligible students directly to their bank accounts. <br> Overall, the Panjabrao Deshmukh Scheme is an important initiative by the Government of Maharashtra towards the goal of inclusive and equitable education. It provides a much-needed financial support system for students from economically weaker sections of the society, thereby helping them to achieve their educational goals and aspirations. <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "1. Hostel maintenance allowance for students with annual income less than 8,00,000: Rs.3000 per year for Mumbai, Pune, Nagpur, and Aurangabad and Rs.2000 per year for other locations. (for 10 months in an academic year).",
      "2. Hostel maintenance allowance for students whose parents are Aplabhudharak shetkari/Registered Labourers: Rs.30,000 per year for Mumbai, Pune, Nagpur, and Aurangabad and Rs.20,000 per year for other locations(for 10 months in an academic year)."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "dsrupdf.json",
    "title": "Dr. S. Radhakrishnan UGC Post-Doctoral Fellowship",
    "description": "The scheme &quot;Dr. S. Radhakrishnan UGC Post-Doctoral Fellowship&quot; is a fellowship scheme by the University Grants Commission (UGC), Department of Higher Education (DoHE). Post-doctoral research is an important enabling step in grooming young researchers for launching an academic/research career. A post-doctoral stint also provides an opportunity to acquire new skills, broaden one&#39;s horizon and offer a platform for transition into cross-disciplinary areas. University Grants Commission provides opportunities for post-doctoral research under the UGC Post-doctoral fellowship schemes. <br> **Objective:** The objective of these fellowships is to provide an opportunity to carry out advanced studies and research in Sciences, Engineering, and Technology, Humanities &amp; Social Sciences including languages in Indian Universities/Institutions. The tenure of the fellowship is 3 years with no provision for further extension.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "No. of Slots: 900",
      "The slots will be allocated as per Govt. of India reservation policy. However, 30% of slots will be reserved for women candidates.",
      "Nature of Assistance:",
      "Fellowship @ \u20b9 50,000/- p.m.",
      "Contingency @ \u20b9 50,000/- p.a.",
      "Escorts/Reader Assistance @ \u20b9 3000/-p.m.(fixed) in cases of PWD (Person with disability)",
      "Norms for Utilizing Contingency Grant:",
      "The Contingency grant may be utilized for minor equipment useful for research such as laboratory equipment or laptop costing less than \u20b9 50,000/-, chemicals, and other research-specific items within the ceiling of \u20b9 1,00,000 p.a. with the approval of the host university/institution. The items purchased from the contingency grant are assets of the university/institution and at the end of the fellowship are to be handed over to the host university/institution. The contingency grant cannot be used for international travel or the purchase of furniture.",
      "HRA",
      "Hostel accommodation may be provided to the scholars by their institutions. In such cases, the scholar is eligible to draw only hostel fees excluding mess, electricity, water charges, etc. If the scholar makes his/her own arrangements for accommodation, he/she shall be entitled to draw HRA as per the ceiling and categorization of cities by the Govt. of India. In case, the scholar wishes to draw HRA, he/she is required to submit a certificate, in the prescribed format, to his institution.",
      "Medical Assistance",
      "No separate/fixed medical assistance is provided. However, the scholars may avail the medical facilities available in their Institutions concerned.",
      "Leave",
      "(i) Earned Leave for a maximum period of 30 days in a year in addition to public holidays may be taken by a scholar. However, they are not entitled to any other vacation, such as summer, winter, and pooja vacations, etc.",
      "(ii) Maternity/paternity leave as per the Govt. of India norms issued from time to time shall be available for scholars at full rates of the fellowship once during the tenure of the fellowship.",
      "(iii) An \u2018Intermittent Break\u2019 for a maximum total period of 1 year shall be permissible to the women scholars. The break can be availed a maximum of 3 times during the entire period of the fellowship. However, the total duration of the break shall not exceed one year. No fellowship shall be available for the period of such break(s). This period of intermittent breaks shall not be counted towards the tenure of the fellowship, and thus effectively the total period of fellowship shall remain the same.",
      "(iv) \u2018Academic leave\u2019 shall be permissible only for one year throughout the tenure for any kind of academic/teaching assignment/foreign visit in connection with research work. However, during the period of academic leave no fellowship, contingency, etc will be paid by the UGC. The period of academic leave will be counted towards the tenure. Expenditure on foreign visits in connection to research work cannot be claimed from UGC.",
      "(v) All kinds of leave shall be availed by the scholar only with due approval of the institution concerned."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "dvps.json",
    "title": "AICTE-INAE Distinguished Visiting Professorship Scheme",
    "description": "The Indian National Academy of Engineering (INAE) launched a Distinguished Visiting Professorship (DVP) Scheme jointly with All India Council for Technical Education (AICTE) in 1999.The Scheme envisages promotion of industry-institute interaction by facilitating the dissemination of knowledge through the expertise of experienced and knowledgeable personsfrom industry to integrate their rich industrial experience with technical education. The Scheme has received very enthusiastic response from industry and engineering research institutions over the years. Since the year 2018, the scheme has also been made applicable to all retired INAE Fellows. **Objectives:** The Distinguished Visiting Professor under the scheme will: - Deliver lectures on the state-of-art of Industry, industrial ambience and R&amp;amp;D needs of the industry to the students and faculty of AICTE approved engineering colleges/ institutions only. - Guide student projects/ theses of interest to industry. - Help curriculum development, keeping in view, the changing industrial needs. - Develop cooperative undergraduate and postgraduate programmes with industry having potential benefits to faculty, students and Industry. - Take up any other activities for the mutual benefit of engineering institutions and industry. &lt;br&gt; &lt;br&gt;",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "e-yuvasbirace-yuvafugs.json",
    "title": "E-YUVA Scheme: BIRAC\u2019s E-YUVA Fellows (for under graduate students)",
    "description": "The scheme \u201cEmpowering Youth for Undertaking Value Added Innovative Translational Research (E-YUVA)\u201d is started by the Biotechnology Industry Research Assistance Council (BIRAC) to promote a culture of applied research and need-oriented (societal or industry) entrepreneurial innovation among young students and researchers. The scheme provides funding support (through fellowship and research grant), technical and business mentoring, exposure to bio incubation model, orientation to an entrepreneurial culture, etc. to students at various levels including undergraduates, post-graduates, and post-doctoral. The scheme provides support under the following two categories: \u2022 BIRAC\u2019s Innovation Fellows (for post graduates and above) \u2022 BIRAC\u2019s E-YUVA Fellows (for under graduate students) **BIRAC\u2019s E-YUVA Fellows (for under graduate students):** BIRAC\u2019s E-YUVA Fellows shall apply as a team and pursue their research work at their College/University labs and will also be allowed access to facilities at EYC and EYC Knowledge Partners as and when required. It will be mandatory for all the fellows to spend 3-4 weeks at EYC/EYC Knowledge Partner during their fellowship period. &gt; **Areas covered:** BIRAC encourages interdisciplinary proposals from any stream that can help the conversion of innovative ideas into biotech products and technologies in any of the above fields. &gt; **Nature of Proposals supported:** Proposal should: - be original - apply interdisciplinary knowledge - aim at the development of innovative Biotech products/technologies with societal/commercial potential &gt; **Number and Duration of Fellowship:** - Each EYC will support up to 5 teams with upto 5 students each every year. - Fellowship is provided for a period of 12 months. &gt; **Expected Deliverable:** - Create a culture of innovation at the Undergraduate student level in academic Institutions. - Capacity building at the UG level - Opportunity creation and access for Biotech Entrepreneurship facilitated by BIRAC",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "eacrws11a12s.json",
    "title": "Educational Assistance to the Children of the Registered Worker Studying in 11th and 12th Standard",
    "description": "The Educational Assistance to the Children of the Registered Worker Studying in 11th and 12th Standard scheme was launched by the Maharashtra Building And Other Construction Workers Welfare Board (MBOCWW), Labour Department Maharashtra. The scheme provides financial assistance \u20b910,000 per year to children of registered construction workers who are studying in the 11th or 12th standard. The benefit applies to a maximum of two children per worker and extends to the wife of a registered male worker.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Note: Benefit applies to up to two children and the wife of a registered worker."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "eacs1t7a8t10.json",
    "title": "Educational Assistance to the Children Studying in 1st to 7th and 8th to 10th Class",
    "description": "The Educational Assistance to the Children Studying in 1st to 7th and 8th to 10th Class scheme is implemented by the Maharashtra Building And Other Construction Workers Welfare Board (MBOCWW), Labour Department Maharashtra. Under this scheme, educational assistance of \u20b92,500/- to the children studying in 1st to 7th standard and \u20b95,000/- for the children studying in 8th to 10th standard of the registered construction workers. The scheme covers up to two children and the wife of a registered male worker. <br> <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Financial Assistance:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "eafdc.json",
    "title": "Educational Assistance for Degree Course",
    "description": "The Educational Assistance for Degree Course scheme was launched by the Maharashtra Building And Other Construction Workers Welfare Board (MBOCWW), Labour Department Maharashtra. The scheme provides financial assistance of \u20b920,000/- per year to children of registered construction workers pursuing their undergraduate degrees. This benefit is also extended to the wife of a registered male worker.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "eafmaec.json",
    "title": "Educational Assistance for Medical and Engineering Courses",
    "description": "The Maharashtra Building And Other Construction Workers Welfare Board (MBOCWW), Labour Department launched the Educational Assistance for Medical and Engineering Courses scheme. Under this scheme, financial aid of \u20b91,00,000/- is granted for medical degrees, and \u20b960,000/- for engineering degrees to the children and spouses of registered construction workers.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Financial Assistance For:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "eagrdc.json",
    "title": "Educational Assistance for Government Recognised Diploma Courses",
    "description": "The Educational Assistance for Government Recognised Diploma Courses scheme was launched by the Maharashtra Building And Other Construction Workers Welfare Board (MBOCWW), Labour Department Maharashtra. The scheme aims to provide financial assistance to children of registered construction workers, providing \u20b920,000/- per year for diploma courses and \u20b925,000/- per year for postgraduate diploma courses.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Financial Assistance For:",
      "NOTE: Benefit applies to a maximum of two children and to the wife of registered male workers."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "eatt10t12s.json",
    "title": "Educational Assistance to the 10th to 12th Students",
    "description": "The Educational Assistance to the 10th to 12th Students scheme was launched by the Maharashtra Building And Other Construction Workers Welfare Board (MBOCWW), Labour Department Maharashtra. Under this scheme, educational assistance of \u20b910,000/- to the children of the registered worker scoring 50% or more marks in the 10th and 12th standard examinations.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ef.json",
    "title": "Emeritus Fellowship",
    "description": "The scheme provides an opportunity to superannuated teachers to pursue active research in their respective field of specialization in Indian Universities/Colleges/ Institutions as indicated below: - Universities/Institutions/Colleges under section 2(f) and 12(b) of UGC Act, 1956. - Deemed to be Universities under section 3 of the UGC Act, 1956 which are eligible to receive grant in aid from UGC. - Universities/Institutions/Colleges funded by Central/ State Govt. - Institutes of National Importance. <br> <br> The number of slots available under the scheme is 100 for Science streams and 100 for Humanities, Social Sciences and Languages (total 200 slots) at any one given time basis. ### Joining of Fellowship The candidate should join the fellowship within 3 months from the date of issue of Award letter, failing which the award will be treated as cancelled. <br> ### Feedback - Emeritus Fellow under the Emeritus Fellowship Scheme of UGC the beneficiary will have to submit a feed back in form of the report on the Research work done. - After completion of the Research work, the Emeritus Fellow will submit his/her research work in the INFILIBNET Centre repository along with the research paper published by the end of the tenure must be submitted. The fellow will be issued an Emeritus Fellowship Completion Certificate after successfully submitting comprehensive report of research work and publication in INFLIBNET repository. <br> #### Transfer of the Research Place Transfer of the Research Place should be done by concerned University/College/Institute under the intimation to UGC and designated agency. Transfer of Research place will be allowed only once during the entire tenure <br> #### Resignation Resignation of the Emeritus Fellow will be forwarded by the concerned University/College/Institute to the designated agency under intimation to UGC office. The grant will be released up to the date of resignation tendered by the fellow. <br> <br> <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The assistance available under the scheme is:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "els-nsfdc.json",
    "title": "Education Loan Scheme (NSFDC)",
    "description": "The &amp;quot;Education Loan Scheme&amp;quot; is implemented by the National Scheduled Castes Finance and Development Corporation (NSFDC) under the Ministry of Social Justice and Empowerment, Government of India. Under this Scheme, the loan is provided for pursuing full-time Professional/Technical courses in recognized institutions as one-time assistance. The Educational Loan shall cover Admission Fee, Tuition Fee, Books, Stationery, Equipment, Examination Fee, Hostel and Mess Expenses, Insurance Premium for Policy for insuring loanees against loan in case of death or permanent disability, Travel Expenses/Passage Money including Visa Expenses for studying abroad, Caution Money, Development Fund, Clothing Allowance including weather protective clothing in extreme climate (in case of foreign study). **Professional/Technical Courses Covered:** Educational Loans shall be provided to eligible students for pursuing regular full-time Professional/Technical recognized courses approved by the Government in the following fields in India or abroad: - Engineering (Diploma/ B.Tech /B.E, M.Tech/M.E.) - Architecture (B.Arch/M.Arch) - Medical (MBBS/MD/MS) - Biotechnology/Microbiology/Clinical Technology (Diploma/Degree) - Pharmacy (B.Pharma/M.Pharma) - Dental (BDS/MDS) - Physiotherapy (B.Sc./M.Sc.) - Pathology (B.Sc/M.Sc.) - Nursing (B.Sc./M.Sc.) - Information Technology (BCA/MCA) - Management (BBA/MBA) - Hotel Management &amp;amp; Catering Technology (Diploma /Graduation/Post Graduation) - Law (LLB/LLM) - Education (CT/NTT/B.Ed/M.Ed) - Education (CT/NTT/B.Ed/M.Ed) - Physical Education (C.PEd./B.PEd/ M.PEd) - Journalism &amp;amp; Mass Communication (Graduation/Post Graduation) - Geriatric Care (Diploma/Post Graduate Diploma) - Midwifery (Diploma) - Laboratory Technician (Diploma) - Chartered Accountancy (CA) - Cost Accountancy (ICWA) - Company Secretaryship (CS) - Actuarial Sciences (Graduation/ Post Graduation/FIA) - Associate Member of the Institute of Engineers (AMIE) and Institute of Electronics &amp;amp; Telecommunication - Higher education like Doctoral Studies leading to M.Phil/PhD from recognized institutions.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "els.json",
    "title": "Education Loan Scheme",
    "description": "A scheme named &amp;quot;**Education Loan Scheme**&amp;quot; by National Scheduled Castes Finance and Development Corporation (NSFDC) under the M/o Social Justice and Empowerment provides loans to students from Scheduled Castes who are pursuing full-time professional or technical courses in recognized institutions. The objective of the scheme is to extend Education Loans to the students of Backward Classes for pursuing professional/technical education at the graduate and higher levels and for pursuing vocational Courses. All professional and technical courses at the graduate and higher levels are approved by the appropriate authority and vocational courses. Educational Loan shall be provided to eligible students for pursuing regular full time Professional / Technical recognized courses approved by the Government in the following fields in India or abroad : 1. Engineering (Diploma/ B.Tech /B.E, M.Tech/M.E.) 1. Architecture (B.Arch/M.Arch) 1. Medical (MBBS/MD/MS) 1. Biotechnology/Microbiology/Clinical Technology (Diploma/Degree) 1. Pharmacy (B.Pharma/M.Pharma) 1. Dental (BDS/MDS) 1. Physiotherapy (B.Sc./M.Sc.) 1. Pathology (B.Sc/M.Sc.) 1. Nursing (B.Sc./M.Sc.) 1. Information Technology (BCA/MCA) 1. Management (BBA/MBA) 1. Hotel Management &amp;amp; Catering Technology (Diploma /Graduation/Post Graduation) 1. Law (LLB/LLM) 1. Education (CT/NTT/B.Ed/M.Ed) 1. Education (CT/NTT/B.Ed/M.Ed) 1. Physical Education (C.PEd./B.PEd/ M.PEd) 1. Journalism &amp;amp; Mass Communication (Graduation/Post Graduation) 1. Geriatric Care (Diploma/Post Graduate Diploma) 1. Midwifery (Diploma) 1. Laboratory Technician (Diploma) 1. Chartered Accountancy (CA) 1. Cost Accountancy (ICWA) 1. Company Secretaryship (CS) 1. Actuarial Sciences (Graduation/ Post Graduation/FIA) 1. Associate Member of Institute of Engineers (AMIE) and Institute of Electronics &amp;amp; Telecommunication 1. Higher education like Doctoral Studies leading to M.Phil/PhD from recognized institutions.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "essstj.json",
    "title": "AICTE e-Shodh Sindhu Scheme (eSS)",
    "description": "Launched by the All India Council for Technical Education, AICTE e-Shodh Sindhu Scheme (eSS) provides subscriptions of e-Resources like Web of Science, Scopus, The American Society of Mechanical Engineers (ASME), American Society of Civil Engineers (ASCE) and Bentham Science to institutions. **Objective:** Facilitating access to e-Resource to the students, faculty and researchers, a new to augment the culture of research in the institution and overall quality of technical education.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Benefits: Subscriptions of e-Resources like Web of Science, Scopus, ASME, ASCE and Bentham Science to institutions.",
      "Duration of Subscriptions: Initially for one calendar year, renewable for further year on the basis of usage by institute and fulfilments of other essential eligibility criteria."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "favct.json",
    "title": "Persons With Disabilities Scheme In Colleges: Financial Assistance To Visually Challenged Teachers",
    "description": "The Scheme has been formulated to help visually challenged permanent teachers to pursue teaching and research with the help of a Reader and by using teaching and learning aids by way of providing Reader\u2019s Allowance and funds for the purchase of Braille books, recorded materials, etc. <br> **OBJECTIVE** To provide a facility to help visually challenged permanent teachers to achieve self-dependence by using various aids for teaching, learning, and research. <br> <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Allowance to visually challenged permanent teachers will be Rs.36000/- p.a. The amount is to be utilized for the following purposes:",
      "The amount payable to Reader shall not exceed Rs.50/- per hour. The College shall reimburse the amount to visually challenged teachers on receipt of the actual amount received by the Reader and actual expenditure incurred by the visually challenged teacher subject to a maximum of Rs.36000/- per annum. Bills, in original, will be required to be submitted by the teacher to the college. However, these are not required to be submitted to the UGC. The scheme will end with the Plan period."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "fcfswd.json",
    "title": "Free Coaching for Students with Disabilities",
    "description": "The Free Coaching for Students with Disabilities scheme under the Department of Empowerment of Persons with Disabilities (DEPwD) is a centrally sponsored scheme that provides financial assistance to voluntary organizations for providing free coaching to students with disabilities for competitive examinations. <br> The scheme is open to students with disabilities who have at least 40% disability and are preparing for competitive examinations conducted by the Union Public Service Commission (UPSC), Staff Selection Commission (SSC), various Railway Recruitment Boards (RRBs) for Group &#39;A&#39; and &#39;B&#39; posts, State Public Service Commissions for Group &#39;A&#39; and &#39;B&#39; posts, and other competitive examinations for admission in higher educational institutions and jobs. <br> To be eligible for the scheme, voluntary organizations must be registered under the Societies Registration Act, 1860, or relevant Act of the State/Union Territory. They must also have been in existence for at least two years and have the necessary infrastructure and experience to provide coaching to students with disabilities. <br> Students with disabilities who are interested in availing the benefits of the scheme can apply to voluntary organizations that are empaneled with the DEPwD. <br> The scheme provides 100% financial assistance to voluntary organizations for providing free coaching to students with disabilities. The financial assistance is provided for the following purposes: <br> 1. Coaching fees 1. Stipend for students 1. Cost of study material 1. Other incidental expenses 1. The Free Coaching for Students with Disabilities scheme is a valuable scheme that helps to level the playing field for students with disabilities. It provides them with the opportunity to compete effectively in competitive examinations and to get admission in higher educational institutions and jobs",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "fcssos.json",
    "title": "Free Coaching Scheme for SC and OBC Students",
    "description": "&amp;quot;Free Coaching Scheme for SC and OBC Students&amp;quot; is an Education Scheme by the Department of Social Justice and Empowerment, Ministry of Social Justice and Empowerment. The objective of the Scheme is to provide coaching of good quality for economically disadvantaged Scheduled Castes (SCs) and Other Backward Classes (OBCs) candidates to enable them to appear in competitive examinations for obtaining appropriate jobs in the Public/Private Sector and/or for securing admission in reputed technical and professional higher education institutions. &lt;br&gt; The Scheme will be implemented by the Ministry with the assistance of Dr Ambedkar Foundation (DAF) through Central Universities empanelled under the Scheme. The scheme was revised in 2022-23. Under the revised guidelines, there is no empanelment of institutes. The students are selected directly by the Department and can undertake coaching in any institute of their own choice. Thus, no institute is empanelled under the scheme now. &lt;br&gt; &gt; **Category-wise Ratio of Candidates** 1. 3500 students will be selected under this scheme annually. 1. The percentage of **SC students shall not be less than 70%**. In case of the non-availability of an adequate number of candidates in the SC category, the MoSJE can relax this ratio. However, in no case, a less than 50% of SC students be permitted. 1. Also under each category, **30% of the slots shall be reserved for female candidates**. In case sufficient numbers of female candidates are not available under any category, male candidates from the same category shall be considered by the Ministry.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Mode of Payment",
      "NOTE: The students will be required to remit the portion to the institution fee immediately and in any case not exceeding 15 days, to the Central Universities where they are receiving coaching.",
      "Courses for Coaching",
      "The courses for which the Coaching will be imparted shall be as follows:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "fesmwpnie.json",
    "title": "Free Education For Sports Medal Winners / Participants Of National/ International Events",
    "description": "Sports are not an only institutional competitive activity but also help in educating the youths regarding their behavior and their qualities to help in their social and emotional adjustment with the society at large irrespective of culture, religion, or beliefs. It is not only a method of recreational growth and development but also helps in the integration of youth with the country\u2019s social order. <br> To bring laurels to the country and for personal and professional development in sports, the youth have to not only spend their time but also their limited resources to excel. It would be imperative that the country as a whole supports its efforts financially so that resources are not a constraint to their education and sports development. <br> **AIMS AND OBJECTIVES** 1. The objective of the scheme is to provide financial assistance to the medal winners\\ elite sports persons who are studying in Universities/Colleges leading to all the full-time regular courses including PG Diploma and other professional courses. 2. To motivate the sports persons to achieve higher levels of performance by assisting them financially in relation to education and sports development. The scheme would be applicable to sportspersons who are medal winners in national games or participants in recognized international sporting events.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Medals at Olympics, World Championship (more than 20 countries)",
      "Tuition Fee and Other Funds: Bachelor's degree: Actual; PG: Actual; Diploma: Actual; PG Degree: Actual; M. Phil: Rs. 7500/- per month + Actual; Ph.D.: As per with JRF scale (UGC); MBA or",
      "other professional courses (*): Rs. 7500/- per month + Actual.",
      "Hostel Facilities (Boarding and Lodging): Actual",
      "Allowances for special courses abroad: As per Govt of India\u2019s norms",
      "Kit: Rs. 15000 per annum",
      "Participations at Olympics, World Championship (more than 20 countries); Medal at Common Wealth, Asian, Afro-Asian Games",
      "Tuition Fee and Other Funds: Bachelor's degree: Actual; PG: Actual; Diploma: Actual; PG Degree: Actual; M. Phil: Rs. 7500/- per month + Actual; Ph.D.: As per with JRF scale (UGC); MBA or",
      "other professional courses (*): Rs. 7500/- per month + Actual.",
      "Hostel Facilities (Boarding and Lodging): Actual",
      "Allowances for special courses abroad: As per Govt of India\u2019s norms",
      "Kit: Rs. 15000 per annum",
      "Participation at World Championship (less than 20 countries), CommonWealth, Asian, and Afro-Asian, Games; Medal at Asian Championship (excluding Asian games)",
      "Tuition Fee and Other Funds: Bachelor's degree: Actual; PG: Actual; Diploma: Actual; PG Degree: Actual; M. Phil: Rs. 7500/- per month + Actual; Ph.D.: As per with JRF scale (UGC); MBA or",
      "other professional courses (*): Rs. 7500/- per month + Actual.",
      "Hostel Facilities (Boarding and Lodging): Actual",
      "Allowances for special courses abroad: As per Govt of India\u2019s norms",
      "Kit: Rs. 10000 per annum",
      "Participation at Asian Championship, World university games; Medal at SAF Games",
      "Tuition Fee and Other Funds: Bachelor's degree: Actual; PG: Actual; Diploma: Actual; PG Degree: Actual; M. Phil: Rs. 7500/- per month + Actual; Ph.D.: As per with JRF scale (UGC); MBA or",
      "other professional courses (*): Rs. 7500/- per month + Actual.",
      "Hostel Facilities (Boarding and Lodging): Actual",
      "Allowances for special courses abroad: As per Govt of India\u2019s norms",
      "Kit: Rs. 7500 per annum",
      "Participation at SAF Games; Medal at National level Competitions",
      "Tuition Fee and Other Funds: Bachelor's degree: 75% of Actual; PG: 75% of Actual; Diploma: 75% of Actual; PG Degree: 75% of Actual; M. Phil: Rs. 5000/- per month + Actual; Ph.D.: Rs. 7500/- per month + Actual; MBA or other professional courses (*): Rs. 5000/- per month + Actual.",
      "Hostel Facilities (Boarding and Lodging): Actual",
      "Allowances for special courses abroad: As per Govt of India\u2019s norms",
      "Kit: Rs. 6000 per annum",
      "(i) The pattern of assistance will be as per the chart mentioned above depending upon the level of performance of the concerned sportsperson.",
      "(ii) The financial assistance depending upon the eligibility will be reimbursed by the UGC to the university concerned. The university will be responsible for submitting all relevant documents as per the guidelines and the proformas of the scheme.",
      "(iii) For the loss of the classes of the concerned sports persons because of their engagement in sporting activity, the university concerned will make special efforts in terms of completion of syllabus and attendance."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ffsfm.json",
    "title": "Fellowship For Superannuated Faculty Members",
    "description": "The &quot;Fellowship for Superannuated Faculty Members&quot; scheme is a fellowship scheme by the University Grants Commission (UGC), Department of Higher Education to provide opportunities to superannuated faculty members of Universities/Institutes/Colleges, hereinafter \u201cInstitutions\u201d to pursue research in their area(s). <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Tenure and Slots",
      "Tenure: 3 years or upto 70 years whichever is earlier.",
      "Slots: 100 per annum or as may be decided by the Commission",
      "Financial Assistance",
      "Fellowship: Rs. 50,000/- per month",
      "Contingency: Rs.50,000/- per annum"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "fspip.json",
    "title": "FutureSkills Prime Incentive Program",
    "description": "The scheme &amp;quot;FutureSkills Prime Incentive Program&amp;quot; is being administered by the MeitY (Ministry of Electronics and Information Technology) to promote a novel skilling ecosystem in the country, the programme/scheme would incentivize the cost of the eligible course(s) concerned, providing authentic and accredited certifications that are acceptable in the industry. FutureSkills Prime has introduced a first-of-its-kind incentive program for digital upskilling. The learners can upskill in 10 of the most in-demand technologies and earn incentives up to \u20b9 14,500*. The program covers Foundation, Bridge and Deep Skilling courses across technologies, including AI, IoT, Big Data Analytics, Cloud Computing, Cybersecurity etc. The government will now directly \u2018fund the ambitions\u2019 of eligible learners enabling them to navigate careers in these fascinating technology domains. While the platform offers numerous industry-handpicked courses and pathways, many of them free of cost, this incentive program will help candidates upskill in paid technical courses while earning reimbursement on completion.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Course Categories and Incentives",
      "DeepSkilling \u2013 Paid Pathway",
      "Incentive Threshold: Post successful course completion and certification, the maximum incentive per Deep Skilling course is limited to 50% of the course fee paid by the Subscriber/beneficiary, up to \u20b98,000 (inclusive of all applicable taxes).",
      "Assessment Reimbursement: \u20b9600 for every successful certification up to the threshold of \u20b98,000.",
      "DeepSkilling \u2013 Free Pathway",
      "Incentive Threshold: Post successful course completion and certification, the incentive is \u20b91,000, provided the Subscriber/beneficiary enrols for the next paid course with a cost greater or equal to \u20b91,000 (including applicable taxes).",
      "Assessment Reimbursement: \u20b9600, provided the Subscriber/beneficiary enrols for the next paid course with a cost greater or equal to \u20b91,000 (including applicable taxes).",
      "Bridge Courses",
      "Incentive Threshold: Post successful course completion and certification, the maximum incentive per course is limited to 50% of the course fee paid by the Subscriber/beneficiary, up to \u20b93,000 (inclusive of all applicable taxes).",
      "Assessment Reimbursement: \u20b9600 for every successful certification up to the threshold of \u20b93,000.",
      "Foundation Courses",
      "Incentive Threshold: The maximum incentive per course is limited to 50% of the course fee paid by the Subscriber/beneficiary, up to \u20b93,000 (inclusive of all applicable taxes).",
      "Assessment Reimbursement: \u20b9600 for every successful certification up to the threshold of \u20b93,000.",
      "Maximum Incentive",
      "A Subscriber can enrol in multiple courses across different categories. However, the maximum incentive for a Subscriber/beneficiary is capped at \u20b912,000, subject to specific conditions in the respective course categories.",
      "Payment Schedule",
      "The incentive will be credited to the applicant's bank account within 30 days of submitting the application."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "fssaiis.json",
    "title": "Food Safety & Standards Authority Of India (FSSAI) Internship Scheme",
    "description": "The Internship Program by the FSSAI provides interns with unique learning opportunities in various areas of food regulation of food safety administration. FSSAI is a statutory body established under the Food Safety &amp; Standards Act, 2006 under the aegis of the Ministry of Health &amp; Family Welfare, Government of India. It is the apex body responsible for ensuring food safety and compliance with food standards across the country. <br> > **Tenure** The internship will be available throughout the year on a Quarterly basis, Internship will be offered for a duration of upto 03 months, which may be extended to a maximum period of 06 months. No internship of duration less than two months will be offered. <br> > **Assignments** Interns would be attached to one of the several Divisions at FSSAI (HQ)/ROs/Labs depending on the academic and technical training and assigned project(s) related to different aspects of Food and Nutrition Management Processes. <br> > **Place &amp; Domain of Internship** 1. Region: FSSAI (HQ), New Delhi; Topics/Subjects: Science &amp; Standards; Regulation; Regulatory Compliance; KRCDC (Library); Human Resource; Finance &amp; Accounts; Trade and International Cooperation/Imports; Quality Assurance; Legal; IT 1. Region: Regional Offices (Chennai &amp; Kolkata); Topics/Subjects: Food Imports Clearance and Licensing 1. Region: National Food Laboratory, Ghaziabad, Kolkata and Chennai; Topics/Subjects: Food Sampling and Testing 1. Region: NFL Kolkata Extension Centre, Raxaul; Topics/Subjects: Food Sampling and Testing",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Stipend",
      "A stipend of \u20b9 10,000/- (Rupees ten thousand only) for the internship period will be given to the deserving Interns on the recommendation of the Office/Division that they are attached with by the respective FSSAI (HQ)/Regional Offices / Laboratories.",
      "NOTE: The criteria for deserving interns will be decided based on their (a) attendance, (b) assessment by their respective reporting officers; and (c) evaluation of the report by the Committee.",
      "Working Space",
      "FSSAI shall provide working space, internet facility and other necessities.",
      "NOTE 1: FSSAI shall not cover local lodging and travel facilities.",
      "NOTE 2: FSSAI will not bear the expenses of any Boarding.",
      "NOTE 3: Interns would be required to have their own laptops.",
      "Certificate",
      "All the interns will be awarded a certificate by the Human Resource Division, FSSAI (HQ) on successful completion of the internship i.e. on submission, review of final report/presentation and recommendation by the Project Evaluation Committee."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "fssdu.json",
    "title": "Financial Support Scheme",
    "description": "\u201cFinancial Support Scheme\u201d implemented by the Delhi University aims to provide equity and access to quality education to the economically weak students. This scheme also provides financial support for such students which will include fee waiver of all components of fee paid by students (except examination fee &amp;amp; hostel fee). <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "goc.json",
    "title": "Grant For Organizing Conference",
    "description": "The scheme of &quot;Grant for Organizing Conference (GOC)&quot; is a grant scheme by the All India Council for Technical Education (AICTE), Department of Higher Education (DoHE). The scheme provides financial assistance to institutions for organizing conferences in various fields of technical education. Both Onsite Conferences and Online Conferences are supported. The objective is to promote high standards in technical education by way of extending opportunities to academicians and working professionals by providing a forum for sharing their knowledge, experiences, innovations, and inventions. <br> **Expected Outcomes** (a) Dissemination of knowledge and sharing of new innovative ideas among participants and delegates from across the globe which would further help them in developing new ideas relevant to their research work. (b) Awareness of the recent developments in the field. (c) Publication of the papers in a high-impact journal. (d) Novel ideas for impact on the UG/ PG student projects. (e) New research areas or improvement in ongoing research. (f) Ideas to create a roadmap for upcoming projects and possibilities for opening new avenues for research. (g) Collaborations between institutions and industry. (h) Learning of best practices.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Onsite Conference",
      "National Level Conference: One-third of the total expenditure incurred on organizing the Conference is subject to a maximum of \u20b9 3,00,000.",
      "International Level Conference: One-third of the total expenditure incurred on organizing the Conference is subject to a maximum of \u20b9 4,00,000.",
      "Online Conference",
      "(including e-Conference, Virtual Conference, web-conference, and Digital Conference)",
      "National/ International Level Conference: One-third of the total expenditure incurred on organizing the online Conference is subject to a maximum of \u20b9 50,000.",
      "The disbursement of the Funds is on a reimbursement basis after the successful completion of the conference and submission of requisite documents by the institute."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "hepsn.json",
    "title": "Persons With Disabilities Scheme In Colleges: Higher Education For Persons With Special Needs",
    "description": "The Higher Education for Persons with Special Needs (HEPSN) scheme is meant for creating an environment at higher education institutions to enrich the higher education learning experiences of differently-abled persons. Creating awareness about the capabilities of differently-abled persons, construction aimed at improving accessibility, purchase of equipment to enrich learning, etc., are the broad categories of assistance under this scheme. > **Specific Objectives of HEPSN** > **** The specific objectives of the HEPSN Scheme are as follows: 1. To provide equal educational opportunities to differently-abled persons in higher education institutions. 1. To create awareness among the functionaries of higher education about the specific educational needs of differently-abled persons. 1. To equip higher education institutions with the facilities to provide access to differently-abled persons. 1. To provide special devices to higher education institutions that will augment the learning experiences of differently-abled persons. 1. To monitor the implementation of all existing and future legislation and policies, which are about higher education of differently-abled persons.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Provision of Facilities and Financial assistance",
      "The HEPSN scheme has three components. They are enumerated as follows:",
      "Component 1: Establishment of Enabling Units for differently-abled Persons",
      "To develop awareness in the higher education system and also to provide necessary guidance and counseling to differently-abled persons, it is proposed to establish resource units in colleges in the country, which will be called Enabling Units. The functions of this Enabling Unit will be to:",
      "1. Facilitate admission of differently-abled persons in various courses;",
      "2. Provide guidance and counseling to differently-abled individuals;",
      "3. Create awareness about the needs of differently-abled persons, and other general issues concerning their learning; and",
      "4. Assist differently-abled graduates to gain successful employment in the public as well as private sectors.",
      "The special unit will be coordinated by a faculty member to be nominated by the head of the institution. He/she will work as an honorary coordinator for which a token honorarium of Rs. 4000/- per month will be paid. The unit will also have a budgetary provision of \u20b9 50,000/per year towards general administration, stationery, and contingencies, and to avail the services of experts and personnel for organizing awareness programs, counseling sessions, etc., for efficient and independent functioning in order to achieve its objectives.",
      "Component 2: Providing Access to Differently-abled Persons",
      "Component 3: Providing Special Equipment to Augment Educational Services for Differently-abled Persons",
      "Differently-abled persons require special aids and appliances for their daily functioning. These aids are available through various schemes of the Ministry of Social Justice and Empowerment. In addition to the procurement of assistive devices through these schemes, higher education institutions may also need special learning and assessment devices to help differently-abled students enrolled in higher education. In addition, visually challenged students need Readers. Availability of devices such as computers with screen reading software, low-vision aids, scanners, mobility devices, etc., in the institutes, would enrich the educational experiences of differently-abled persons. Therefore, colleges are encouraged to procure such devices and provide the facility of Readers for visually challenged students. The UGC will provide an ad hoc one-time grant of up to \u20b91,50,000 per college during the Twelfth Plan period"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "hoapdvsra.json",
    "title": "Hari Om Ashram Prerit Doctor Vikram Sarabhai Research Award",
    "description": "The Shri Hari Om Ashram Prerit Dr. Vikram Sarabhai Research Awards are biennial awards established with funds from Pujya Shri Mota of Hari Om Ashram, Nadiad, to recognize outstanding contributions by Indian scientists under the age of 45 in the fields of Space Sciences, Space Applications, Electronics, Informatics, Telematics, Automation, and Systems Analysis or Management. The awards consist of a cash prize of \u20b950,000, a medal, and recognition for original research work done in India. <br> > ***Fields of Disciplines:*** - Space Sciences (including Astronomy, Astrophysics, Planetary and Atmospheric Sciences). - Space Applications (in the areas of Meteorology, Hydrology, Remote Sensing, and related Ground Truths). - Electronics, Informatics, Telematics and Automation. - Systems Analysis or Management, including non-linear, non-equilibrium systems in natural and social sciences and technology.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "hoapssa.json",
    "title": "Hari Om Ashram Prerit Senior Scientist Award",
    "description": "The Hari Om Ashram Prerit Senior Scientist Award was established to commemorate the birth centenary of Pujya Shri Mota, the founder of the Hari Om Ashram, Nadiad. It is awarded to an eminent Indian scientist for their innovative and outstanding contributions to the field of Science and Technology. The award comprises a silver plaque, a citation, and a cash prize of \u20b94,00,000/-.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "iaf.json",
    "title": "India Africa Fellowship",
    "description": "**Detailed** India offers 75 fellowships (50 for M.Sc. and 25 for Ph.D.) every year in Agriculture and allied sciences for four years. These fellowships are available to African nationals for study at identified Indian agricultural universities from the Indian Council of Agricultural Research (ICAR)-Agricultural Universities (AUs) system. <br> The system comprises 53 State Agricultural Universities, five research institutes including four of the ICAR with deemed to be university status, one Central Agricultural University, and four Central Universities with Agricultural Faculty. Many of them are internationally recognized for their contribution to research and human resource development. The AUs are spread over the entire length and breadth of the country and cater to Human Resource Development for different agro-climatic regions. All Indian AUs have excellent laboratories and other infrastructural facilities including instructional farms, good libraries, computer centers, boy&#39;s and girl&#39;s hostels, and sports and recreational facilities. To provide better amenities to the international trainees, well-furnished international students hostels are available on various campuses. <br> **Host Universities** The list of host universities (State Agricultural Universities, ICAR-Deemed Universities, and Central Agricultural Universities) is available on the ICAR website (https://www.icar.org.in/) or can be extracted by using Agricultural Education Portal (Https://education.icar.gov.in). The details on admission viz. schedule, eligibility criterion of candidates and availability of discipline could be surface from the website of the respective university.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "iamanak.json",
    "title": "INSPIRE Awards \u2013 MANAK (Million Minds Augmenting National Aspirations and Knowledge)",
    "description": "\u2018Innovation in Science Pursuit for Inspired Research\u2019 (INSPIRE) scheme is one of the flagship programmes of the Department of Science &amp; Technology (DST), Ministry Of Science And Technology, Government of India. The scheme was launched by the Hon\u2019ble Prime Minister on 13th December 2008, the INSPIRE Awards \u2013 MANAK (Million Minds Augmenting National Aspirations and Knowledge), being executed by DST with National Innovation Foundation \u2013 India (NIF), an autonomous body of DST, aims to motivate students in the age group of 10-15 years and studying in classes 6 to 10. The objective of the scheme is to target one million original ideas/innovations rooted in science and societal applications to foster a culture of creativity and innovative thinking among school children. Under this scheme, schools can nominate 2-3 best original ideas/innovations of students. <br> > **Theme** Schools should encourage students to identify local problems and come up with solutions to them as projects. Some of these projects may be aligned with National Flagship programs such as Swachh Bharat, Digital India, Swasth Bharat, Make in India, etc. mentioned in the E-MIAS portal.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "iaris.json",
    "title": "Indian Agricultural Research Institute - Scholarship",
    "description": "The Awards shall be made by the Dean and Joint Director (Education) of the Institute on the advice of the \u201cStanding Committee on Scholarships Financial Assistance and Academic Progress\u201d, which shall take into consideration the merit of each applicant based initially on his admission and subsequently on his performance at the Post Graduate School. &lt;br&gt; **Duration** 1. The normal duration of junior scholarships for M.Sc. course will be two years and that of senior scholarships for Ph.D. course will be three years. However, on the recommendation of the Chairperson of the student and Professor of the Division based on appraisal of the progress and details of justification for the extension needed, the period of junior/senior scholarships is extendable in exceptional cases for period not exceeding three months/six months, respectively. In the case of SC/ST/PC students, the scholarships are extendable upto a period of six months/one year, respectively. 1. The students who have undergone introductory courses on agriculture in the first year of their study at IARI shall be provided Institute scholarship for a period of one year in addition to the provisions mentioned above. 1. The scholarships shall be awarded initially for a period of one academic year from the date of joining the Post Graduate School or the commencement of the academic year, whichever is later, and can be renewed for another year in the case of M.Sc. and two years in the case of Ph.D. students, subject to the earning of Overall Grade Point Average for continuing in the Post Graduate School. 1. Requests for extension beyond these limits will be examined by the Dean on their merits. The total period for which scholarships shall be awarded including extension period shall not exceed three years and three months in the case of M.Sc. students, and four years and six months in the case of Ph.D. students. 1. The payment of scholarship/fellowship should be reviewed at the end of 3rd trimester and only those students will e permitted to continue getting fellowship who maintain the OGPA of 6.50 out of 10.00 at the end of 3rd trimester. All M.Sc./ Ph.D. students will be required to maintain the minimum OGPA of 6.00 out of 10.00 at the end of 3rd trimester to continue on the Post Graduate School rolls. 1. The scholarship shall be paid only for the period of residence of the recipient at Post Graduate School (inclusive of the summer vacation, the trimester breaks and such other leave as may be sanctioned under the rules) upto the date of final viva-voce (i.e. till they are on the rolls), subject to the condition that the maximum period of scholarship prescribed shall in no case be extended and provided he/she continues to reside in the Post Graduate Hostel and marks his/her attendance in the concerned division. &lt;br&gt; &lt;br&gt;",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Benefits"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "iasri-scholarship.json",
    "title": "IASRI Scholarship For M.Sc And Ph.D",
    "description": "The Indian Agricultural Statistics Research Institute is a premier Institute under Indian Council of Agricultural Research for conducting research and education in the field of agricultural statistics and computer application in agriculture. The Institute has functioned as the Centre of Advanced Studies in Agricultural Statistics and Computer Application from October 12,1983 to March 31,1992 under the aegis of United Nations Development Programme. Subsequently, ICAR established the Centre of Advanced Studies on Agricultural Statistics and Computer Application at the Institute from February 2,1995 as a part of its Human Resource Development Programme. Besides having modern laboratories, up to date library and other infrastructure, the Institute has a dedicated team of qualified and experienced faculty in the field of Agricultural Statistics and Computer Application. The Institute conducts Post Graduate Degree Programmes in collaboration with the Indian Agricultural Research Institute which has the status of a Deemed University under the University Grants Commission Act. The teaching is organized on the basis of trimester system. An Academic Session consists of three trimesters, each consisting of nearly twelve weeks duration. The programme of studies at the Institute includes <br> a) M.Sc. (Agricultural Statistics) b) M.Sc. (Computer Application) c) Ph.D. (Agricultural Statistics) <br> The alumni of the Institute have served/are occupying important positions in various prestigious institutions/universities in India and abroad <br> M.Sc. Degree Course The admission to M.Sc. programme is through All India Combined Competitive Examination conducted by the Education Division, Indian Council of Agricultural Research (ICAR). On the basis of the merit the ICAR finalizes the admission.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Institute Scholarships / Fellowships",
      "Scholarships are offered to all admitted students. An M.Sc. student is granted a scholarship/fellowship of value Rs.7,500/- p.m. In addition to this, M.Sc. students have a contingent grant of Rs.6,000/- per annum, for meeting out the expenditure on study tours, experimental material, purchase of books and preparation of the thesis, etc."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "icar-pms-scstc.json",
    "title": "ICAR - Post Matric Scholarship For Scheduled Caste / Scheduled Tribes Candidates",
    "description": "The scheme &quot;Post-Matric Scholarship to Scheduled Castes / Scheduled Tribes Candidates&quot; was introduced by the Indian Council of Agricultural Research (ICAR), Department of Agricultural Research and Education (DARE), to enable the students belonging to the weaker sections of society to complete undergraduate courses. The scholarship is provided for studying at the Bachelor&#39;s Degree program in various branches of Agriculture viz. B.Sc.(Agri.), B.V.Sc., B.Sc.(Agril. Engg.), B.Sc.(Home Science), B.F.Sc., B.Sc.(Forestry) etc. The value of the scholarship will be \u20b9 1,000/- per month along with a contingent grant of \u20b9 750/- per annum for the payment of tuition fees, purchase of books, cost of uniforms, etc. The duration of the scholarship will cover the whole of the normal period of the particular degree program to which the candidate is admitted.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "VALUE OF SCHOLARSHIP",
      "The value of the scholarship will be \u20b9 1,000/- per month along with a contingent grant of \u20b9 750/- per annum for the payment of tuition fees, purchase of books, cost of uniforms, etc.",
      "DURATION OF SCHOLARSHIP",
      "The duration of the scholarship will cover the whole of the normal period of the particular degree program to which the candidate is admitted."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "icar-pmsssstc.json",
    "title": "ICAR Post Matric Scholarship For Scheduled Caste / Scheduled Tribes Candidates",
    "description": "A post-matric scholarship scheme by the Indian Council of Agricultural Research (ICAR) for the Scheduled Castes / Scheduled Tribes candidates for study at Bachelor Degree program in various branches of Agriculture, viz. B.Sc.(Agri.), B.V.Sc., B.Sc.(Agril. Engg.), B.Sc.(Home Science), B.F.Sc., B.Sc.(Forestry) etc. The value of the scholarship will be \u20b9 300/- per month along with a contingent grant of \u20b9 750/- per annum for the payment of tuition fees, purchase of books, cost of uniforms, etc. The duration of the scholarship will cover the whole of the normal period of the particular degree program to which the candidate is admitted. The scheme provides for the award of 240 scholarships every year.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Value of the Scholarship",
      "The value of the scholarship will be \u20b9 300/- per month along with a contingent grant of \u20b9 750/- per annum for the payment of tuition fees, purchase of books, cost of uniforms, etc.",
      "Duration of the Scholarship",
      "The duration of the scholarship will cover the whole of the normal period of the particular degree program to which the candidate is admitted.",
      "Number of Scholarships",
      "The scheme provides for the award of 240 scholarships every year."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "icar-srf-pgs.json",
    "title": "ICAR Senior Research Fellowship For Post-Graduate Studies In Agricultural Sciences",
    "description": "ICAR awards a certain number of Senior Research Fellowships for Ph.D. in an Agricultural University (AU), in different disciplines of agriculture and allied sciences. This is done to encourage talented students to undertake higher agricultural education. <br> In order to address the emerging challenges of agricultural research and education, the ICAR supports specific time-bound schemes/projects. The schemes/projects generally have provisions for time-bound/non-regular/ contractual engagement of manpower, contingencies, and limited need-based traveling allowance (TA), besides other specifically needed provisions for a particular scheme/project. In supersession of all previous guidelines, the following guidelines are formulated to regulate all aspects relating to engagement, emoluments, and terms and conditions of Senior Research Fellows and Research Associates working in ICAR schemes.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Veterinary Sciences: \u20b9 12,000/- per month With a contingency grant of \u20b9 6,000/- per annum.",
      "All disciplines other than Veterinary Sciences: \u20b9 8,640/- per month With a contingency grant of \u20b9 6,000/- per annum.",
      "The rates of fellowship and contingency grants for higher studies will be as prescribed by the Council from time to time."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "iceasd-iced.json",
    "title": "International Centre for Environment Audit and Sustainable Development (iCED)",
    "description": "The &quot;International Centre for Environment Audit and Sustainable Development (iCED)&quot; was launched by the Indian Audit and Accounts Department, and the Comptroller and Auditor General of India. The iCED Internship Scheme offers a unique opportunity for students specializing in Ocean Science, Environmental Science, Environmental Management, Environment Audit, Environmental Economics, Environmental Law, Public Administration, Public Policy, Sustainable Development, Information Technology, Data Analytics, Architecture, Human Resource Management, Disaster Management, and related fields. This internship will focus on developing awareness about iCED\u2019s work, with a particular emphasis on Blue Economy, Climate Change, and gender-related themes. <br> > ***Duration:*** The internship duration would be 2 months, which may be extended up to 6 months. <br> > ***Number of interns:*** Two interns from one Institution/University would be selected for internship. <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Token Remuneration:",
      "Interns will receive a token remuneration of \u20b910,000/- per month to cover conveyance and daily needs.",
      "NOTE: If boarding and lodging are provided by iCED the remuneration will be reduced to \u20b95000/- per month.",
      "Certificate of Internship:",
      "Certificate will be issued upon satisfactory completion of the internship, assignment submission, and evaluation by the competent authority at iCED."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "icmr-jrf.json",
    "title": "ICMR-Junior Research Fellowship",
    "description": "ICMR-Junior Research Fellowship (ICMR-JRF) examination is the first step in the process of admission to the PhD/Research Programme through the council&amp;#39;s support. ICMR holds a national-level examination for determining the eligibility of Indian National candidates for the award of Junior Research Fellowships (JRF) through the Indian Council of Medical Research. The award of Junior Research Fellowship to the successful eligible candidates will depend on their finding placement in a medical college/hospital/university / national laboratory/institution of higher learning and research as applicable. The award of JRF is made on a merit basis by holding an entrance examination after issuing a countrywide admission notice. > **Scheme of Test:** - The test will consist of one paper of 2 hours duration. - The paper will consist of 2 Sections. The Aptitude Section (Section A) will have 50 questions on (i) scientific phenomenon in everyday life; (ii) general knowledge in sciences; and (iii) common statistics. All these questions would be compulsory with each question carrying 1 mark. The subject Specific Section (Section B &amp;amp; C) would pertain to (B) Life Sciences and (C) Social Science. The candidate may attempt questions in either of the two areas. Each area of section B &amp;amp; C would have 100 questions and the candidate may attempt any 75 questions in the predesigned area of Section B or C. Candidates are required to indicate the option for Section B or C in the application form too. - Each question carries one mark. Negative marking @ 0.25 will be made for each of the wrong answers. The questions in both sections would appear in English only. - The final result will be based on an aggregate of 55 % marks obtained in both the sections for the General category and OBC and 50% for SC/ST and physically handicapped. &gt; **The test will be held in the following streams:** - Aptitude test (common for all) (2) Life Sciences (3) Social Sciences. - Subjects covered under Life Sciences include microbiology, physiology, molecular biology, genetics, human nutrition, human biology, biotechnology, biochemistry, biophysics, immunology, pharmacology, zoology, environmental sciences, botany, public health veterinary science, and bioinformatics. Subjects covered under Social Sciences include psychology, sociology, home sciences, statistics, anthropology, social work, and health economics. A total of 150 Fellowships would be awarded. 120 Fellowships would be awarded for work in the field of biomedical sciences with emphasis on Life Sciences (like microbiology, physiology, molecular biology, genetics, human biology, bioinformatics, biotechnology, biochemistry, biophysics, immunology, Pharmacology, zoology, environmental science, botany, veterinary sciences, bio-informatics, etc.). Thirty Fellowships would be awarded for work with an emphasis on Social sciences like psychology, sociology, home science, statistics, anthropology, social work, and Health Economics. 1. Two separate merit lists, one comprising the candidates qualifying for life sciences and the second for those candidates qualifying for social sciences, will be made on the basis of their performance in the above test. 1. The candidates selected for the JRF programme of ICMR would be permitted to enroll themselves in the Ph.D. programme of any University recognised by the UGC/MCI. However, the JRF programme would not have any connection with the Ph.D. programme. The validity of the fellowship awarded to a candidate will be six months. - Another 100 candidates would be selected for consideration for positions of JRF under various research schemes of ICMR (subject to fulfilling the conditions for appointment under the schemes) for the duration of that scheme. These JRFs would also be permitted to complete a Ph.D. while working in the scheme if enrolled. The validity of the result will be two years for placement in ICMR-funded projects. - SC/ST/OBC/Physically handicapped (PH) applicants will be given such special consideration as per policy guidelines. - Candidates qualifying for the award of JRF will receive a fellowship from ICMR.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "icmr-pdf.json",
    "title": "ICMR- Post Doctoral Fellowship ",
    "description": "ICMR- Post Doctoral Fellowship (ICMR-PDF) Scheme is being instituted to foster high-quality research opportunities for promising fresh Ph.D./MD/MS holders in the cutting-edge areas of basic science, communicable and non-communicable diseases, and reproductive health including nutrition at ICMR Institutes /Centers. Special focus will be on fundamental research in areas of science and other priority areas identified by ICMR from time to time. ICMR intends to offer fifty (50) such fellowships every year for working in ICMR Institutes/Centers with state-of-the-art R&amp;amp;D facilities. These fellowships will be allocated by the Director General, ICMR, depending upon the needs of the ICMR Institute/Centre. &gt; **Tenure:** 1. Two years only and extendable for a maximum of one more year based on outstanding performance and recommendations by the Director/Officer-in-Charge of the concerned ICMR Institutes/Centers. 1. In the event of the PDF leaving before completing one year, he/she will have to refund the fellowship drawn by him/her from the date of joining to the date of leaving the fellowship.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "icroaip.json",
    "title": "ICRO Amrit Internship Programme",
    "description": "The IPL Centre for Rural Outreach (ICRO) established under the Indian Potash Limited (IPL), Department of Fertilizers, Ministry of Chemicals and Fertilizers, has launched ICRO Amrit Internship Programme focused on youth productivity for prosperity. The interns will be placed at the headquarters and Regional Offices of NPC/ IPL. The duration of the internship will be 3 months initially which can be renewed up to 4 times. The internship program shall be available throughout the year. The placement of interns will be made at the Head office and regional offices of NPC / IPL depending upon the preference of interns and the requirements of the offices concerned. > **Objectives** 1. To promote productivity-related employment by enhancing vocational skills among youth and rural people. 1. To create awareness about the enhancement of agriculture productivity. 1. To create a network of youth entrepreneurs with skills to work in rural settings. 1. To work towards the improvement of knowledge resources on youth interface. 1. To ensure environmental sustainability and conservation of natural resources.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "STIPEND",
      "CERTIFICATE",
      "NOTE: No payment towards transportation and other allowance etc. shall be paid to the interns."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ies.json",
    "title": "Institutions of Eminence scheme",
    "description": "The scheme Institutions of Eminence has been launched by the University Grants Commision in 2017 to empower Higher Educational lnstitutions to help them become world class teaching and research institutions. The objective of the scheme is to provide an enabling regulatory architecture to ten public and ten private Higher Educational institutions to emerge as world-class Teaching and Research institutions. This will enhance affordable access to high quality education for ordinary Indians. &lt;br&gt; The present guidelines shall apply to Government institutions viz. Central Universities, Government owned and controlled Deemed to be Universities, institutions of National importance such as lndian lnstitutes of Technology, Indian lnstitutes of lnformation Technology, National lnstitutes of Technology and Indian lnstitutes of Science Education and Research, Government owned standalone lnstitutions working under individual MoAs, such as lndian institutes of Management and State Universities set up under a law made by Legislative Assembly of a State (Collectively referred as Government institutions of Eminence). &lt;br&gt;",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "igstcif-pdif.json",
    "title": "IGSTC Industrial Fellowship- Post Doctoral Industrial Fellowship",
    "description": "The Indo-German Science &amp;amp; Technology Centre (IGSTC) Industrial Fellowship Programme was launched by Secretary, Department of Science and Technology, Govt. of India on the occasion of IGSTC\u2019s 11th Foundation Day on 14th June 2021 to support young Indian researchers for industrial exposure at German industries and industrial R&amp;amp;D institutions. Indo-German Science &amp;amp; Technology Centre (IGSTC), established by the Department of Science and Technology (DST), Government of India, and the Federal Ministry of Education and Research (BMBF), Government of Germany invites applications for availing Industrial Fellowship to encourage young researchers towards applied research. This programme is aimed at encouraging Postdoctoral researchers/fresh PhDs in S&amp;amp;T with an appreciable track record and having aptitude for applied research and technology development. &gt; **The proposed programme aims to:** - Motivate young Indian researchers towards applied research and build capacity to foster innovation and technology development through exposure at advanced German industrial ecosystems. - Encourage and enable Indo-German collaboration between industry-academia and industry-industry linkages through outstanding researchers. - Expose researchers to industry and industrial R&amp;amp;D enhancing interest towards applied research. - Create avenues for capacity building through doctoral and early career researchers in applied research through networking with industry. &gt; **Duration of Fellowship:** - The duration of the Fellowship is 6-12 months. - Extension in duration of Fellowship shall not be entertained.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The financial support will be limited to:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "igstcifphdief.json",
    "title": "IGSTC Industrial Fellowship- PhD Industrial Exposure Fellowship",
    "description": "The Indo-German Science &amp;amp; Technology Centre (IGSTC) Industrial Fellowship Programme was launched by the Secretary, Department of Science and Technology, Govt. of India on the occasion of IGSTC\u2019s 11th Foundation Day on 14th June 2021 to support young Indian researchers for industrial exposure at German industries and industrial R&amp;amp;D institutions. Indo-German Science &amp;amp; Technology Centre (IGSTC), established by the Department of Science and Technology (DST), Government of India, and the Federal Ministry of Education and Research (BMBF), Government of Germany invites applications for availing Industrial Fellowships to encourage young researchers towards applied research. This programme is aimed at encouraging PhD students/researchers in S&amp;amp;T with an appreciable track record and having aptitude for applied research and technology development. &gt; **The proposed programme aims to:** - Motivate young Indian researchers towards applied research and build capacity to foster innovation and technology development through exposure at advanced German industrial ecosystems. - Encourage and enable Indo-German collaboration between industry-academia and industry-industry linkages through outstanding researchers. - Expose researchers to industry and industrial R&amp;amp;D enhancing interest towards applied research. - Create avenues for capacity building through doctoral and early career researchers in applied research through networking with industry. &gt; **Duration of Fellowship:** - The duration of the Fellowship is 3-6 months. - Extension in duration of Fellowship shall not be entertained.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The financial support will be limited to:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "iirps.json",
    "title": "AICTE-ISTE INDUCTION/REFRESHER PROGRAMME SCHEME",
    "description": "AICTE-ISTE Induction/ Refresher Programme has been launched by the All India Council for Technical Education with an intention to provide financial assistance to AICTE approved institutions/universities in conducting training for the teaching faculties working in technical institutions. &lt;br&gt; **Objectives:** The AICTE-ISTE Induction/Refresher Programme are essential for teachers in technical institutions for their professional refinement. The other aims for the conduct of these Programme are: - Updating knowledge and improving organizational and pedagogical skills of teachers. - To update the knowledge by providing an opportunity for interaction and mutual exchange of ideas between teachers interested and/or working in particular areas of specialization. - Providing an opportunity for teachers to familiarize themselves with modern engineering practices, including the latest technological advances adopted by industry keeping in view the national needs and priorities and relevant technologies. - Opening up before teacher\u2019s new vistas in technology at the frontier of knowledge and the challenges and opportunities which provide to the dedicated and hard working. &lt;br&gt; **Type of Training** 1. Induction Training. 1. Refresher Training. &lt;br&gt; **Duration of Programme** - The duration of the Programme shall be one week (six working days).",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Funding to the institution/University: \u20b9 3,00,000/-"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "indagff.json",
    "title": "India Afghanistan Fellowship",
    "description": "India-Afghanistan Fellowship Programme started in 2010-11 with 115 fellowships every year for pursuing Master&#39;s and Ph.D in Indian Agricultural Universities, to support the agricultural human resource development in Afghanistan through formal education of Afghanistan scientists/faculty and students in India. The programme has been revised to offer 276 fellowships (including backlog) (154, Bachelor&#39;s; 61, Master&#39;s and 61, Ph.D. programmes) from 2012-13; 277 fellowships (153, Bachelor&#39;s; 62, Master&#39;s and 62, Ph.D. programmes) in 2013-14 and 61 (Master&#39;s) in 2014-15 to pursue degree programmes in Agriculture and allied sciences in identified Indian Agricultural Universities (AUs), from Indian Council of Agricultural Research (ICAR) - Agricultural Universities (AUs) system.. <br> The system comprises 54 State Agricultural Universities, five Deemed-to-be-Universities including four of the ICAR Institutes, one Central Agricultural University and four Central Universities with Agricultural Faculty. Many of them are internationally recognized for their contribution to research and human resource development. The Indian AUs spread over the entire length and breadth of the country and cater to Human Resource Development for different agro-climatic regions. All Indian AUs have excellent laboratories and other infrastructural facilities including instructional farms, good libraries, computer laboratories, boy&#39;s and girl&#39;s hostels and sports and recreational facilities. To provide better amenities to international students, well-furnished international students hostels are available in many AU campuses <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Description of the Benefits*:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "inspire-f.json",
    "title": "Innovation In Science Pursuit For Inspired Research (INSPIRE) - Fellowship",
    "description": "INSPIRE Fellowship is one of the components of INSPIRE scheme implemented by the Department of Science and Technology (DST), Government of India to strengthen the Science and Technology base of the country. This Component focuses on attracting students to pursue doctoral degrees in basic and applied sciences including engineering, medicine, agriculture, veterinary, pharmacy, etc. after either master\u2019s degree in science/engineering or a bachelor/ master\u2019s degree in Medicine.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "inspire-ff.json",
    "title": "Innovation In Science Pursuit For Inspired Research (INSPIRE) - Faculty Fellowship",
    "description": "The &quot;INSPIRE FACULTY FELLOWSHIP&quot; component provides opportunities to 100 persons every year with Ph.D. qualifications in the age group of 27-32 years for 5 years to carry out research in both basic and applied science areas including engineering, medicine, agriculture, and veterinary sciences for establishing themselves as independent researchers. It grants an attractive fellowship for a duration of 5 years. The objective of the scheme is to encourage young researchers to continue research in areas of S&amp;T, Medicine, Agriculture, Pharmacy, and Veterinary Sciences. <br> Purpose 1. To provide attractive opportunities for young achievers for developing independent scientific profiles and launch them toward fulfilling long-term careers. 2. To augment high-quality scientific manpower in scientific and educational institutions, especially the Central and State universities. 3. While vertical migration from the other INSPIRE components would be encouraged, the faculty fellowship component also provides the opportunity to meritorious candidates for lateral entry into INSPIRE scheme. 4. INSPIRE Faculty Fellowship provides an opportunity to post-doctoral fellows for carrying out independent research however does not guarantee a regular position after 5 years.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Amount",
      "Duration"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "inspire-i.json",
    "title": "Innovation In Science Pursuit For Inspired Research (INSPIRE) - Internship",
    "description": "INSPIRE INTERNSHIP aims to provide exposure to the top 1% of students at the Class X Board level by organizing Science Camps either during summer or winter which provides an opportunity for them to interact with Science icons from India and abroad, including Nobel Laureates, to experience the joys of scientific pursuit. These science camps nourish the curiosity of students in science, help them to think out-of-the-box, and attract students at an early age of 16-17 years to choose science subjects for further studies. Annually 50,000 students who are among the top one percent in their X Board Examination and pursuing science in standard XI would be benefited through summer/ winter camps. These camps would nourish the curiosity of children in science; help them to think out of the box and attract the students at an early age of 16-17 years (i.e. in XI standard) to pursue a research career.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "inspire-she.json",
    "title": "Innovation In Science Pursuit For Inspired Research (INSPIRE) - Scholarship For Higher Education (SHE)",
    "description": "The scheme &amp;quot;Scholarship for Higher Education (SHE)&amp;quot; is a component of the \u201cInnovation in Science Pursuit for Inspired Research (INSPIRE)\u201d, which is a flagship programme of the Department of Science and Technology (DST), under the Ministry of Science and Technology, Government of India. The scheme aims to attract students to study basic and natural Science subjects at undergraduate and postgraduate levels and pursue research as a career by providing scholarships to interested and deserving students. Under the SHE component, 12,000 scholarships (From the SHE-2017 batch onwards), each valued at \u20b9 80,000/- are announced annually to students pursuing Bachelor and Masters level courses in Basic and Natural Science areas. &lt;br&gt; &gt; **Tenure** 1. Selected candidates will be supported for a maximum period of five years, starting from the 1st year B.Sc., B.S., Int. M.Sc./Int.M.S. or until the completion of the course, whichever is earlier. 1. Continuation of the scholarship for the selected candidates is based on good academic performance in the examinations conducted by the University and upon the recommendation by the Head of the Institution. &lt;br&gt; The following subjects under Basic and Natural Sciences are within the scope of INSPIRE Scholarship for pursuing B.Sc./B.S./Int. M.Sc./Int. M.S. courses: (1) Physics (2) Chemistry (3) Mathematics (4) Biology (5) Statistics (6) Geology (7) Astrophysics (8) Astronomy (9) Electronics (10) Botany (11) Zoology (12) Biochemistry (13) Anthropology (14) Microbiology (15) Geophysics (16) Geochemistry (17) Atmospheric Sciences &amp;amp; (18) Oceanic Sciences. Courses other than these subjects such as Engineering, Medicine, Military Science, Defence Studies, Agriculture, Psychology, Seed Technology, Home Science, Geography, Economics, Education (including B.Sc.-B.Ed. dual degree course), Biotechnology, Computer Science, Computer Applications, Bioinformatics, Instrumentation, Information Technology, Physical Education, courses in Distance Education mode at Open Universities and other professional courses etc. are NOT supported. &lt;br&gt;",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ip-mea.json",
    "title": "Internship Programme By The Ministry Of External Affairs",
    "description": "The Ministry of External Affairs of the Govt. of India launched the first edition of its Internship Programme in 2022. The internship policy aims to take foreign policy closer to the people; bring in more focus on MEA; provide value to the interns; ensure better gender inclusivity and increase diversity in terms of qualifications, domicile, and socio-economic status in the cohort of interns engaged by the MEA. During the course of the internship, the Interns would be introduced to various aspects of the functioning of the Ministry, its attached offices, the public interface of the Ministry and its role in helping Indian citizens, as well as a possible visit one of the Missions abroad, subject to prevailing conditions.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ipatipo.json",
    "title": "Internship Program At The Indian Patent Office",
    "description": "The Internship Program by the Indian Patent Office recognizes the abundance of creative and innovative energies that flow in India, and the need to tap into and channelize these energies. The program aims to work towards the fulfilment of the objectives of the National IPR Policy. &lt;br&gt; &gt; **Objectives** This internship program aims to work towards the fulfilment of the following objectives of the National IPR Policy 2016: 1. **IPR Awareness: Outreach and Promotion** \u2013 To create public awareness about the economic, social and cultural benefits of IPRs among all sections of society. 1. **Generation of IPRs** - To stimulate the generation of IPRs. 1. **Human Capital Development** - To strengthen and expand human resources, institutions and capacities for teaching, training, research and skill building in IPRs. &lt;br&gt; &gt; **Number of Interns** The number of interns to be taken every year by the office of CGPDTM will be decided by the office every year depending upon the requirement, infrastructure and other facilities of the office. &lt;br&gt; &gt; **Duration** The duration of the internship shall be as per the requirement of the course curriculum. &lt;br&gt; &gt; **Place of Internship** The place of internship can be at the IP Office in Delhi, Mumbai, Kolkata, Chennai and RGNIIPM, Nagpur.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ipdop.json",
    "title": "Internship Programme Of The Department Of Expenditure",
    "description": "The Internship Programme of the Department of Expenditure aims to familiarize willing and eligible undergraduates pursuing five-year integrated courses and Graduates pursuing post-Graduation/ post-Graduates pursuing Research with the overall process of formulation of economic policies of the Government. The internship is neither a job nor any such assurance for a job in the Department of Expenditure. <br> > **Duration** The duration of the internship will be from two to six months at different points in time during the financial year. <br> > **Declaration of Secrecy** Interns will be required to furnish to the Department a declaration of secrecy before reporting for the Internship. <br> > **Logistics Support** Interns will be provided with the necessary logistics support i.e. office space and a computer with an internet facility. <br> > **Placement** The interns would be attached with one of the DS/Director level officers in the different Divisions of the Department of Expenditure keeping in view the areas of interest expressed by the candidates and as per the preference of that Division.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Remuneration",
      "Token Remuneration @ \u20b9 10,000/- per month per intern, payable on satisfactory completion of their internships and on submission of their Report / Paper.",
      "Certificate of Internship",
      "Certificates will be issued to the interns on satisfactory completion of their internship and on submission of their Report/Paper and its evaluation by the DS/Director level officer in the concerned Division."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ipiccr.json",
    "title": "Internship Policy Of Indian Council For Cultural Relations (ICCR)",
    "description": "> Indian Council for Cultural Relations (ICCR) is an autonomous body under the Ministry of External Affairs <br> The Internship Policy of the Indian Council for Cultural Relations (ICCR) provides an excellent opportunity for budding scholars to familiarise themselves with the role of soft power in foreign policy formulation in the Government of India. These \u2018Interns\u2019 shall be given exposure to various Sections with ICCR and would be expected to supplement the process of analysis in various fields including creative writing, cultural mapping, technology upgradation in EGIT, creating a module for performing and visual art, historical cultural linkages of India with other countries and the use of Social Media in Cultural Diplomacy. It aims at active participation in the learning process through experimentation and putting into practice the knowledge acquired in the classrooms. <br> > **Intake** A maximum of 15 interns will be engaged by ICCR during the course of a year. <br> > **Location** The interns will be placed at ICCR, New Delhi and its Regional Offices in Mumbai, Pune, Kolkata, Guwahati, Ahmadabad and Hyderabad. <br> > **Duration** Each intern will be engaged for a maximum period of four months. <br> > **Duties &amp; Responsibilities** Interns will be assigned specific topics of work by the concerned Sectional Head and may be required to conduct research, write reports, analyze evolving developments or carry out any other task entrusted to them by the Sectional Heads.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Honorarium",
      "An honorarium of \u20b9 10,000/- per month will be paid to each intern.",
      "Air Fare",
      "The cost of one-time to and fro air travel is subject to a ceiling of the prevailing economy class airfare between the State capital and Delhi, from the domicile State or from the college/ university of the selected candidates will be provided.",
      "NOTE: The interns would be responsible for their board and lodging in Delhi, Mumbai, Pune, Kolkata, Guwahati, Ahmadabad and Hyderabad.",
      "Logistics Support",
      "Necessary logistic support will be provided to the intern taking into account the functional requirements.",
      "Certificate",
      "Certificates will be issued to the interns on satisfactory completion of their internships and on submission of their Report/ Paper and its evaluation by the Head of the concerned Division."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ipiwai.json",
    "title": "The Inland Waterways Authority of India Internship Scheme",
    "description": "Inland Waterways Authority of India (IWAI); a statutory body under the Ministry of Ports, Shipping and Waterways has introduced a scheme named &amp;amp;quot;**The Inland Waterways Authority of India Internship Scheme**&amp;amp;quot;. This Internship Programme will provide an excellent opportunity to interns to familiarize them with the overall proves of development of Inland Waterways Authority of India at the macro level. **Objectives of this Scheme are as under:** - To allow young academic talent to be associated with IWAI work for mutual benefit. - The \u201c**Interns**\u201d shall have the opportunity to know about IWAI functioning, understand overall process of development of Inland Waterways Transport (IWT) of India at the macro level, issues faced and contribute towards inputs, analysis, report writing, proposal preparation work. **Other key points of this Scheme:** 1. Certificates will be issued to the interns on satisfactory completion of their internship and on submission of their Report/paper and its evaluation by the Director/ Director-In Charge level officers in their concerned Division. 1. Interns will be required to have their own laptops. 1. IWAI will provide them with working space. 1. Interns are required to furnish to the Authority a declaration of secrecy before reporting for the internship. 1. The interns will be required to present to the concerned Head of Division a Report/Paper on the allotted subject at the end of the internship. 1. The maximum number of interns during the year 2024-25 to be trained at IWAI are as under : Undergraduate (UG) is 10 (Ten) and Post Graduate/Research Scholar (PG) is 15 (Fifteen). &amp;lt;br&amp;gt;",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ipsfiomca.json",
    "title": "Internship Programme At Serious Fraud Investigation Office",
    "description": "**Serious Fraud Investigation Office** (SFIO) is a multi-disciplinary organization under the Ministry of Corporate Affairs has an **Internship Programme** which was started in 2017 to provide a platform for interaction of talented and young scholars and researchers from reputed academic institutions who are pursuing Post-Graduation/Research Program in Economics/ Commerce/Law/Management and Computer Forensics as well as professional courses with Institute of Chartered Accountants of India, Institute of Cost Accountants of India (CMA) and Institute of Company Secretaries of India with officers of SFIO, including its Regional Offices. The programme also provides an opportunity to interns to not only familiarize themselves with the working of the Government but also offers a chance to gain hands-on experience in specialized skills in their area of study as well as working in team. &gt; **Duration** The internship will be for a minimum period of one month and a maximum period of two months. &gt; **Declaration of Secrecy** Interns shall be required to furnish a Declaration of Secrecy prior to the commencement of the internship. **NOTE:** The internship will neither be a job nor an assurance of a job in the Serious Fraud Investigation Office.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ipwccb.json",
    "title": "Internship Programme Of The Wildlife Crime Control Bureau (MoEFCC)",
    "description": "Internship at Wildlife Crime Control Bureau provides an excellent opportunity for students/researchers to familiarize themselves with various issues related to wildlife &amp; the functioning of the Wildlife Crime Control Bureau. The intern shall have an orientation session on the organization and would be assigned specific areas of work. They shall report to and work under the close supervision of the Head of Department. <br> > **Nature of Work** To collect &amp; consolidate data on wildlife crimes or carry out any other task entrusted to them under the directions of the Head of the Department. <br> > **Duration** The Internship Programme in Wildlife Crime Control Bureau will be conducted in two phases in a year, during the summer &amp; winter vacations of colleges. Each programme will be one month long commencing on the 1st of the month and concluding at the end of the month. **Summer Internships** shall be conducted during the month of May &amp; June. **Winter Internships** shall be conducted during the month of December &amp; January.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Certificate of Internship",
      "Upon the satisfactory completion of the internship, a certificate will be issued to the intern after the submission of the report.",
      "Remuneration",
      "No remuneration shall be paid to the intern."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "is-dea.json",
    "title": "Internship Scheme Of The Department Of Economic Affairs",
    "description": "The Department of Economic Affairs of the Ministry of Finance manages the Internship Scheme for PhD or postgraduate students working on specific issues relating to macro-economic management, capital Markets, Economic Reforms, Exchange Management, Foreign Investment in India and India Investment abroad, Monetary Policy, Fiscal Policy, Inflation Management, Debt Market Operation and Debt Management (External &amp;amp; Domestic), Small Savings, Modernization of Budget Documents, Bilateral Investment Treaties, Infrastructure Financing, etc. &lt;br&gt; &gt; **Objective** 1. To familiarize the selected candidates with the overall process of formulation of economic policies of the Government at a macro level. 1. To provide an opportunity to carry out brief research into a key and specific economic issue/problem faced by the country and offer solutions for the same. &lt;br&gt; &gt; **Duration** 1. The duration of the Internship maybe 3 to 6 months. 1. Since the time duration is very short, interns would be required to carry out a very intense study to ensure desirable outputs in a short time frame. &lt;br&gt; &gt; **Slots** 1. The number of Internships will be limited to a maximum of 15 paid interns. 1. Ten additional unpaid interns may also be selected, out of those ranking on top but could not be selected for the paid internship. &lt;br&gt; &gt; **Attachment** The interns would be exclusively attached to a Joint Secretary / Director / Office of Chief Economic Adviser / Principal Economic Adviser.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Remuneration",
      "Token remuneration of \u20b910,000/- per month per intern for PG students, and of \u20b920,000/- per month per intern for PhD students is payable on satisfactory completion of their internship and on submission of their Report/Paper/Feedback.",
      "Logistics Support",
      "Interns will be provided with the necessary logistics support, i.e. office space and computer with internet facility.",
      "Certificate",
      "The Certificate of Internship shall be issued to the interns on satisfactory completion of their internship of not less than three months and on submission of their Report/Paper/Feedback/Attendance Certificate duly certified by the Divisional Head."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "isec.json",
    "title": "Interest Subsidy Eligibility Certificate (isec) Scheme",
    "description": "The Interest Subsidy Eligibility Certificate (ISEC) Scheme is an essential mechanism for funding the Khadi program undertaken by Khadi institutions. It was introduced to mobilize funds from banking institutions to fill the gap between the actual fund requirements and the availability of funds from budgetary sources. Under the ISEC Scheme, credit at a concessional rate of interest of 4% per annum for working capital, is made available as per the requirement of the institutions. The difference between the actual lending rate and the Central Government pays 4% through KVIC to the lending banks.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "isepfo.json",
    "title": "Internship Scheme Of Employees\u2019 Provident Fund Organisation (EPFO)",
    "description": "<br> The Internship Scheme of Employees\u2019 Provident Fund Organization invites applications for Internships from students for engagement as \u201cInterns\u201d with EPFO. The \u201cInterns\u201d shall have an opportunity to know about the EPFO\u2019s functioning and Departmental Policy issues in EPFO and Government of India and contribute to the Policy/Legislation formulation by generating policy inputs such as empirical analysis, briefing reports, policy papers, etc. However, the internship is neither a job nor an assurance for a job in EPFO. <br> > **Objective** 1. To engage persons pursuing law [in the last two years of degree course] or Law Graduates or students pursing Post Graduation in Law or Research Scholars in Law or pursuing post-graduation courses like MBA/MSW/MSc/MA and are enrolled in recognized University/Institution within India or abroad as \u2018Interns\u201d with EPFO that shall be mutually beneficial for the individual as well as for EPFO. 1. The \u201cInterns\u201d shall have an opportunity to know about the EPFO functioning and Department Policy issues in EPFO and Government of India and contribute to the Policy/Legislation formulation by generating policy inputs such as empirical analysis, briefing reports, policy papers, etc. 1. However, the internship is neither a job nor any such assurance for a job in the EPFO. <br> > **Duration** Applications for internships are invited for a minimum period of 2 months and a maximum period of 6 months. <br> > **Engagement** Engagement of Interns (total 10 maximum) will be carried out with the approval of Central Provident Fund Commissioner. <br> > **Placement** After their engagement, the interns will be attached to an officer in a Division/Department/Wing as decided by the Central Provident fund Commissioner, keeping in view their suitability as well as requirement in concerned Wing/Division.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Stipend",
      "The interns selected will be paid stipend @ \u20b9 8,000/- per month for the period of internship on certification from the officer with whom the intern is attached.",
      "Logistic Support",
      "EPFO shall provide them with working space and computer with internet facility and other necessities as deemed fit by the concerned Divisional Head of the Division/Department/Wing to which the interns are attached.",
      "Certificate of Internship",
      "Certificate will be issued to the interns on satisfactory completion of the internship and on submission of their Report/Paper and its evaluation by the concerned Head of the Division."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ismole.json",
    "title": "Internship Scheme Of The Ministry Of Labour & Employment",
    "description": "Through the Internship Scheme, the Ministry of Labour &amp; Employment engage eligible students as \u201cInterns&quot; to work for mutual benefit. The \u201cInterns\u201d shall have an opportunity to know about the Government functioning and Department Policy issues in the Government of India and contribute to the Policy/Legislation formulation by generating policy inputs such as empirical analysis, briefing reports, policy papers, etc. <br> > **Duration** The duration of the internship will be from two to six months at different points in time in the year. <br> > **Declaration of Secrecy** Interns will be required to furnish to the Ministry of Labour &amp; Employment a declaration of secrecy before reporting for the internship. <br> > **Placement** Placement of Interns (total 5 maximum) will be carried out with the approval of the Secretary (L&amp;E), after their engagement, keeping in view their suitability as well as a requirement in the concerned Wing/Division.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Stipend",
      "The Interns will be paid a stipend @ \u20b9 8,000/- per month for the period of internship on certification from the Officer, which the Intern is attached to.",
      "Logistic Support",
      "Ministry of Labour & Employment shall provide them with working space and computer with internet facility and other necessities as deemed fit by the concerned Heads.",
      "Certificate of Internship",
      "Certificates will be issued to the interns on satisfactory completion of their internship and on submission of their Report/Paper and its evaluation by the concerned."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ispgrsdgtr.json",
    "title": "Internship Scheme For PG/Research Students In Directorate General Of Trade Remedies (DGTR)",
    "description": "The Internship Scheme by the Directorate General of Trade Remedies (DGTR), Department of Commerce, Ministry of Commerce &amp; Industry provides opportunity to young scholars, especially from Law / Economics stream, interested in learning about trade remedial investigations. The objective of this scheme is to familiarize interested and willing PG students / Research scholars with Trade remedial investigations / Trade Defence measures. <br> > **Tenure** Minimum duration of internship will be one month. <br> > **Nature of Internship** 1. The Interns will be attached to one officer of DGTR who will act as \u2018mentor\u2019 to the Intern and would design a suitable schedule for the intern. 1. The Interns would be attached with Officers / Division /Cell as decided by the competent authority of DGTR based on recommendation of the \u2018mentor\u2019. <br> > **Number of Interns** 1. The number of interns to be taken will be decided by the DGTR. 1. Internship in DGTR is neither a job nor any such assurance for a job in the Department / Organization / Government. <br> > **Termination of Internship** DGTR reserves the right to terminate the internship of any intern at any point of time without assigning any reason in this regard to either the intern or his/her institution.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Certificate of Internship",
      "Certificates will be issued to the interns at the end of successful completion of the Internship.",
      "NOTE: No financial aid / stipend will be provided by this Directorate to the interns."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "isuidai.json",
    "title": "Internship Scheme By The Unique Identification Authority Of India (UIDAI)",
    "description": "The Internship Scheme by the Unique Identification Authority of India (UIDAI) enables the students to gain adequate exposure to various Technology tracks and other units within UIDAI Headquarters, Technology Centre and Regional offices. It would be expected to work in the field of application development, legal domains (like cyber laws/IT act) &amp; general management. For the \u201cInterns\u201d the exposure to the functioning of the UIDAI &amp; the technologies applied shall be an add-on furthering their future career prospects in niche technology, legal domains, management and many other areas as the case may be. <br> > **Objective** 1. To allow young academic talent to be associated with UIDAI\u2019s work for mutual benefit. 1. The \u201cInterns\u201d shall have an opportunity to know about the UIDAI functioning. It will enable UIDAI to interact with young scholars and to get fresh ideas and study/research support from the field of academics. At the same time, it will provide an opportunity to young scholars to contribute in the UIDAI work and have an insight into the related technical domains, management fields or related legal aspects. <br> > **Period** The period of the Internship shall be at least six weeks but not exceeding 12 months. **NOTE:** Interns not completing the requisite period will not be issued any certificate. <br> > **Place of Internship** All the interns should work either at the Technology Centre, Bengaluru or Regional offices of UIDAI or UIDAI Headquarters or assigned from a remote location under the guidance of the Project Supervisor (not below the Director rank).",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Stipend (in \u20b9 per Month)",
      "1. Technical",
      "2. Professional",
      "3. Non-Technical",
      "Logistic Support",
      "NOTE 1: The Intern has to make his/her own accommodation arrangement during the internship in case of working from UIDAI premises.",
      "NOTE 2: They shall arrange their own transport to and from the office.",
      "NOTE 3: The Intern will not be given any Computer System/Laptop etc for carrying out his/her assignments during the internship.",
      "NOTE 4: The intern shall be required to bring his/her own Laptop for carrying out the work assigned to him/her.",
      "Experience Certificate",
      "The UIDAI will issue a certificate for the period of internship in UIDAI at the end of the internship subject to the completion of assigned work, duly recommended by the concerned reporting officer."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "itiscbic.json",
    "title": "Indirect Tax Internship Scheme In Central Board Of Indirect Taxes And Customs (CBIC)",
    "description": "The &quot;Indirect Tax Internship Scheme&quot; by the Central Board of Indirect Taxes and Customs (CBIC) takes 10 Law Students and 10 Law Graduates as Interns every year. The interns are expected to study case files, assist in legal research and drafting of petitions, brief the counsels and extend any other related legal/general assistance to officers/counsels. The interns may also accompany the departmental officers to the briefing meetings if needed. The interns will be deployed in different sections of the legal establishment in CBIC. This is a full-time internship and is to be attended physically and the interns are not expected to pursue any other course/work during the tenure of the internship. <br> > **Location** 1. The internship shall take place in Delhi. 1. The interns will be deployed in different sections of the legal establishment in CBIC. **NOTE:** The internship will neither be a job nor an assurance of a job in the Department. <br> > **Duties &amp; Responsibilities** 1. The interns are expected to study case files, assist in legal research and drafting of petitions, brief the counsels and extend any other related legal/general assistance to officers/counsels. 1. The interns may also accompany the departmental officers to the briefing meetings if needed. <br> > **Number of Slots** 1. A maximum of ten law students and ten law graduates will be taken at a time for an internship. <br> > **Duration** 1. _For Law Students:_ The period of internship shall be two months extendable upto a maximum total period of three months by the Principal Commissioner, Directorate of Legal Affairs on mutual agreement. 1. _For Law Graduates:_ The period of internship shall be six months extendable upto a maximum total period of twelve months by the Principal Commissioner, Directorate of Legal Affairs on mutual agreement. <br> > **Leaves** 1. The maximum permissible leave of absence is 2 days per month. 1. Extra leave may be granted in exceptional circumstances. In such cases, the period of internship shall be extended to the extent of such leave. <br> > **Attendance** 1. For satisfactory completion inter-alia, 90% attendance is mandatory. 1. This is a full-time internship to be attended physically and the interns are not expected to pursue any other course/work during the tenure of the internship.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Stipend",
      "Certificate"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ivri-is.json",
    "title": "IVRI Institute Scholarship For M.V.Sc. And Ph.D.",
    "description": "The Indian Veterinary Research Institute will award scholarships to MVSc and PhD students <br> IVRI Scholarship is admissible to only those candidates who are admitted through competitive entrance examination for MVSc/PhD degree programmes. The award to the fresh students shall be made by the Joint Director (Acad.) of the Institute on the recommendation of the \u2018Standing Committee on Scholarship, Financial Assistance and Academic Progress\u2019 which shall take into consideration the merit of each applicant based initially on his/her admission and subsequently on his/her performance at the Institute. <br> **Master Programme at IVRI Deemed University** The candidates for admission to Master\u2019s programme must have Bachelor\u2019s Degree in Veterinary Science in the concerned discipline as specified below as specified by the Veterinary Council of India with a minimum of 60% marks in aggregate (55% for SC/ST or sponsored candidates) or equivalent CGPA. <br> Admission for MVSc program will be held on the basis of all India Competitive Examination conducted by the Education Division, Indian Council of Agricultural Research, New Delhi. All the candidates including sponsored (in-service) for seeking admission to MVSc programme must have to appear in the written Examination. For more information related to Competitive Examination, please visit the Education Division, ICAR, New Delhi website.(www.icar.org.in.) <br> **The main subjects/disciplines of study in which various degrees will be offered are as follows:** 1. Animal Biochemistry 2. Animal Biotechnology 3. Animal Genetics and Breeding 4. Animal Nutrition 5. Bio-Statistics 6. Epidemiology 7. Livestock Economics 8. Livestock Production and Management 9. Livestock Products Technology 10. Poultry Science 11. Veterinary Bacteriology 12. Veterinary Extension Education 13. Veterinary Gynaecology and Obstetrics 14. Veterinary Immunology 15. Veterinary Medicine 16. Veterinary Parasitology 17. Veterinary Pathology 18. Veterinary Pharmacology 19. Veterinary Physiology 20. Veterinary Public Health 21. Veterinary Surgery &amp; Radiology 22. Veterinary Virology <br> Admission for MVSc programme will be held on the basis of all India Competitive Examination conducted by the Education Division, Indian Council of Agricultural Research, New Delhi. All the candidates including sponsored (in-service) for seeking admission to MVSc programme must have to appear in the written Examination. For more information related to Competitive Examination, please visit the Education Division, ICAR, New Delhi. <br> **Doctoral Programme at IVRI** 75% seats for Doctoral Programmes, including sponsored seats are to be filled on the basis of all India Entrance Examination conducted by the Institute and remaining 25% seats (subject to atleast one seat for each discipline) will be filled-up on the basis of All India Competitive Examinations for award of ICAR\u2019s Senior Research Fellowship [AICE-SRF {PGS}] conducted by Education Division, ICAR, New Delhi. <br> The candidates for admission to PhD programme must have MVSc degree in the concerned discipline as specified below with a minimum CGPA 6.50/10.00 scale, 3.25/5.00 scale, 2.60/4.00 scale for General and OBC categories and 5.50/10.00 scale, 2.75/5.00 scale, 2.20/4.00 scale for SC/ST/Physically challenged/ Sponsored candidates, respectively from any recognized University in India or where grade-points are not awarded and only marks are awarded, the candidate must have secured atleast 60% marks for General/OBC category. For SC/ST/Physically challenged/Sponsored category candidates, the minimum percentage of marks will be 50%.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "For Master Programme",
      "The amount of the scholarship for the Master\u2019s Degree programme is Rs. 7,560/- per month for 2 years with a contingent grant of Rs. 6,000/- per annum for two years",
      "For Doctoral Programme",
      "In the Doctoral programme, it is Rs. 13125/- per month for three years with a contingent grant of Rs. 10000/- per annum for three years."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "jcbs.json",
    "title": "J.C. Bose Fellowship",
    "description": "The \u201cJ.C. Bose fellowship\u201d is awarded to active scientists in recognition of their outstanding performance. The fellowship is scientist-specific and very selective. The scientist should be in service at the time of nomination to this fellowship. The nominee should be an Indian national working in institutions in India. &gt; **Duration of Fellowship:** - The duration of the fellowship will be initially for five years. In case, the fellow superannuates during the term of the fellowship, the fellowship can be continued if a host institution is willing to host the fellowship - The tenure of the fellowship may be extended for the subsequent term of 5 years based on a rigorous assessment of research performance during the tenure of the fellowship. A minimum of 25% of the applicants seeking an extension will not be granted the extension.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "jrfbio.json",
    "title": "Junior Research Fellowship",
    "description": "The Junior Research Fellowship (JRF) from the Department of Biotechnology (DBT) is a fellowship program that provides financial support to students who are pursuing doctoral research in biotechnology and life sciences. The JRF program is open to all Indian nationals who have a master&#39;s degree in biotechnology or a related field. <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The fellowship amount for the JRF program is \u20b931,000 per month for the first two years and \u20b935,000 per month for the remaining three years."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "jrfrafn.json",
    "title": "Junior Research Fellowship (JRF) And Research Associateship (RA) For Foreign Nationals",
    "description": "**INTRODUCTION** The scheme was initiated keeping in view the political and cultural bilateral relations of India with other developing countries of Asia, Africa, and Latin America. The scheme has opened new vistas for foreign students and teachers, enabling them to come to India and undertake advanced studies and research in sciences, humanities, and social sciences in Indian Universities. <br> **OBJECTIVE** The objective of the scheme is to provide an opportunity for foreign students and teachers from developing countries to undertake advanced study and research leading to M.Phil/Ph.D. and postdoctoral research in sciences, humanities, and social sciences at Indian Universities.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "NATURE OF ASSISTANCE",
      "Financial Assistance for JRF -",
      "Fellowship",
      "@ Rs. 12,000/-p.m. for an initial period of two years.",
      "@ Rs. 14,000/-p.m. for the remaining period subject to the recommendation for enhancement/extension by a three-member committee and the Commission\u2019s approval for Sciences for initial two years.",
      "Contingency -",
      "@ Rs.12,000/-p.a. for Science",
      "@ Rs.10,000/-p.a. for Humanities and Social Sciences",
      "@ Rs.25,000/-p.a. for the remaining period for Sciences",
      "@ Rs.20,500/-p.a. for the remaining period for Humanities",
      "Department @ Rs. 3,000/-p.a. -- per JRF Assistance",
      "Escort @ Rs. 2,000/-p.a. -- per JRF",
      "Handicapped Allowance",
      "HRA as per the rule of the concerned institution",
      "Financial Assistance for RA -",
      "Fellowship @ Rs. 16,000/-p.m. (Fixed) for 4 years",
      "Contingency @ Rs. 30,000/-p.a.",
      "Departmental @ 10% of Associateship to the host institution for providing Assistant infrastructural facilities.",
      "HRA as per the rule of the concerned institution.",
      "*****",
      "HRA",
      "(i) Suitable single-seated hostel accommodation in the institutions may be provided to the JRF, failing which HRA as per rules of the university/institution will be paid to the Fellow subject to the submission of the HRA certificate through Registrar/Principal.",
      "(ii) JRF/RA provided with accommodation in a hostel recognized/maintained by the institutions may be reimbursed the hostel fee, excluding mess, electricity, water charges, etc.",
      "(iii) A certificate to this effect is to be furnished through the Registrar/Principal (Annexure I).",
      "(iv) If JRF/RA makes his/her own arrangements of accommodation, he/she may be entitled to draw HRA as per the categorization of cities by the Government of India.",
      "(v) The Fellow will submit a certificate for this purpose to UGC for claiming HRA through the concerned university/institution/college.",
      "Medical",
      "No separate/fixed medical assistance is provided. However, the JRF/RA may avail of the medical facilities available in the institutions/university.",
      "Leave",
      "(i) Leave for a maximum period of 30 days in a year in addition to public holidays may be taken by a fellow with the approval of the supervisor. However, they are not entitled to any other vacations, for example, summer, winter, and pooja vacations. Women awardees are eligible for maternity leave at full rates of the fellowships for 135 days as per Government of India rules once during the tenure of their award.",
      "(ii) The awardee may in special cases be allowed by the Commission leave without fellowship/associateship and contingency for a period not exceeding three months during the tenure of the award on the recommendation of the supervisor/Head of the department of the institution concerned. The period of leave without fellowship/associateship will be counted towards the tenure."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "jrfshss.json",
    "title": "Junior Research Fellowship In Sciences, Humanities, And Social Sciences",
    "description": "**INTRODUCTION** The Junior Research Fellowship (JRF) scheme of the University Grants Commission (UGC) is open to candidates who qualify for the National Eligibility Test-Junior Research Fellowship(NET-JRF) of the UGC and the UGC-Council of Scientific and Industrial Research (UGC-CSIR) joint test. However, please note that these are qualifying tests only and do not bestow a fellowship upon the candidate. <br> **OBJECTIVES** The objective of the JRF scheme is to provide opportunities to NET-JRF qualified candidates to undertake advanced studies and research leading to M.Phil/Ph.D. Degrees in Humanities and Social Sciences including Languages and Sciences.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Fellowship",
      "@ Rs.25,000/-p.m. for initial two years JRF",
      "@ Rs.28,000/-p.m. for remaining tenure SRF",
      "Contingency A (for Humanities & Social Sciences)",
      "@ Rs.10,000/-p.a. for the initial two years",
      "@ Rs.20,500/-p.a. for remaining tenure",
      "Contingency B (for Science)",
      "@ Rs.12,000/-p.a. for the initial two years",
      "@ Rs.25,000/-p.a for remaining tenure",
      "Escort/Reader Assistance",
      "@ Rs. 2,000/-p.m. in case of physically Handicapped & blind candidates.",
      "HRA",
      "(as per the categorization of cities by the Government of India)",
      "i. Suitable single-seated hostel accommodation may be provided to the candidates in the institutions. In such cases, the fellow is eligible to draw only hostel fees excluding mess, electricity, water charges, etc. A certificate to this effect is to be furnished through the Registrar/Director/Principal. HRA is not permissible for those candidates who are staying in Hostel accommodation.",
      "ii. In case of non-availability of hostel accommodation, the fellow may be provided with single accommodation by the host institution. In such cases, the rent paid by the fellow on an actual basis may be reimbursed subject to the ceiling of HRA as per Govt. of India norms.",
      "iii. If the fellow makes her own arrangements of accommodation, she may be entitled to draw HRA as per the categorization of cities by the Govt. of India.",
      "Medical",
      "No separate/fixed medical assistance is provided. However, the fellow may avail of the medical facilities available in the institution/university/college.",
      "Leave",
      "i. Fellows are entitled to a maximum period of 30 days of leave in a year in addition to public holidays. They are not entitled to any other vacations.",
      "ii. Candidates are eligible for maternity/ Paternity leave as per Govt. of India norms issued from time to time at full rates of fellowship once during the tenure of their award.",
      "iii. Besides this an \u2018Intermittent Break\u2019 for a maximum period of 1 year may also be permissible to the women candidates. The leave can be availed 3 times during the entire period of the fellowship. However, the total duration of leave shall not exceed one year. This Flexi Time period should not be counted towards the tenure of the fellowship and thus effectively the total period of fellowship will remain the same.",
      "iv. Academic Leave:-Academic leave without fellowship shall be permissible only for one year throughout the tenure (for any kind of academic",
      "assignment/teaching/foreign visit in connection with research work). The period of leave without fellowship will be counted towards the tenure. Expenditure on",
      "foreign visits in connection to research work cannot be claimed from UGC.",
      "Tenure of Fellowship:",
      "These are integrated five-year fellowships for M.Phil. and Ph.D. subject academic criteria in force for selection of Ph.D. program. The duration of the fellowship is as under:",
      "M.Phil. + Ph.D.",
      "Maximum duration (Years): 5",
      "Admissibility of JRF (Years): 2",
      "Admissibility of SRF (Years): 3",
      "Ph.D.",
      "Maximum duration (Years): 5",
      "Admissibility of JRF (Years): 2",
      "Admissibility of SRF (Years): 3",
      "The tenure of the fellowship is for five years from the date of joining. M. Phil is for two years. Fellowship will be granted upto the date of submission of Ph.D. Thesis or 5 years whichever is earlier."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "jrfst.json",
    "title": "Junior Research Fellowship In Engineering & Technology",
    "description": "**INTRODUCTION** The scheme &quot;Junior Research Fellowship in Engineering &amp; Technology&quot; by the University Grants Commission (UGC), Department of Higher Education is meant for candidates who wish to pursue research leading to a Ph.D. degree in engineering and technology. As of date, the University Grants Commission (UGC) or the Council of Scientific and Industrial Research (CSIR) are not conducting National Education Testing (NET) examinations in these fields. Therefore, M.Pharma and M.E., M.Tech. students are given this opportunity, through direct interviews conducted by the Commission. There are 50 slots under this scheme per year. <br> **OBJECTIVES** The objective of this scheme is to provide an opportunity to research scholars to undertake advanced study and research in engineering and technology, and agricultural engineering, leading to Ph.D. Subjects like geology and geo-physics are not considered under this scheme.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "NATURE OF ASSISTANCE",
      "The assistance available under the scheme is:",
      "Fellowship @ Rs. 14,000/- p.m. for the initial two years, @ Rs.15,000/- for the remaining period",
      "Contingency @ Rs.12,000/- p.a. for the initial two years, @Rs.25,000/- p.a. for the remaining period",
      "Departmental Assistance @ Rs. 3,000/- p.a. per student to the host institute for providing, infrastructure to the researcher",
      "Escorts/Reader Assistance @Rs.2,000/- p.m. in cases of physically handicapped and blind candidates",
      "HRA As per the rule of the concerned institution",
      "House Rent Allowance:",
      "Suitable single-seated hostel accommodation in the institutions may be provided to the Fellow, failing which HRA as per rules of the university/institution",
      "will be paid, subject to the submission of the HRA certificate through the registrar/principal. Research Fellows provided with accommodation in hostels recognized/maintained by the institutions may be reimbursed the hostel fee, excluding mess, electricity and water charges, etc. A certificate to this effect is to be furnished through the registrar/principal (Annexure I). If the Fellow makes his/her own arrangements of accommodation, he/she may be entitled to draw HRA as per the categorization of cities by the Government of India. The Fellow will submit a certificate to UGC for claiming HRA through the concerned university/institution/college.",
      "Medical:",
      "No separate/fixed medical assistance is provided. However, the fellow may avail the medical facilities available in the institution/university.",
      "Leave:",
      "Research Fellows are entitled to a maximum period of 30 days leave in a year in addition to public holidays. They are not entitled to any other leave, for example, summer, winter, pooja vacations, etc. Women candidates are eligible for maternity leave of 135 days at full rates of fellowship once during the tenure of their award.",
      "Note-1: The Research Fellow, in special cases, may be allowed by the Commission, to leave without fellowship for up to one academic year during the entire tenure of the award for accepting teaching assignments on a temporary basis, provided the assignment is in the same city/town.",
      "Note-2: In other cases, leave without fellowship will be restricted to a period not exceeding three months during the tenure of the award on the recommendations of the supervisor and the head of the institution.",
      "Note-3: The period of leave without fellowship will be counted towards the total tenure of the fellowship.",
      "Note-4: Fellows are advised to apply for leave through their university/institution/college well in advance for the approval of the Commission."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "kkjby.json",
    "title": "Khadi Karigar Janashree Bima Yojana",
    "description": "A group insurance scheme by MoMSME for khadi artisans (spinners and weavers). The scheme provides insurance cover against normal death, accidental death, permanent or partial disability of the insured artisan. Scholarships are provided to the insurer\u2019s children studying in class 9th to 12th. <br> The artisan must be member of the approved vocation / occupation groups. This scheme was formulated by Khadi and Village Industries Commission (KVIC) in association with the Life Insurance Corporation of India (LIC).",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "lbssf-els.json",
    "title": "Loan Based Schemes For Safai Karamchari - Education Loan Scheme (ELS)",
    "description": "an Education Loan scheme by the Ministry of Social justice and Empowerment for Safai Karamchari, Manual Scavengers, and their dependents aged 18 years and above. <br> Under this scheme, term loans are extended through State Channelising Agencies (SCA), Regional Rural Banks(RRBs) and Nationalised Banks to the target group. <br> 1. Educational Loan Upto 90% of the unit cost with a maximum unit cost of **Rs.10.00 lacs for study in India** and **Rs.20.00 lacs to study** abroad at interest rate of **4%**1. 0.5% per annum rebate for women in case of study in India 1. Promoters\u2019 contribution: 10% to be arranged by the student/CAs 1. Loans are extended through Channelizing Agencies (CAs) i.e. State Channelizing Agencies (SCAs), Regional Rural Banks (RRBs) and Public Sector Banks (PSBs) to the target group. <br> **Note:** The interest on Education Loan (for study in India) is reimbursable under the scheme of Ministry of Education,Government of India to the beneficiaries whose family annual income is upto 4.50 lac per annum <br> <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Educational Loan:",
      "Repayment period:",
      "5 years after co-termination of course. However, the interest is payable on a quarterly basis from the disbursement of the loan.",
      "Moratorium period:",
      "1 Year",
      "Coverage :",
      "Education loan may cover the following:-"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "lels.json",
    "title": "LIDCOM Education Loan Scheme",
    "description": "Being implemented since the year 2009, the &quot;Education Loan Scheme&quot; is a scheme by the Leather Industries Development Corporation (LIDCOM), Govt. of Maharashtra. In this scheme, finance of upto \u20b9 20,00,000 is provided for post graduate students in the 18-50 years age group from Charmakar Community for studies in India and in abroad. Only the citizens who are a permanent resident of the state of Maharashtra are eligible to apply to this scheme. This is a Central Government Scheme and the funding for this scheme come from the National Scheduled Castes Finance and Development Corporation, New Delhi (NSFDC). The main objective of LIDCOM is to implement various schemes to uplift lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below poverty line and with an intention to develop them educationally, economically and socially so as to give them respectable place in Society.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "llbip.json",
    "title": "LLB Internship Programme",
    "description": "Ministry of Law and Justice under the Department of Justice (DoJ) has introduced an Internship Programme named &amp;quot;LLB Internship Programme&amp;quot; for young law students. The purpose of this Programme is to well acquaint young law students with the working of Department of Justice by giving training in the field of research &amp;amp; referencing work, in various specialized areas of justice delivery, such as:- 1. Access to Justice (Tele-Law, Nyaya Bandhu, Legal Aid, Pro Bono Legal Services); 1. e-Courts services; 1. Fast Track Special Courts; 1. National Mission for Justice Delivery &amp;amp; Legal Reforms and; 1. CSS for Development of Infrastructure Facilities in the District and Subordinate Judiciary. &gt; **Duration &amp;amp; Timings** Duration of internship ordinarily remain for a period of one month (four weeks). Monthly internship shall start from 01.06.2023 onwards during the current financial year (FY 2024-25). The following three slots offered during the Ist phase (Summer Programme): 1. From 10.06.2024 to 09.07,2024 with last date for calling application on 05.06.2024. 1. From 10.07.2024 to 09.08.2024 with last date for calling application on 05.07,2024. 1. From 12.08.2024 to 11.09.2024 (10th and 11th August 2024 being Saturday and Sunday) with last date for calling application on 05.08.2024. &gt; **Number of Interns** The maximum number of interns to be allowed in a given monthly slots will be 10 candidates only subject to requirement of the Department. &gt; **Placement** Each selected intern shall be posted with an officer of the level of Deputy Secretary/Director/Joint Secretary/ or the O/o Secretary, Department of Justice, O/o the Minister of State, Law &amp;amp; Justice (Independent Charge) with the approval of the Competent Authority. &gt; **Attendance** For satisfactory completion inter-alia, 90% attendance is mandatory. This is a full-time internship to be attended physically. &gt; **To seek any kind of clarifications** Under Secretary (Admn.) at Tele-: 011-23072138. Email-: yadav.sanjay05@nic.in.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Honorarium",
      "The interns may be given an honorarium of \u20b9 5,000/- on completion of their internship.",
      "Certificate",
      "On satisfactory completion of the internship, a Certificate of Internship shall be awarded."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "lpaiis.json",
    "title": "Land Ports Authority Of India (LPAI) Internship Scheme",
    "description": "The Land Ports Authority of India (LPAI) is pleased to announce its annual internship program for the academic year 2024-25. This program provides a unique opportunity for students and research scholars from BBIN countries (Bhutan, India, Nepal, and Bangladesh) to gain practical experience in land port development, cross-border trade, passenger movement, and border issues. &lt;br&gt; Enhanced Collaboration: For the first time, the LPAI internship program extends invitations to talented students across the BBIN region, including India. This expansion promotes regional collaboration and facilitates the exchange of knowledge and perspectives on land port development within South Asia. ***Program Highlights:*** \u2022 Open to Students from BBIN Countries: The program welcomes qualified students from India and other BBIN countries, fostering a diverse and enriching learning environment. \u2022 Focus on Northeast India: We encourage applications from students interested in addressing land port development&amp;#39;s unique challenges and opportunities in India&amp;#39;s Northeast states. \u2022 Diverse Research Methods: Interns can engage in various research methods, including policy-oriented research, social impact assessments, and economic impact assessments. Past intern reports serve as valuable resources for future exploration. \u2022 Competitive Stipend: Selected interns will receive a monthly stipend of Rs 15,000. \u2022 Program Duration: The internship program lasts two months, with a possible extension of up to three months, subject to approval. &lt;br&gt; ***Objective and Purpose*** a) The Land Ports Authority of India (LPAI), a statutory body under the Department of Border Management, Ministry of Home Affairs, was established by the Land Ports Authority of India Act 2010, effective March 1, 2012. Empowered by Section 11 of the Act, LPAI is tasked with developing, sanitizing, and managing facilities for cross-border passengers and goods at designated points along India&amp;#39;s international borders. The Authority focuses on deploying systems that address security imperatives at the Land Ports while facilitating cross-border trade. b) Acknowledging the growing interest and potential contributions from academic institutions and young scholars, the LPAI has expanded its Internship Program to include BBIN (Bhutan, Bangladesh, India, Nepal) countries. This expansion aims to foster regional collaboration and knowledge exchange by providing opportunities for talented individuals from BBIN nations to participate in LPAI projects. c) LPAI engages with young scholars from India and neighboring BBIN countries through this extended internship program. This initiative is a two-way street, facilitating the exchange of diverse perspectives, fresh ideas, and research support from a broader regional context. It offers an avenue for young scholars to contribute to projects of national and regional significance, thereby enhancing mutual understanding and cooperation among BBIN nations while providing insights into governmental operations and projects of national importance. &gt; **Duration** 1. The minimum duration of the internship shall be eight weeks, extendable up to three months, subject to the Authority&amp;#39;s requirements and the Intern&amp;#39;s availability. 1. Extensions beyond three months will only be permitted in exceptional cases upon the recommendation of the relevant Authority and prior approval from the Secretary, LPAI &gt; **Placement** 1. Interns will be assigned to the LPAI research team and/or the respective head of the relevant Division within the Authority. 1. The internship does not constitute employment or guarantee future employment with the Authority > ***Submission of Paper*** a) The supervisor will create work plans and schedules that interns must consistently follow. b) After their internship, interns must submit a report/paper detailing their internship activities to the Research team. The Secretary/Director (Operations) at Headquarters will endorse this document to confirm successful internship completion. > ***Code of Conduct*** The Intern appointed by the Authority must adhere to the Code of Conduct of LPAI, encompassing the following guidelines: a) Upon joining, submit the Non-Disclosure Agreement (NDA) form to maintain the utmost secrecy, confidentiality, and privacy. b) Interns are required to bring their laptops/tablets for work. c) Adherence to the general rules and regulations applicable to Authority employees. d) Compliance with the Authority&#39;s confidentiality protocol, refraining from disclosing confidential information about the Authority, its work, and its policies to any individual or organization. e) Presentation of their work to academic bodies, seminars, and conferences with prior permission from the Authority while ensuring the confidentiality of Authority information. f) Clearly stating in any papers or documents written/published that the views expressed are personal and do not represent or reflect the views of the Authority. g) Adherence to advice provided by the Authority regarding interactions with third parties. h) Generally, interns may not interact with or represent the Authority to third parties unless specifically authorised based on their roles and responsibilities. i) Interns are prohibited from interacting with or representing the Authority in the media (print and electronic). j) Maintaining professional conduct in interactions with the Authority and the public. > ***Termination*** a) The Authority may discontinue the intern&#39;s engagement if it deems the intern&#39;s services are no longer required. b) The Authority reserves the right to terminate the intern&#39;s services at any time and without providing reasons, with immediate effect. c) If an intern chooses to end their engagement with the Authority, they should give a two-week prior notice. However, in some instances, particularly for interns intending to stay for more than two months, the Authority may specify a notice period of up to one month. The supervisor may occasionally waive the notice period depending on the intern&#39;s role. d) Upon termination, the intern must return any documents, equipment, or assets provided by the Authority during their tenure, including any badges or ID cards issued to the intern. e) If the Authority discovers that a terminated individual is still acting as if the Authority employs them, appropriate legal action may be taken against them. <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Token Remuneration",
      "a) Interns will receive a stipend of Rs. 15,000 per month, payable at Rs. 15,000 for each four weeks.",
      "b) Interns admitted under relaxed qualification criteria outlined in paragraph 4(b) will not receive any stipend.",
      "c) The stipend will be disbursed upon completion of the internship, submission of an accepted report by the relevant reporting authority, and endorsement by the Secretary/Director (Operations) at Headquarters.",
      "Additionally, interns will be reimbursed for economy-class airfare and Taxi Travel for their visits to the land ports. Boarding and lodging arrangements will be provided at the land port visited by the interns.",
      "Certificate of Internship",
      "Upon completion of the internship and submission of the report, certificates will be issued to interns by Headquarters, provided the report is countersigned and accepted by the competent authority."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ltfhrdphr.json",
    "title": "Long Term Fellowship under the Human Resource Development Programme for Health Research",
    "description": "\u201cLong Term Fellowship\u201d under the Human Resource Development Programme for Health Research aims to provide advanced training in India and abroad to medical and health research personnel in cutting-edge research areas related to medicine and health to create trained human resources for carrying out advanced research activities. The scheme is intended to create a pool of talented health research personnel in the country by upgrading the skills of medical students &amp;amp; faculty through specialized training in priority areas of health research in leading national and international institutions, encouraging and supporting the trainees to develop and take up research projects for addressing critical national and local health problems. &gt; **Long Term Fellowships:** - Long Term Training (6 to 12 Months) Fellowships at Indian Institutions to persons employed as regular faculty having at least three years experience in the college/institute as a regular employee. - Long Term Fellowships for Training abroad in identified priority areas (6 to 12 Months) to persons employed as regular faculty. - Long Term training (6-12 Months) to the faculties of Medical Colleges in Indian Institutes working/involved with three other approved Schemes of DHR. &gt; **Objective:** - To increase the overall availability of trained personnel for health research from medical colleges across the country through scholarships &amp;amp; fellowships for young medical doctors to take up medical and health research as a career. - To focus on the creation of a cadre of trained medical/health researchers in specific identified priority areas of health research viz., Clinical Trials; Toxicology; Good Clinical Practices (GCP); Good Laboratory Practices (GLP); Quality Control (QC) &amp;amp; QA; Genomics; Proteomics; Clinical Psychology, Geriatrics; Modern Biology; Biotechnology; Stem cells; Genetics; Drugs chemistry; and operational research etc.. - To create, support, nurture, and encourage the trainees from these medical colleges to forge linkages with other scientists from universities, research institutes, etc. to develop multidisciplinary and multi-sectoral teams necessary for addressing critical national and local health problems. &gt; **Areas of Research:** Toxicology, Genomics, Proteomics, Geriatrics, Stem cell research, Clinical Trials, Good Clinical Practices (GCP), Good Laboratory Practices (GLP), Quality Control (QC) and Quality Assurance (QA), Modern Biology, Biotechnology, Genetics, Drugs Chemistry, Operational Research, Health Informatics, Medical Ethics, Disease Modelling, Health Economics, Environmental Health, Mental Health/Clinical Psychology, Any other area recommended by the committee as per National Health Policy/ National Health Goals.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Long-Term Fellowship (6-12 months) in Indian institutes:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ma-maha.json",
    "title": "Merit Awards",
    "description": "The &quot;Merit Awards&quot; is a scheme by the Department of Social Justice &amp; Special Assistance, Govt. of Maharashtra. In this scheme, awards are given to the students with disability who rank 1st, 2nd, and 3rd among disabled students in the Secondary School Certificate (S.S.C.) and Higher Secondary Certificate (H.S.C.) in their respective divisional boards of education. Only citizens who are permanent residents of the state of Maharashtra are eligible to apply for this scheme. This scheme is 100% funded by the Govt. of Maharashtra.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "mabcstss.json",
    "title": "Maintenance Allowance To Backward Class Students Under Training In Sainik Schools",
    "description": "The scheme \u201cMaintenance Allowance to Backward Class Students Under Training in Sainik School\u201d is a Scholarship Scheme by the Social Justice and Special Assistance Department, Government of Maharashtra. VJNT and SBC students are paid maintenance so that a maximum number of students can be admitted to Sainik School with a view to seeking admission in N.D.A. The State Government introduced in 2003-04 the scheme to create self-employment for unemployed youths and students of VJNT and SBC who apply for Vocational Training. He will be given Vocational Training in Government I.T.I and undergo short-duration vocational training courses. The short-duration vocational courses will enable the youths to create their own employment in the service sector.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "manf.json",
    "title": "Maulana Azad National Fellowship For Minority Students",
    "description": "Maulana Azad National Fellowship For Minority Students was launched in 2009 by the Ministry of Minority Affairs for providing financial aid to students for their higher studies. <br> The objective of the Fellowship is to provide five year fellowships in the form of financial assistance to students from minority communities, notified by the Central Government, to pursue M. Phil and Ph.D. <br> The scheme covers all Universities/Institutions recognized by the University Grants Commission (UGC) as under : 1. Central/State Universities (including constituent and affiliated institutions) included under Section 2(f) of UGC Act, 1956 and having valid accreditation from NAAC. 1. Deemed Universities under Section 3 of UGC Act, i.e., Institution for higher education notified by Central Government to be deemed University, in consultation with UGC and having and having valid accreditation from NAAC. 1. Institution fully funded by State / Central Government and empowered to award degrees. 1. Institutions of National Importance as notified by Ministry of Human Resource Development.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The rate of fellowship for JRF and SRF is at par with the UGC fellowship, presently the rates are as follows:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "mcip.json",
    "title": "Mass Communication Internship Programme ",
    "description": "The &quot;Mass Communication Internship Programme&quot; was launched by the Department of Water Resources, River Development, and Ganga Rejuvenation, Ministry of Jal Shakti. The internship programme is short-term exposure designed to engage students in undergraduate, graduate, and postgraduate studies in the field of mass communication. The internship offers hands-on experience in media and social media activities, aiming to create awareness about the importance of water resources conservation and management. <br> > **Framework of internship:** - **First month of internship:** Learn about the department&#39;s IEC activities, Create social media content (Facebook, Instagram, Twitter, LinkedIn, YouTube), Plan social media strategy, and set targets. - **Second month of internship:** Promote services and raise awareness, Engage and build relationships with the audience, Drive traffic and establish KPIs, Draft press releases for Department events. - **Third month of internship:** Interact and research target audience, Analyze social media results, Publicize National Water Awards to attract applicants, and Draft speeches for senior officials on Department achievements. > **Duration of internship:** The internship duration is a minimum of three months, extendable up to six months on a monthly basis. <br> > **Number of students for internship:** A maximum of three interns are selected for each internship duration. <br> > **Terms &amp; Conditions for the Intern:** - Pursue the program with dedication and maintain discipline. - Maintain 90% attendance. - Attend a full-time internship physically in the main secretariat. - Arrange your own accommodation. - Work hours: 9:00 AM to 5:30 PM, unless otherwise permitted. - Follow Department rules and regulations. - Internship is not a job or employment assurance. - Adhere to Department advice on external representations. - Poor performance may result in discontinuation of the internship. - Provide prior notice if disengaging from the internship. - Library use is for reference only; borrowing is not allowed. - Maintain confidentiality and do not disclose Department information. <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "mcm-min.json",
    "title": "Merit Cum Means Based Scholarship For Students Belonging To The Minority Communities",
    "description": "A scholarship scheme by the Ministry of Minority Affairs for students from minority communities pursuing technical and professional courses at undergraduate and postgraduate levels in a listed institute. The scholarship will be awarded to the students who have secured not less than 50% marks (or equivalent grade) in the previous final examination and the annual income of their parents/guardian from all sources does not exceed \u20b92.50 lakh. The scheme aims to encourage parents from minority communities to lighten their financial burden on education and sustain their efforts to support their children to complete their education. The scheme will form the foundation for their educational attainment and provide a level playing field in the competitive employment arena. A total of 60,000 scholarships are targeted to be distributed as \u2018Fresh\u2019 Scholarships, besides, Renewal scholarships.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "mdiis.json",
    "title": "MeitY Digital India Internship Scheme",
    "description": "Ministry of Electronics and Information Technology (MeitY) has introduced an Internship scheme named &amp;quot;**Digital India Internship Scheme**&amp;quot;. It&amp;#39;s aims is to invite applications from the students with active participation in the learning process through putting into practice the knowledge acquired in the classrooms. Candidates having exposure in the area of intended internship with good academic background and having higher qualification, based on need shall be given preference. There are total 24 slots available for the Internship in 18 different types of areas. The Internship will be offered at New Delhi. The mode of internship i.e. Virtual or physical will be decided by the concerned Supervisor/mentor, based on the requirement. The minimum duration of internship shall be of two months, extendable up to three months, depending on the performance of the candidate and requirement of the Ministry.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "modrob.json",
    "title": "Modernisation And Removal Of Obsolescence",
    "description": "**Introduction** (a) MODROB scheme, one of the AICTE Quality Improvement Scheme (AQIS), intends to support the development of laboratories with appropriate equipment/ technology/ tools/ software and encourages financial contribution from the industry. This is to ensure that the practical work and project work to be carried out by students is contemporary and suits the needs of the industry. <br> (b) In order to promote a problem-solving approach among the students and staff, the institutes are encouraged to procure the equipment as per the revisions/modifications in the AICTE Model Curriculum <br> (c) The funds under this Scheme could ideally be used to create technical infrastructure for a revised curriculum. for up-gradation of equipment in existing laboratories, enhancement of performance of existing equipment, or replacement of depreciated equipment with modern equipment. <br> (d)The equipment installed can also be used to benefit the faculty/students through Continuing Education programs and also local industry through consultancy work and in training their workers. <br> (e) This scheme has three variants addressing the needs of: (i) MODROB- Aspiring Institutes (ii) MODROB- Polytechnic (iii) MODROB- Regular <br> **Objective** MODROB Scheme aims to modernize and remove obsolescence in the Laboratories/ Workshops/Computing facilities so as to maintain the quality of the practical components of technical education and promote experimental research and hands-on training.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Duration of Project",
      "The duration of the project will be two years from the date of receipt of funds in the institute\u2019s account.",
      "Limit of Funding from AICTE",
      "Funding for the sanctioned project will not exceed Rs.20 lakhs (covering recurring and non-recurring expenditures) per the proposal.",
      "Disbursement of the Funds",
      "80% of the sanctioned amount as advance to the institutions will be disbursed followed by 20% as reimbursement on submission of the Utilization Certificate and other supporting documents as specified in the terms and conditions of MODROB."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "moefccis.json",
    "title": "Forest And Climate Change Internship Scheme",
    "description": "The Ministry of Environment, Forest and Climate Change has an Internship Scheme for students. The Scheme seeks to engage students, with Graduation/Postgraduation Degrees, as well as Research Scholars, enrolled in recognized Universities / Institutions within India, or abroad, as \u201cInterns\u201d. These &amp;quot;Interns&amp;quot; shall be inducted all over the country in various Divisions/Units of the Ministry, ils Integrated Regional Offices, Autonomous, Organisations, Subordinate Offices, and ENVIS (Resource Partners &amp;amp; Hubs). These \u201cInterns\u201d, in turn, would be expected to supplement the process of analyzing within the Ministry and its other formations through the empirical collection and collation of in-house and other information. For the &amp;quot;Interns&amp;quot; the exposure to the functioning of the Ministry and its other formations may be an add-on in furthering their future interests. &lt;br&gt; &gt; **Purpose** To allow short-term exposure to &amp;quot;selected candidates&amp;quot; with different Divisions/Units of the Ministry and its other formations as interns. A list of domains/areas for which the Internship is available at Annexure-I. &lt;br&gt; &gt; **Objectives** 1. To allow young academic talent to be associated with the Ministry&amp;#39;s work for mutual benefit. 1. The &amp;quot;Interns&amp;quot; shall have an opportunity to know about the Government functioning and Regulatory and Development Policy issues and contribute to its amendment, if required, by generating inputs such as empirical analysis, briefing reports, policy papers; etc. 1. A candidate can apply for the Internship Scheme only once during the financial year. &lt;br&gt; &gt; **Period** The period of the Internship shall not exceed 3 months. &lt;br&gt; &amp;gt; **Attendance** The attendance record and the details of work shall be maintained by the Heads of the Divisions/Units; &lt;br&gt; &gt; **Training Schedule** The internship shall be conducted twice in a financial year. 1. Summer Internship 1. Winter Internship The time schedule shall be made available on the website of this Ministry from time to time.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "msssgc.json",
    "title": "CBSE Merit Scholarship Scheme For Single Girl Child",
    "description": "A scholarship scheme by the Ministry of Education for meritorious Single Girl Students, who are the only child of their parents; and have passed the CBSE Class 10th Examination with 60% or more marks and are continuing their further school education of Class 11th and 12th. The scheme is aimed to recognize the efforts of the parents in promoting education among girls and to provide encouragement to meritorious students. The rate of the scholarship shall be \u20b9500/- per month. A scholarship awarded under the scheme shall be paid for a maximum period of two years. Payment will be made through ECS/NEFT. The tuition fee should not be more than \u20b91,500/- per month during the academic year, shall be considered for the purpose. In the next two years, the total enhancement in tuition fees in such a school shall not be more than 10% of the tuition fee charged. The scholarship shall be awarded to Indian Nationals only.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The rate of the scholarship shall be Rupees Five Hundred (\u20b9500/-) per month. A Scholarship awarded under the scheme shall be paid for a maximum period of two years. Payment will be made through ECS/NEFT."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nacoip.json",
    "title": "National AIDS Control Organisation (NACO) Internship Programme",
    "description": "NACO initiated the Internship Programme in 2018 for young students who wish to engage with the Government. The internship programme envisages an opportunity for young students to get familiar with and understand the various dimensions of policy-making &amp;amp; implementation of the National AIDS Control Programme. It will serve as an exposure for the interns regarding the functioning of the Government of India. It will be mutually beneficial for the organization as well as students to have a structured internship programme under the aegis of NACO, Ministry of Health and Family Welfare. The internship programme would provide an excellent opportunity for budding scholars to familiarise themselves with the process of formulation of health policy and its implementation by the Government of India, with specific reference to the National HIV/AIDS and STD Control Programme. &lt;br&gt; The internship is offered on varied priority areas such as secondary data analysis of ICTC and PPTCT programme, MSM interventions, EID programme, primary research and data analysis on community perceptions of the HIV/AIDS Act, 2017 and Transgender Persons (Protection of Rights) Bill, 2018. The list of programmatic courses applicable for the internship at NACO is placed at Annexure II. &lt;br&gt; &amp;gt; **Number of Interns** The number of interns can vary depending on the applications and requirements of NACO. However, at any point in time, the number of interns shall not be more than 10. &amp;lt;br&amp;gt; &amp;gt; **Enrolment** Enrollment for internships shall be kept open throughout the year and offered based on the requirement of the different Programmes. &amp;lt;br&amp;gt; &amp;gt; **Duration** The internship would be for a minimum duration of 6 weeks and max. duration of 3 months, as per the prerequisites of the study programme. There shall be no bar for candidates to apply for a second internship with NACO. &amp;lt;br&amp;gt; &amp;gt; **Placement** The Interns will be placed in selected programme divisions within NACO or rotated through different divisions based on the prerequisites of the study programme. **NOTE:** The internship programme is neither a job nor any such assurance for a job in the National AIDS Control Organisation or any other Ministry/ Department in the Government of India. &lt;br&gt; &gt; **Reporting** Interns shall be expected to report to NACO, submit their joining report and work under close supervision of the concerned Head of Division (HOD). The areas available for internship at NACO are listed at Annexure III of the Scheme Guidelines. &lt;br&gt; &gt; **Duties &amp;amp; Responsibilities** The interns are expected to follow the standard schedule of activities, observe the functioning of the divisions, participate in activities, conduct data analysis &amp;amp;amp; research, write reports, undertake field visits, and any other task assigned/entrusted to them by the HOD / Reporting Officer.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Remuneration",
      "Interns will be entitled to a stipend at the rate of \u20b9 8,000 per month payable on successful completion of the Internship and submission and acceptance of their Internship reports by the Reporting Officer, and satisfactory performance certified by the HoD.",
      "NOTE: Students who discontinue the internship would not be paid any remuneration by NACO.",
      "Certificate",
      "Certificates will be issued on satisfactory completion of their internships and on submission and acceptance of the Reports.",
      "NOTE: Students who discontinue the internship would not be awarded any certificate by NACO.",
      "Boarding & Lodging",
      "No other expenses like travel costs etc. will be admissible and no claims would be entertained.",
      "Stay/Accommodation",
      "Interns coming from outside Delhi / New Delhi have to make their own arrangements for stay/ accommodation at their own expense.",
      "Logistic Support",
      "Interns will be provided with the necessary office logistics supports i.e. work space, stationery and facility for photocopying.",
      "NOTE: Interns will need to have their own laptop computers and internet connectivity."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "natthe.json",
    "title": "National Awards To Teachers (Higher Education) ",
    "description": "The purpose of the National Award to Teachers under the Department of Higher Educational Institutions is to recognize the distinctive contributions of some of the finest faculty members in the country and honor them for their dedication and hard work, which have not only improved the quality of higher education but also enriched the lives of their students. The Award seeks to recognize and honor faculty members&#39; unique and path-breaking achievements in teaching, research, institutional service, community outreach, and novelty of work in higher education. <br> > **No. of Awardees** - Fifty Awards (25 in Category II and 25 in Category III) shall be conferred annually. <br> > **Selection Process :****** The selection procedure for NTA-2023 will follow a two-step process. - Preliminary Search cum Screening Committee for initial shortlisting of candidates. - Committee of \u2018Jury\u2019 for the final section of awardees from the shortlisted candidates. <br> > **Ceremony Details** - The ceremony is held on 5th September every year. <br> > **Nominations for the award can be made by any of the following:** 1. Vice-Chancellor/Director/Principal of the institution. 1. A colleague or former faculty member of the same institution. 1. Self-nomination is not allowed. 1. Former Vice-Chancellor/Director/Principal may apply if currently teaching full-time. 1. Search committee members can nominate outstanding faculty. 1. Award Jury members cannot nominate.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nccsis.json",
    "title": "National Centre For Communications Security (NCCS) Internship Scheme",
    "description": "The National Centre for Communications Security (NCCS) Internship Scheme allows young talent to be associated with the NCCS work for mutual benefit. It will enable NCCS to interact with young scholars and to get fresh ideas and study/ research support from the field of academics. At the same time, it will provide an opportunity for young scholars to contribute to the NCCS work and have an insight into the related technical work. The opportunity enables the young population to acquire knowledge in the areas like Hardware level Security, Source Code analysis (Static and dynamic analysis at HLL, Binary Code Analysis) Crypto algorithm implementation validation and Crypto Module validation, Supply chain vulnerabilities, Run time vulnerabilities in a live network (Advanced Persistent Threats), Back door entry vulnerabilities, Identification of Intentional/ Hidden Malware in Software/ Firmware of equipment. &lt;br&gt; &gt; **Slots** 1. NCCS will assess the requirement of the interns periodically. 1. The total number of interns engaged shall not exceed 20 (inclusive of Category 1 &amp;amp; 2), at any point in time. &lt;br&gt; &gt; **Duration** **For Category 1:** The minimum duration of the internship shall be of sixty days. **For Category 2:** The minimum duration of the internship shall be of six months, extendable up to a maximum of twelve months. **NOTE:** Extension beyond six months shall be permitted, on the application of an intern duly recommended by the concerned Head of Division and with the approval of the Head of NCCS. &lt;br&gt; &gt; **Placement** 1. The interns would be attached to one of the officers in the Divisions of the NCCS. 1. An orientation workshop will be held for interns at the beginning of the internship. The work of interns will be monitored through periodic interaction with the interns. 1. The attendance record and the details of work supervision shall be maintained by the Divisions/Units in NCCS. &lt;br&gt; &gt; **Submission of Paper** The interns will be required to submit a Report/Paper on the work undertaken at the end of the internship to the respective Division. The Report shall be signed by the concerned Officer with whom the intern is attached, as an acceptance of the successful completion of the Internship.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ncessis.json",
    "title": "National Centre for Earth Science Studies Internship Scheme",
    "description": "The \u201cNational Centre for Earth Science Studies Internship\u201d scheme by the Earth System Science Organization, Ministry of Earth Sciences, provides various opportunities for school as well as college students to familiarise and/or pursue research on different branches of earth sciences. National Centre for Earth Science Studies (NCESS) is an R&amp;amp;D institution recognized for doctoral programs in science, environmental, and interdisciplinary topics, with opportunities for Ph.D. registration announced by universities. It hosts eminent scientists for scientific exchange programs and allows all campus college students to participate in the Earth Science Forum for research project presentations. &lt;br&gt; &lt;br&gt;",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Certificate of Internship: Certificates will be issued to the interns at the end of successful completion of the Internship.",
      "Note: No financial aid /stipend will be provided by this Directorate to the interns."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ndriis.json",
    "title": "NDRI Institute Scholarship For M.Sc. And Ph.d",
    "description": "**Detailed** The Scholarship will be admissible to students of Indian Nationality as defined in the Constitution of India or persons domiciled in India, irrespective of sex, race or religion. Only those students shall be eligible for the award of scholarships that are not in receipt of any other scholarship/fellowship stipend from any other source. The awardees shall be required to submit an undertaking to this effect in the prescribed form. However, students getting compensation during the course of \u201cDairy Plant Operations and Management\u201d In-plant Training shall be eligible for the award of a merit scholarship. &lt;br&gt; The scholarship will be under the Administrative control of the Joint Director/Director. &lt;br&gt; **Duration** The scholarship will be paid to all eligible master\u2019s students from the date of joining and will end on the date of submission of thesis or completion of two years for the students with four years Bachelor programme and 3 years of scholarships for students who have to undergo one-year pre-requisite course whichever is earlier. No extension is granted for any reason whatsoever. The scholarship will be paid to all eligible Doctoral students from the date of joining and will end on the date of submission of thesis or completion of three years for the students with 4+2 UG and PG programme and 4 years scholarship for students who have to undergo one-year pre-requisite course whichever is earlier. Extension for a maximum of six months can be granted on merit. An application for an extension is to be submitted by the student at least two months before the expiry of the scholarship through the Major Advisor, Advisory Committee and Head of the Division to the Joint Director. However, the students will give a seminar before the Advisory Committee regarding the progress of his/her research/project. The advisory committee will review the progress of the student thoroughly and will give specific recommendations. The Head of the Division will certify on the application that the scholar has delivered the seminar. The joint Director will be the final authority to grant or refuse the extension. No extension whatsoever for any reason will be granted beyond this period. If a student does not receive a scholarship during its tenure for a certain period due to any reason whatsoever, the extension of the scholarship in lieu of that period beyond the prescribed duration will not be granted. &lt;br&gt; **For the purpose of payment of the Scholarship the Academic year is divided into two periods as follows:** - First Period From (Covering the 1st semester) Date of joining to 31st January - Second Period From (Covering the 2nd semester) 1st February to 31st July &lt;br&gt; **Conditions For Payment Of Scholarship** **1.** (a) Students of Master\u2019s and Doctoral programmes must register for each and every prescribed course in each semester. Those who do not register for all the prescribed courses in a semester will not receive a scholarship for that period (Research will be taken as a course for this purpose). &lt;br&gt; (b) Scholarship for each preceding month for eligible students will be released only after the receipt of the Progress Report. &lt;br&gt; (c) When the name of a student is struck off from the rolls of the University for any reason whatsoever, any amount due to him/her, whether sanctioned or not, will not be paid to him/ her. &lt;br&gt; **2.** (a) Master\u2019s and Doctoral students must have obtained an aggregate of 65% marks or 6.5 grade point average out of 10.0 (in Major, Complementary and Supporting courses) during the previous semester for being eligible to receive scholarship during the next period. For each course that he/she did not sit in the examination or detained for any reason, zero marks will be taken for calculating the aggregate. In case of course(s) in which he/she fails, the actual marks obtained will be counted towards the aggregate. &lt;br&gt; (b) The Master\u2019s and Doctoral students who fail to obtain 65% marks or 6.5 grade point average out of 10.0 in aggregate but clear all the course work requirement will have to improve by re-appearing in one or more courses (where the marks obtained is below 65%) in the supplementary/ semester-end examinations so as to obtain 65% marks or 6.5 grade point average out of 10.0 in aggregate to become eligible for renewal of scholarship from the date of clearing the courses. &lt;br&gt; Further provided that in both the semesters, the cases of such of the student(s), who fail to obtain 65% marks or 6.5 Grade Point Average out of 10.0, will be reviewed by the Joint Director(A) after the declaration of result of supplementary examinations and such students\u2019 fellowship will be released from the date of clearing the course(s). &lt;br&gt; (c) In case of Master\u2019s students having three year degree programme and offering only prerequisite courses during the year of admission, must have obtained an aggregate of 65% marks or 6.5 grade point average out of 10.0 during the previous semester for being eligible to receive scholarship during the next period. For each course that he/she did not sit in the examination or was detained for any reason, zero marks will be taken for calculating the aggregate. In case of courses in which he/she fails, the actual marks obtained will b counted towards the aggregate. &lt;br&gt; (d) The aggregate of 64.5% and above will be considered as 65% for the purpose of calculating the aggregate for the scholarship and not for any other purpose whatsoever. &lt;br&gt; (e) For the continuation of scholarship of SC/ST students, who obtain less than 65% marks or 6.5 grade point average out of 10.0, the Joint Director/ Director/Competent Authority may relax up to a maximum of 5% after fully satisfying himself about the justification of each individual case. This relaxation will however be allowed only once during the academic programme of a SC/ST student. &lt;br&gt; **3.** Scholarship for each period will be released only after declaration of results of the previous semester. &lt;br&gt; **4.** Last one full month\u2019s scholarship will be released only after the student submits the thesis/dissertation. &lt;br&gt; **Conduct Probation** The amount of scholarship shall not be paid to the student during the period of Conduct Probation. &lt;br&gt; **Termination of Scholarship** The scholarship will be terminated on the date: - The student ceases to be on the rolls of NDRI. - Student completes his/her study, which includes final viva-voce. - The sanction expires. - Under exceptional circumstances, if in the opinion of the Joint Director, the student is found to be negligent in his/her work or guilty of unbecoming conduct, with or without notice. &lt;br&gt; **5. Students Offered Scholarship Under A Collaborative Programme** No Scholarship shall be admissible to the student from the date he/she is relieved from the University to avail the fellowship/scholarship awarded under the collaborative programme and it will be paid only from the date he/she returns and rejoins the Institute. The period spent under collaborative programme will count towards the total period for which the scholarship has been awarded. &lt;br&gt; **6 Rules Governing The Contingency Grant** (a) The Master\u2019s and Doctoral students on rolls will be eligible for a contingency grant not exceeding an amount of Rs. 12000/- in case of Master\u2019s and Rs. 30000/- in case of Doctoral for the duration of the course in order to meet certain genuine expenses connected with their studies. (b) Contingency amount will be paid to students who do not receive scholarships for any reason, provided they are on the rolls of NDRI and continuing their studies at NDRI.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "1. Value",
      "2. Rules Governing The Contingency Grant",
      "(a) The Master\u2019s and Doctoral students on rolls will be eligible for a contingency grant not exceeding an amount of Rs. 12000/- in case of Master\u2019s and Rs. 30000/- in case of Doctoral for the duration of the course in order to meet certain genuine expenses connected with their studies.",
      "(b) Contingency amount will be paid to students who do not receive scholarships for any reason, provided they are on the rolls of NDRI and continuing their studies at NDRI."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nfandshests.json",
    "title": "National Fellowship & Scholarship For Higher Education Of Scheduled Tribe (ST) Students",
    "description": "**Part-A: Fellowship Scheme** The National Fellowship Scheme is a Central Sector Scheme by the Ministry of Tribal Affairs with the objective to provide financial assistance to meritorious students from Scheduled Tribes to enable them to pursue higher education (M.Phil or Ph.D.) after completing a post-graduate degree (Master&amp;#39;s degree). **Salient Features of the Scheme -** Fellowship under the Scheme will be for pursuing MPhil, Ph.D. by those ST students who have passed the Post-graduation/Master&amp;#39;s Degree examination. **Note: -** 1. In case, under the national education policy, there is any change in the type of course, the same will be incorporated in the guidelines. 1. However, the scholars already covered under the scheme prior to 2021-22, will be allowed to complete the course as per the existing scheme. **Part-B: Scholarship Scheme** The National Scholarship Scheme is a Central Sector Scheme by the Ministry of Tribal Affairs with the objective to encourage meritorious students from Scheduled Tribes to pursue courses at the Graduate and Post Graduate levels in premier institutes identified by the Ministry in professional fields such as Management, Medicine/Science, Engineering and Technology, Humanities, Law and Social Science, etc. **Salient Features of the Scheme -** This is a Central Sector Scheme, fully funded by the Ministry of Tribal Affairs, and provides 100% funding to Scheduled Tribe (ST) students in courses and institutes approved and notified by the Ministry of Tribal Affairs. The scholarship once awarded will continue till completion of the course tenure, subject to satisfactory performance of the student, as assessed by the institute.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nfos.json",
    "title": "National Fellowship For OBC Students",
    "description": "**Background** The scheme &quot;National Fellowship for OBC Students&quot; was launched by the University Grants Commission (UGC), Department of Higher Education (DoHE) during the financial year 2014-15 to increase the opportunities for the students of Other Backward Classes (OBCs) to pursue higher education leading to acquiring degrees such as M.Phil. and Ph.D. The scheme aims at providing financial assistance to OBC students in obtaining quality higher education leading to degrees such as M.Phil. and Ph.D. in universities, research institutions, and scientific institutions. This will not only enable them to be eligible for employment to the posts of Lecturers lying vacant in various colleges and universities but will also equip them to effectively take advantage of the growing opportunities at the national and international level in the context of the new economic order. <br> **Scope of the Scheme** The scheme is designed to provide a total number of 300 Junior Research Fellowships per year from the year 2014-15 and 300 Senior Research Fellowships from 2016-17 to Other Backward Class (OBC) students. The number of intake of JRF has been enhanced from 300 to 1000 per year onwards to undertake advanced studies and research leading to M.Phil./Ph.D. Degrees, who have qualified in the following tests: <br> i. National Eligibility Test ) \u2013 Junior Research Fellowship (NET-JRF) of UGC (for Humanities/Social Sciences) or ii. UGC-Council of Scientific and Industrial Research (UGC-CSIR) NET-JRF Joint Test (for Science) <br> The scheme covers all universities/institutions recognized by the University Grants Commission (UGC) and is implemented by the UGC itself on the pattern of the scheme of UGC Fellowship being awarded to research students pursuing M.Phil. and Ph.D. These 1000 slots will be over and above the number of OBC students selected under the normal reservation policy of the Government for UGC Fellowship.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Number of Slots for Fellowship -",
      "Duration of Fellowship -",
      "Name of the Course: M.Phil.",
      "Maximum Duration (Years): 2",
      "Admissibility of JRF (Years): 2",
      "Admissibility of SRF (Years): Nil",
      "Name of the Course: Ph.D.",
      "Maximum Duration (Years): 5",
      "Admissibility of JRF (Years): 2",
      "Admissibility of SRF (Years): Remaining 3 years",
      "Name of the Course: M.Phil. + Ph.D.",
      "Maximum Duration (Years): 5",
      "Admissibility of JRF (Years): 2",
      "Admissibility of SRF (Years): Remaining 3 years",
      "Rate of Fellowship -",
      "The rates of fellowship for JRF and SRF will be at par with the UGC Fellowship (w.e.f 01.01.2019).",
      "Presently these rates are as follows:",
      "Fellowship in Science, Humanities, and Social Science",
      "@ \u20b9 31,000/- p.m. for initial two years (JRF)",
      "@ \u20b9 35,000/- pm. for remaining tenure (SRF)",
      "Fellowship in Engineering & Technology",
      "@ \u20b9 31,000/- p.m. for initial two years (JRF)",
      "@ \u20b9 35,000/- pm. for remaining tenure (SRF)",
      "Contingency for Humanities & Social Sciences",
      "@ \u20b9 10,000/- p.a. for initial two years",
      "@ \u20b9 20,500/- p.a. for remaining tenure",
      "Contingency for Sciences, Engineering & Technology",
      "@ \u20b9 12,000/- p.a. for initial two years",
      "@ \u20b9 25,000/- p.a. for remaining tenure",
      "Escorts/Reader assistance (All subjects)",
      "@ \u20b9 2,000/- p.m. in cases of physically and visually handicapped candidates",
      "House Rent Allowance",
      "HRA will be on the UGC pattern and will be payable to those students who are not provided with hostel accommodation. In case hostel accommodation offered by the University/institution is refused, the student will forfeit his claim of HRA, and other facilities such as medical facilities, and leave including maternity leave will be governed as per the guidelines of the UGC in case of their fellowship program."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ngaossandvtd.json",
    "title": "Non-Governmental Aided Organization (Special Schools And Vocational Training Centre) For Disabled",
    "description": "The &quot;Non-Governmental Aided Organization (Special Schools and Vocational Training Centre) for Disabled&quot; is a scheme by the Department of Social Justice &amp; Special Assistance, Govt. of Maharashtra. In this scheme, Special Education is provided to children with disability who are below the age of 18 years. The child should be enrolled in a special school run by a Non-Governmental Aided Organization. Vocational Training is given to special children above the age of 18 years. Only citizens who are permanent residents of the state of Maharashtra are eligible to apply for this scheme. This scheme is 100% funded by the Govt. of Maharashtra.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nhdpsc.json",
    "title": "National Handloom Development Programme (NHDP): Scholarship Component",
    "description": "The National Handloom Development Programme (NHDP) Scholarship Component, running from 2021-22 to 2025-26, aims to bolster India&amp;#39;s handloom sector and improve the lives of handloom weavers. It particularly targets the children of these weavers, offering financial assistance of up to \u20b92,00,000 annually. This support covers tuition, admission, and examination fees at recognized textile institutions. Additionally, beneficiaries receive a monthly stipend of \u20b95,000. The scheme&amp;#39;s primary objective is to empower weavers&amp;#39; families through education, ensuring the sustainable growth of the handloom industry, thus enhancing their socio-economic conditions and contributing to India&amp;#39;s cultural heritage.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Financial Coverage: The scholarship covers tuition fees, admission fees, examination fees, and other annual fees/charges as required by the academic institution.",
      "Stipend: In addition to the academic fees, eligible candidates will receive a stipend of \u20b95,000 per month, subject to a maximum of \u20b92,00,000 per child per annum or actuals, whichever is less.",
      "Direct Benefit Transfer (DBT): Funds will be directly transferred to the bank account of the concerned handloom weaver/worker or their children through the Direct Benefit Transfer (DBT) system.",
      "Payment Schedule"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nielitip.json",
    "title": "NIELIT Internship Programme",
    "description": "The Internship Programme by the National Institute of Electronics &amp;amp; Information Technology (NIELIT) is an opportunity for a student to secure first-hand and practical work experience under the guidance of qualified and experienced Supervisors/Mentors. It also aims at active participation in the learning process through experimentation and putting into practice the knowledge acquired in the classrooms. &lt;br&gt; &gt; **Duration** The minimum duration of the internship shall be as defined or prescribed in the curriculum and endorsed by the Sponsoring institution. Duration can be a maximum of 6 months and shall not be extendable beyond 6 months in any case. An intern can avail internship only once with NIELIT. &lt;br&gt; &gt; **Number of Interns** A maximum of five (05) interns shall be engaged for the S&amp;amp;T section at NIELIT Haridwar in a financial year. A maximum of five (05) interns shall be engaged for non - the S&amp;amp;T section at NIELIT Haridwar in a financial year. &lt;br&gt; &gt; **Confidentiality Protocol** The Intern shall follow the confidentiality protocol of NIELIT Haridwar and shall not reveal to any person or organization confidential information relating to NIELIT, its work and its policies. &lt;br&gt; &gt; **Placement** 1. Every batch of interns or individual interns, as the case may be, will have a Scientific/Technical Project Supervisor/Mentor to be appointed by the Wing/Section Head of NIELIT Haridwar. 1. The internship is neither an employment nor an assurance of employment. &lt;br&gt; &gt; **Attendance** A minimum of 80% attendance is required to be maintained in a month, failing which a Stipend and certificate of Internship shall not be given to the Intern.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Stipend",
      "The stipend shall be paid after the completion of the Internship on submission of a report duly accepted by NIELIT Haridwar.",
      "The stipend shall be paid in non-cash mode only via Cheque/NEFT/RTGS etc.",
      "Certificate",
      "Certificates will be issued by NIELIT Haridwar to the interns on completion of the Internship and submission of the Report duly countersigned by the supervisor/mentor and accepted by the Wing/Section Head."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nift.json",
    "title": "AICTE-National Initiative for Training of Technical Teachers (for Inductee Teachers) Scheme",
    "description": "In order to train the Inductee Teachers in AICTE approved / recognised institutions, this National Initiative for Technical Teachers Training (for Inductee Teachers) has been launched in 2020. It imparts training to the Inductee Teachers in three phases. The first phase of the training programme for the Inductee Teachers shall be conducted in Massive Open Online Courses (MOOCs) mode for eight modules on the SWAYAM platform through the NITTT portal followed by one-month industrial internship (second phase) and then mentor based training (third phase). **Purpose:** The purpose of this scheme is to provide a framework for training of Inductee Teachers in AICTE approved institutions.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "niti-i.json",
    "title": "NITI Internship Scheme",
    "description": "An Internship Scheme named &amp;quot;**NITI Internship Scheme**&amp;quot; seeks to engage students pursuing Under Graduate / Graduate / Post Graduate Degrees or are Research Scholars enrolled in recognized University/ Institution within India or abroad, as &amp;quot;**interns**&amp;quot;. These &amp;#39;interns&amp;quot; shall be given exposure to various Verticals/ Divisions/Units within NITI Aayog and would be expected to supplement the process of analysis within NITI Aayog through empirical collection and collation of in-house and other information. The internship will be on unpaid basis. This will allow short term exposure of &amp;quot;selected candidates&amp;quot; with the different Verticals/Divisions/Units of NITI Aayog, Government of India as &amp;#39;Interns&amp;quot;. Following are the domains/areas for which Internship is invited:- 1. Agriculture 1. Data Management and Analysis 1. Economics 1. Education/Human Resources Development 1. Energy Sector 1. Foreign Trade / Commerce 1. Governance 1. Health , Nutrition, Women &amp;amp; Child Development 1. Industry 1. Infrastructure connectivity 1. Mass Communications and Social Media 1. Mining Sector 1. Natural Resources, Environment &amp;amp; Forests 1. Programme Monitoring and Evaluation 1. Project appraisal and management. 1. Public Finances/Budget 1. Public Private Partnership 1. Rural Development and SDGs 1. Science and Technology 1. Skill Development &amp;amp; Employment 1. Social justice and empowerment 1. Sports and Youth development. 1. Tourism and culture 1. Urbanization / smart city. 1. Water Resources. The period of Internship shall be at least six weeks but not exceeding six months. Interns will be required to have their own laptops. NITI Aayog shall provide them working space, internet facility and other necessities as deemed fit by the concerned Heads. **Objectives** The Scheme has the following objectives: 1. To allow young academic talent to be associated with the NITI Aayog&amp;#39;s work for mutual benefit. 1. The &amp;quot;intern&amp;quot; shall have an opportunity to know about the Government functioning and Developmental Policy issues in Government of India and contribute to the Policy formulation by generating policy inputs such as empirical analysis, briefing reports, policy papers, etc.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nmmss.json",
    "title": "National Means-Cum-Merit Scholarship Scheme",
    "description": "A scholarship scheme by the Department of School Education &amp; Literacy, Ministry of Education wherein 1,00,000 scholarships is offered to the gifted or meritorious students whose parental income is not more than \u20b93,50,000/- per annum from all sources at the time of selection of awardees for a scholarship. Each State /UT has a fixed quota of scholarships for the concerned age group of class 7th and 8th. The scheme will provide reservations to different categories of students as per the State/UT norms; as different States/UTs have their own norms of reservation. The scholarship is being implemented since 2008 with an objective to award scholarships to meritorious students of economically weaker sections to arrest their drop out at class 8th and encourage them to continue their studies at the secondary stage. The scheme has been approved for continuation for another 5 years during the period of the 15th Finance Commission cycle from 2021-22 to 2025-26.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nos-sc.json",
    "title": "National Overseas Scholarship For Scheduled Caste Etc. Candidates",
    "description": "A scholarship scheme by Ministry of Social Justice &amp; Empowerment for regular, full-time students from Scheduled Castes, Denotified Nomadic and Semi Nomadic Tribes, Landless Agricultural Labourers and Traditional Artisans; to obtain higher education viz., Master degree or Ph.D courses by studying abroad in Institutions/Universities accredited by the Government/authorized body of that country in any field of study.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The awardees will claim reimbursement of airfare from their respective Indian Mission abroad after joining the University and providing a joining report from the University.",
      "The conditions will be effective from 1st Jan 2022.",
      "Return tickets will be booked by Indian Mission abroad as per Clause 11(iii) of the scheme guidelines."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nos-swd.json",
    "title": "National Overseas Scholarship For Students With Disabilities",
    "description": "A scholarship scheme by the Ministry of Social Justice &amp; Empowerment for regular, full-time students with disabilities to obtain higher education viz., Master&#39;s degree, or Ph.D. courses from foreign universities, in one of the specified fields of study. <br> The students with the specified disabilities defined in Schedule of the &quot;Rights of Persons with Disabilities Act, 2016&quot; will be eligible under this scheme. This includes persons with visual, hearing, speech, loco-motor, mental retardation, and other disabilities. NOS is implemented offline by the DEPwD. <br> At times SwDs are deprived of harnessing their latent skills and thereby miss the opportunity. This scheme aims to support SwDs to study further in order to prepare themselves to earn their livelihood and to find a dignified place for themselves in the society as they face several barriers physical, financial, psychological, mental in pursuing studies and living with dignity. <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "npcsip.json",
    "title": "NPC Students Internship Program",
    "description": "The National Productivity Council (NPC) of the Department of Industrial Policy &amp;amp; Promotion Ministry of Commerce &amp;amp; Industry provides internship training to students pursuing graduation and post-graduation. The interns shall be given exposure to related interventions being activities undertaken by NPC\u2019s which will provide opportunities to learn and implement new concepts as well as develop new skills and gain a deeper understanding of IT-enabled interventions through the hands-on application of the knowledge students learned during their course curriculum. &lt;br&gt; &gt; **Areas** Industrial Engineering (IE), Environment Management(EN), Energy Management(EM), Agribusiness Services(AB), Economic Services(ES), Information Technology (IT) and Advanced Manufacturing &amp;amp; Industry 4.0. &lt;br&gt; &gt; **Duration** 1. The internship duration shall be for a period of two months. 1. The internship program shall be effective from the first week of June. 1. The internship period may be extendable, if required, on an individual case-to-case basis for a further mutually agreed duration.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Certificate",
      "The interns will be issued an internship completion certificate upon successful completion and submission of the full project report.",
      "Logistics & Support",
      "NPC shall provide them with working space with an internet facility and other necessities as deemed fit by the concerned reporting authorities.",
      "NOTE: The Interns will be required to bring their own laptops.",
      "Boarding & Lodging",
      "The Interns will be required to make their own arrangements towards transportation.",
      "Remuneration",
      "The selected interns shall not be entitled to any financial remuneration/stipend during their internship period.",
      "No payment towards a stipend, transportation etc. shall be paid to the interns by NPC."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nrefhrdnre.json",
    "title": "National Renewable Energy Fellowship Scheme of the Human Resource Development Programme in New and Renewable Energy",
    "description": "The objective of the &amp;quot;National Renewable Energy Fellowship Scheme&amp;quot; Component of the Human Resource Development Programme in New and Renewable Energy, Human Resources Development Division, Ministry of New and Renewable Energy, is to institutionalize renewable energy education and training to meet the requirement of qualified and trained manpower in the country. The HRD Programme has been with a total financial outlay of Rs. 200 crore for the period of FY 2021-22 to 2025-26. &lt;br&gt; The &amp;quot;National Renewable Energy Fellowship Scheme&amp;quot; comes under the &amp;quot;Fellowships for Higher Studies and Research in Renewable Energy&amp;quot; Component of the Programme. Through this scheme, fellowships will be provided for pursuing higher studies/ advanced research in renewable energy. The fellowship scheme is directly aligned with the overall requirement of renewable energy, research thrust areas identified by MNRE, identification of technology readiness levels and focus on commercialization. The technology areas will not be of a generic nature but should involve frontier-edge research in technology development with a focused approach. &lt;br&gt; ##### **Number of Fellowships** 150 new fellowships/scholarships in the field of renewable energy every year in addition to existing fellowships awarded since 2017-21 (which will continue till their entire tenure). The total number of fellowships to be supported during the period is given below: &lt;br&gt; **Course: M.Tech.** **Duration of Course/ Fellowship/ Scholarship (Years): 2** Intake Every Year: 35 For Five Years: 175 Fellowship (1st Year, 2021-22): 35 Fellowship (2nd Year, 2022-23): 35+35 Fellowship (3rd Year, 2023-24): 35+35 Fellowship (4th Year, 2024-25): 35+35 Fellowship (5th Year, 2025-26): 35+35 &lt;br&gt; **Course: M.Sc.** **Duration of Course/ Fellowship/ Scholarship (Years): 2** Intake Every Year: 10 For Five Years: 50 Fellowship (1st Year, 2021-22): 10 Fellowship (2nd Year, 2022-23): 10+10 Fellowship (3rd Year, 2023-24): 10+10 Fellowship (4th Year, 2024-25): 10+10 Fellowship (5th Year, 2025-26): 10+10 &lt;br&gt; **NOTE:** The fellowship provided/sanctioned for M.Tech / M.Sc (2 yr course) during a given year will comprise the number sanctioned during that year plus the continued from the previous year. For example, in M. Tech (2-year course), if fellowship in the year 2022-23 is sanctioned x no and from the previous year 2021-22 y no. has continued, so total fellowship during 2022-23 would be X+Y. The fellowship duration of the course for a student should not exceed 2 yrs. &lt;br&gt; **Course: JRF** **Duration of Course/ Fellowship/ Scholarship (Years): 2+3** Intake Every Year: 20 For Five Years: 100 Fellowship (1st Year, 2021-22): 20 Fellowship (2nd Year, 2022-23): 40 Fellowship (3rd Year, 2023-24): 60 Fellowship (4th Year, 2024-25): 80 Fellowship (5th Year, 2025-26): 100 &lt;br&gt; **NOTE:** JRF will lead to PHD degree (2 yrs JRF+ 3 yrs SRF) not exceeding 5 yrs. Therefore, fellowship would be provided to a student, who enters at JRF level and completes the course up to PHD i.e. maximum of 5 yrs (2 yrs for JRF +3 yrs for SRF). &lt;br&gt; **Course: SRF** **Duration of Course/ Fellowship/ Scholarship (Years): 3** Intake Every Year: 5 For Five Years: 25 Fellowship (1st Year, 2021-22): 5 Fellowship (2nd Year, 2022-23): 10 Fellowship (3rd Year, 2023-24): 15 Fellowship (4th Year, 2024-25): 15 Fellowship (5th Year, 2025-26): 15 &lt;br&gt; **NOTE:** This is a direct route for considering fellowship at the entry-level SRF for attaining a PhD not exceeding 3 yrs. &lt;br&gt; **Course: RA/PDF** **Duration of Course/ Fellowship/ Scholarship (Years): 3** Intake Every Year: 5 For Five Years: 25 Fellowship (1st Year, 2021-22): 5 Fellowship (2nd Year, 2022-23): 10 Fellowship (3rd Year, 2023-24): 15 Fellowship (4th Year, 2024-25): 15 Fellowship (5th Year, 2025-26): 15 &lt;br&gt; **NOTE:** RA/PDF is post-doctoral 3-year research. &lt;br&gt; **TOTAL** **Intake Every Year: 75** **For Five Years: 375** Fellowship (1st Year, 2021-22): 75 Fellowship (2nd Year, 2022-23): 150 Fellowship (3rd Year, 2023-24): 180 Fellowship (4th Year, 2024-25): 200 Fellowship (5th Year, 2025-26): 220 &lt;br&gt; **NOTE 1:** Liability for fellowships sanctioned from 2022-23 onwards will spill over beyond the scheme period as per their fellowship duration. **NOTE 2:** The principle of providing fellowships would be the same in each category. **NOTE 3:** The number of fellowships in each of the categories above is interchangeable which will depend on no. of applications received quality of research work proposed demand from the Industry etc.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Funding Pattern",
      "JRF (Junior Research Fellow)",
      "Fellowship: \u20b931,000 per month",
      "HRA (House Rent Allowance): As per Central Government Norms",
      "Contingency: \u20b920,000 per annum",
      "Duration: 2 Years",
      "SRF (Senior Research Fellow)",
      "Fellowship: \u20b935,000 per month",
      "HRA: As per Central Government Norms",
      "Contingency: As per Central Government Norms",
      "Duration: 3 Years",
      "PDF/RA (Post-Doctoral Fellow/Research Associate)",
      "I - Fellowship: \u20b947,000 per month",
      "II - Fellowship: \u20b949,000 per month",
      "III - Fellowship: \u20b954,000 per month",
      "HRA: As per Central Government Norms",
      "Contingency: As per Central Government Norms",
      "Duration: 3 Years",
      "Master of Technology (M.Tech) and Master of Science (M.Sc.)",
      "Fellowship: \u20b912,400 per month",
      "HRA: Not Applicable",
      "Contingency: Not Applicable",
      "Duration: 20-24 Months (as per Institute Norms)",
      "M.Sc (Renewable Energy)",
      "Fellowship: \u20b94,000 per month",
      "HRA: Not Applicable",
      "Contingency: Not Applicable",
      "Duration: 24 Months (as per Institute Norms)",
      "NOTE: These fellowship rates are subject to revision according to the guidelines set by the Council of Scientific and Industrial Research (CSIR), All India Council for Technical Education (AICTE), and the Department of Science and Technology (DST).",
      "Payment Schedule",
      "These fellowships will come into effect from the Date of Joining of the candidates. The Institute/University will keep the Ministry appraised about their selection process.",
      "Mode of Disbursal",
      "Fellowships will be disbursed on a monthly basis through beneficiary Bank Accounts. Monthly disbursement of fellowship will be done by the ministry through DBT mode on receipt of continuation/ attendance from the host institutions."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nreis.json",
    "title": "National Renewable Energy Internship Scheme",
    "description": "The &amp;quot;National Renewable Energy Internship (NREI) Scheme&amp;quot; by the Ministry of New and Renewable Energy (MNRE) provides internship opportunities to facilitate students pursuing undergraduate/graduate/post-graduate degrees or research scholars enrolled in recognized institutes/universities within India or abroad, as \u201cInterns\u201d. The students of various Engineering, Science, Management, law and other streams may undertake internships in the Ministry and in organizations under its aegis to understand various activities of the Ministry to become Researchers/Managers in the renewable energy area. These interns will be attached to the senior-level officers of the Ministry in various Programme Divisions. These interns can work for a period of two months to six months. The scheme also provides opportunities to personnel engaged in projects related to policy research/promotion/demonstration and deployment of renewable energy in national and international research/institutes and financial institutions to work as Interns in the Ministry /its organisations. &lt;br&gt; &gt; **Purpose** The &amp;quot;Interns&amp;quot; shall have an opportunity to learn about the Ministry\u2019s functioning, programmes and policy, and issues in Renewable Energy and contribute to generating inputs such as analysis, technical reports/ technology advancement/ project reports/policy papers, etc. for the furtherance of the objectives of this Ministry. &lt;br&gt; &gt; **Period** The internship is available twice a year based on the MNRE requirement. &lt;br&gt; &gt; **Number** A maximum of 20 interns per year. &lt;br&gt; &gt; **Duration** Will be from two to six months to be counted from the day of the start of the internship. No intern would be allowed to repeat or extend the internship.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Stipend",
      "A stipend amount of \u20b9 15,000/- per month will be provided for physical internships only.",
      "NOTE: For virtual internships, the stipend will not be provided.",
      "Certificate of Internship",
      "Certificates will be issued to the interns on satisfactory completion of their internship and evaluation of their Report/Paper by the concerned.",
      "Logistic Support",
      "MNRE shall provide them with internet facilities and other necessities as deemed fit by the concerned Heads for physical internship.",
      "NOTE: Interns will be required to have their own Laptops. They shall also make their own lodging and boarding arrangements."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ns-icarif.json",
    "title": "Netaji Subhas - ICAR International Fellowship",
    "description": "\u201cNetaji Subhas - ICAR International Fellowship (NS-ICAR IF)\u201d is a Fellowship Scheme by the Indian Council of Agricultural Research (ICAR), Department of Agricultural Research and Education (DARE), Ministry of Agriculture &amp; Farmers Welfare. The objective is to develop competent human resource that are trained in the identified best laboratories in the world (for Indian candidates) and similarly expose overseas candidates to the best Indian Agricultural Universities (AUs) in the ICAR-AU system for creating a pool of scientist-envoys for enhanced future co-operation. <br> **Objectives:** In its continued efforts towards enhancing and sustaining the standards, quality and relevance of higher agricultural education in the country, ICAR has instituted International Fellowships with dual purpose of: (i) human resource development in cutting edge technologies, and (ii) demonstrating the strength of Indian agricultural system abroad. <br> The fellowships are available to support Indian/ Overseas nationals for pursuing doctoral degree in agriculture and allied sciences, in the identified priority areas, to the: 1. Indian candidates for study abroad in the identified overseas Universities/Institutions having strong research and teaching capabilities, and 2. Overseas candidates for study in the best Indian AUs in the ICAR-AUs system.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Amount of Fellowship:",
      "1. To-and-fro, economy class air ticket for international travel, by the shortest route, from the airport, nearest to the residence/ workplace of the candidate to the airport, nearest to the destination University in respect of both Indian and Overseas candidates (Air tickets to be provided by the Council).",
      "2. The overseas fellows will be entitled for economy-class-travel cost reimbursement from port of arrival in India to the destination University in India and back.",
      "3. For Indian candidates, the cost on travel from place of residence/work to the port of departure in India and from port of arrival to the destination University overseas will be met by the fellows themselves or by their sponsoring organization.",
      "4. Amount payable to the International fellowship candidates:",
      "a) Ph.D.: Indian fellows going abroad",
      "Amount not exceeding: US$ 2,000/- per month",
      "Lump-sum payments towards contingent and preparatory expenses: US $ 1,000/- per year",
      "b) Ph.D.: Overseas fellows in India",
      "Amount not exceeding: INR 40,000/- per month",
      "Lump-sum payments towards contingent and preparatory expenses: INR 25,000/- per year",
      "5. The fellowship amount for the first six months, as first installment, will be released by the Council to the fellow through government notified/ approved bank to be deposited in the bank account of the fellow on receiving his/ her acceptance for the fellowship and admission letter received from the host University.",
      "6. Thereafter, the amount of fellowship will be released to the fellow, every six months, after receiving the academic progress report from the fellow duly certified by the concerned advisor/ supervisor/ head of institution.",
      "7. The first installment to the Indian fellow will be paid in Indian Rupees only.",
      "8. The fellow will meet all other costs including medical insurance etc. from the above fellowship or from his/ her own resources.",
      "9. During the tenure of fellowship, an in-service fellow may continue to receive his/her salary, types of leave and benefits etc. from the parent organization as per rules.",
      "Tenure of Fellowship:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nsat.json",
    "title": "National Scheme of Apprenticeship Training",
    "description": "&quot;National Scheme of Apprenticeship Training&quot; of the Department of Higher Education, Ministry of Education is overseen by four Regional Boards of Apprenticeship/Practical (BOATs/BOPT) in Mumbai, Kanpur, Chennai, and Kolkata. The scheme offers practical training to graduate engineers, diploma holders (Technicians), and 10+2 Vocational pass-outs in approximately 10,000 industrial establishments. This program operates in compliance with guidelines established by the Central Apprenticeship Council (CAC), a statutory body created under the Apprentices Act, 1961. The primary goal is to bridge the gap in practical experience for fresh Graduate Engineers, Diploma holders, and 10+2 Vocational pass-outs. The apprentices undergo a one-year training period, receiving a monthly stipend shared equally between the Central Government and the Employer.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "1. The apprentices undergo a one-year Apprenticeship Training period.",
      "2. Apprentices receive a monthly stipend during their training.",
      "3. The stipend is shared equally between the Central Government and the employer, with the employer initially paying the full stipend and later claiming 50% reimbursement from the Central Government through the respective Boards of Apprenticeship/Practical (BOATs/BOPT)."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nsfpgs.json",
    "title": "National Scholarship For Post Graduate Studies",
    "description": "The National Scholarship for Post-Graduate Studies (NSPG) scheme was established by the Ministry of Education, Government of India. The scheme was initially launched with the aim of providing financial assistance to meritorious students from economically weaker sections of society to pursue postgraduate studies in India.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nsigse.json",
    "title": "National Scheme Of Incentive To Girls For Secondary Education",
    "description": "The National Scheme of Incentive to Girls for Secondary Education promotes the girl child&#39;s enrolment of 14-18 years age group at secondary stage, who passes class 8th and subsequently drops out for various socio-economic reasons. The proposed scheme is further intended to retain such girl children up to class 12th. In the year 2004-05, the dropout rate of girls from classes 1st to 8th was about 50.8%. For classes 1st to 10th the dropout rate of girls was about 64% in the same year. Hence, only 36% of the country&#39;s girl students could be retained up to class 10th. This is the combined result of several socio-economic factors, but a major contributor is no doubt the inability of the parents to afford the cost of education of the girl child.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "A sum of \u20b93000/- (Rupees three thousand only) would be deposited under term deposit/ fixed deposit in a public sector bank or in a post office in the name of every eligible girl child. The term/ period of the deposit may be counted from the date of deposit to the date on which the girl child attains the age of 18 years. No premature withdrawal will be allowed."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nssfp.json",
    "title": "National Solar Science Fellowship Programme",
    "description": "The \u201cNational Solar Science Fellowship Programme\u201d of the Ministry of New &amp;amp; Renewable Energy was launched in February 2011. The programme is meant for an Indian Scientist desirous of working in the forefront areas of solar energy science, engineering, and technology with a focus on science, technology, and product development in collaboration with selected prestigious institutions in India. The aim of the National Solar Science Fellowship Programme is to provide a platform to top quality scientists and engineers in the area of solar energy research, to use and expand the resources available at the identified schools/ institutions in the country and abroad to address the complex problems of solar energy utilization for various end uses including power generation. **Fellowship Management Committee:** A Fellowship Management Committee will be constituted by the Ministry under the Chairmanship of Secretary, MNRE with eminent scientists as members and scientist-in-charge (HRD) as convener. The Fellowship Management Committee will decide the areas of research to be undertaken under this programme. The Committee will also be recommending the institutions for taking part in the Fellowship Programme. The expert members of the Committee will have a duration of three years. **Number of Fellowships:** The total number of Fellowships at any point of time will be limited to 10 only. However, only three fellows will be selected during the first year of the launch of the Programme. **Duration of Fellowship:** Duration of the Fellowship will be initially for two years which may be extended for another three years on year to year basis depending upon the progress of the work done by the Fellow. **Commencement of Programme:** The National Solar Science Fellows will form a community of researchers engaged in frontal areas of solar energy by intellectual curiosity, top-quality scholarship, and drive to understand and find solutions to the application of solar energy and find solutions to the energy security challenges facing the country today. Through this programme, they will be benefiting from all that the Government has to offer, and in turn, benefit the Government in finding solutions to the technological problems of solar energy and their application on the field leading to the visible impact of solar energy in the energy sector of the country.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nts-pg.json",
    "title": "National Talent Scholarship Postgraduate",
    "description": "- National Talent Scholarship (NTS) was launched by the Indian Council of Agricultural Research for students pursuing a master&#39;s degree program in an ICAR-recognized agricultural university located outside of his/her state of domicile and duly funded under the planning scheme \u201cStrengthening and Development of Higher Agricultural Education in India&quot; of the Education Division of the ICAR. The amount of the scholarship is \u20b9 3000/- per month for a Master&#39;s (Post Graduate). The scholarship will be awarded initially for a period of one year from the date the student actually takes admission and shall be renewed for the remaining duration of the undergraduate degree program subject to his/her maintenance of good academic performance and conduct as specified by the concerned university. - The Scholarship will be awarded initially for a period of one year from the date the student actually takes admission to the Agricultural University for pursuing under Graduate degree programme in agriculture and related disciplines with both course work and practice leading to the award of a Master&#39;s Degree. The scholarship is will be renewed for the remaining duration of the undergraduate degree programme subject to his/her maintenance of good academic performance and conduct as specified by the concerned university.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The value of the scholarship shall be Rs 3,000/- per month to postgraduate (Master's degree) students at present.",
      "No contingency grant is paid."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "nts-ug.json",
    "title": "National Talent Scholarship Undergraduate",
    "description": "National Talent Scholarship (NTS) was launched by the Indian Council of Agricultural Research for students pursuing a Bachelor&#39;s program in an ICAR-recognized agricultural university located outside of his/her state of domicile and duly funded under the planning scheme \u201cStrengthening and Development of Higher Agricultural Education in India&quot; of the Education Division of the ICAR. The amount of the scholarship is \u20b9 2,000/- per month for Bachelor&#39;s (Under Graduate). The scholarship will be awarded initially for a period of one year from the date the student actually takes admission and shall be renewed for the remaining duration of the undergraduate degree program subject to his/her maintenance of good academic performance and conduct as specified by the concerned university. <br> The Scholarship will be awarded initially for a period of one year from the date the student actually take admission in the Agricultural University for pursuing under Graduate degree programme in agriculture and related disciplines with both course work and practice leading to the award of Bachelor&#39;s Degree. The scholarship is will be renewed for the remaining duration of the undergraduate degree programme subject to his/her maintenance of good academic performance and conduct as specified by the concerned univcnity. <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The value of the scholarship shall be \u20b9 2,000/- per month to undergraduate (Bachelor's degree) students."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "omps.json",
    "title": "Opening And Maintenance Of Public School (Vidya Niketan) For Vimukta Jatis And Nomadic Tribes",
    "description": "The Government of Maharashtra has introduced a scheme &quot;Opening And Maintenance Of Public School (Vidya Niketan) For Vimukta Jatis And Nomadic Tribes&quot; to the voluntary organization to run the Public School (Vidya Niketan) on a grant-in-aid basis at Kamlewadi, Taluka Mukhed, District Nanded for the needy, brilliant and talented students belonging to VJNT Category. In this public school, students get an education from 5th to 12th standard on a merit basis. The Benefits provided by the Government of Maharashtra are Financial Assistance given to the institution for maintenance assistance given on building rent. 100 percent salary grants for approved teaching and non-teaching staff. Students are provided with facilities like books, notebooks, uniforms, education stationary free lodging, and boarding facilities. Rs.1450/- p.m. per residential student is admissible.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "orjcvsrva.json",
    "title": "Opening And Running Junior Colleges For VJNT Students Run By Voluntary Agencies",
    "description": "The Govt. of Maharashtra vide G.R. dated 26/6/2008 has started (11th and 12th class) Junior College education by upgrading the 148 secondary Ashram Schools for educational and social development of Vimukta Jatis and Nomadic Tribes (VJNT) students. The scheme \u201cOpening and Running Junior Colleges for VJNT Students Run by Voluntary Agencies\u201d is implemented by the Social Justice and special assistance department in Maharashtra. Under this scheme, the government provides academic educational facilities, free lodging, and boarding in Junior Colleges. It also provides medical facilities, bedding and clothing, and uniforms to residential students. This scheme is implemented on a grant-in-aid basis to voluntary organizations.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pdf.json",
    "title": "Post-Doctoral Fellows",
    "description": "The Post-Doctoral Fellowship (PDF) at the Physical Research Laboratory (PRL) is an initiative to support researchers who have completed or are nearing the completion of their Ph.D. in science or engineering fields. The fellowship offers candidates the opportunity to pursue research in PRL\u2019s cutting-edge science and engineering research areas. The tenure of the fellowship is for a maximum of two years, subject to annual progress reviews. The fellowship provides a competitive stipend, research opportunities, and accommodation benefits.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Fellowship: Monthly stipend based on the academic status of the fellow:",
      "Academic Allowance: One-time academic allowance of \u20b9 10,000/- during the fellowship.",
      "Accommodation: Fellows may receive PRL accommodation or HRA in lieu of accommodation as per PRL norms."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pdfscstc.json",
    "title": "Post Doctoral Fellowship to Scheduled Caste/Scheduled Tribe Candidates",
    "description": "This scheme has been initiated keeping in view the social background of the candidates from the deprived section of society and to provide them an opportunity to undertake advanced studies and research in Science, Engineering &amp;amp; Technology, Humanities and Social Sciences in Indian Universities/Institutions/Colleges. Objective: The objective of the scheme is to provide an opportunity to SC/ST candidates to undertake postdoctoral research in Sciences, Engineering &amp;amp; Technology, Humanities and Social Sciences at Indian Universities/Institutions/Colleges as indicated below: - Universities/Institutions/Colleges included under Section 2(f) and 12 (B) of UGC Act. - Deemed to be Universities included under Section 3 of the UGC Act, 1956 and eligible to receive grants-in-aid from UGC. - Universities/Institutions/Colleges funded by Central/State Government. - Institutes of National Importance.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The financial assistance available under the scheme is as follows:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pdfwc.json",
    "title": "Post Doctoral Fellowship To Women Candidates",
    "description": "The UGC has initiated a scheme of \u201cPost Doctoral Fellowship for Women\u201d to those candidates, who are unemployed holding Ph.D. degrees in their respective subject areas with an aim to accelerate the talented instincts of the women candidates to carry out the advanced studies and research. The total duration of the fellowship is five years with no provision for further extension. The number of slots available under the scheme is 100 per year. &gt; **Objective:** The objective of this award is to provide an opportunity to carry out advanced studies and research in Science, Engineering and Technology, Humanities, and Social Sciences in Indian Universities/Colleges/Institutions as indicated below: 1. Universities/Institutions/Colleges included under section 2(f) and 12(b) of UGC Act, 1956. 1. Deemed to be Universities under section 3 of the UGC Act, 1956 which are eligible to receive grant in aid from UGC. 1. Universities/Institutions/Colleges funded by Central/ State Govt. 1. Institutes of National Importance.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pds.json",
    "title": "AICTE-PROFESSIONAL DEVELOPMENT SCHEME",
    "description": "AICTE-Professional Development Scheme has been launched by the All India Council for Technical Education with an intention to provide financial assistance to regular faculty of the AICTE approved institutes and AICTE officers on regular and deputation basis in order to present research papers at international conferences abroad&amp;amp; within India. **Objectives:** To enable the meritorious faculties and officers of AICTE to interact at international level to update themselves to the global changes in the concerned field of specializations through paper presentation in conference abroad&amp;amp; within India.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pecfar.json",
    "title": "Paired Early Career Fellowship in Applied Research",
    "description": "Indo-German Science &amp;amp; Technology Centre (IGSTC) established a joint initiative of the Department of Science and Technology (DST), Government of India and the Federal Ministry of Education and Research (BMBF), Government of Germany invites applications for \u201cPaired Early Career Fellowship in Applied Research (PECFAR)\u201d from early-career Indian and German researchers to explore, connect and network for research collaboration in applied research. &gt; **Aim of the Fellowship: The Fellowship intends to-** - Support Early Career Researchers to network and explore possibilities to grow in applied research. - Enhance the research capabilities and opportunities in the partner country on various aspects of S&amp;amp;T, entrepreneurship, collaborative research, innovation &amp;amp; lab utilization. - Create impetus to expand bilateral collaboration &amp;amp; research among young researchers. - Build well-knitted long-term cooperation with complementary partnerships through networking &amp;amp; interaction. &gt; **Fellowship Details:** - This fellowship is designed to facilitate a pair of Early Career Researchers to have a short visit to India/Germany for networking and explore avenues for collaboration and innovation in applied research. - The pair will be formed by an Indian and a German Early Career Researcher who shall submit a joint proposal. - The paired fellows can jointly plan the fellowship visits to the partner country (India/Germany). - The fellows may also utilize this award to connect and travel to other institutions in India/Germany and enhance their networking. &gt; **Formation of a Pair:** - Applicants shall form a pair consisting of one Indian &amp;amp; German Early Career Researcher holding regular positions in academia/research institution/industry or holding long-term nationally recognized fellowships (4 years and above). - Applicants are solely responsible for identifying &amp;amp; forming their respective pairs and acquiring acceptance letters from institutes/organizations of the paired fellows. - PhD students/Post-Docs affiliated with research institutions/industries are also encouraged to form a Pair. &gt; **Duration of Fellowship:** - The duration of the fellowship will be up to 2 months. - Extension in the duration of the fellowship shall not be entertained.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The financial support shall be provided as a time grant and it will be limited to:",
      "Note 01: IGSTC grant is only for covering monthly fellowship, round trip fare, visa, and travel/medical insurance.",
      "Note 02: A one-time grant will be provided to cover the travel, accommodation, and daily expenses."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pfifllesrs.json",
    "title": "Programme For Internship For LL.B./ LL.M./ Environmental Studies/ Research Students",
    "description": "The National Green Tribunal provides opportunities to college students by holding Summer Internship Programs (March, April, May and July ordinarily) and Winter Internship Programs (November, December and January ordinarily) Internship Programs for LL.B./ LL.M./ Environmental Studies/ Research Students. <br> > **Duration** 1. The duration of the Internship will be 4 Weeks ordinarily. 1. The duration and timing of the internship may be altered by the Competent Authority as and when necessary. <br> > **Number of Slots** 1. The maximum number of slots to be offered to the students shall be decided by the Competent Authority.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Certificate",
      "A certificate will be issued to the Intern at the end of her/his internship after evaluation of the research paper or assessment of the work done.",
      "Guide",
      "A guide will be assigned to each intern for their study during the internship.",
      "Remuneration",
      "The National Green Tribunal pays no remuneration/expenses."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pg-igssgc.json",
    "title": "Post Graduate Indira Gandhi Scholarship For Single Girl Child",
    "description": "A scholarship scheme by the University Grants Commission for Girl students who are admitted in the first year of PG courses in any designated university or a postgraduate college, and happen to be the only girl child in the family. The amount of fellowship is \u20b9 36,200/- p.a. for the full duration of a PG course. The scheme has been introduced with an aim to compensate direct costs of girl education at all levels, especially for such girls who happen to be the only girl child in their families. <br> The objectives of the proposed scheme are: a) To support the postgraduate education of single girl children in postgraduate courses only. b) To recognize the value of observance of the small family norms. <br> The candidates are required to apply online on National Scholarship Portal after initiation of the application process and notice to be published on the UGC website. 3,000 fresh scholarships will be awarded every year and will be paid on DBT mode on annual basis.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Nature of Assistance Available Under the Scheme",
      "Amount of fellowship: \u20b936,200/- per annum for a period of two years only i.e. full duration of a PG course.",
      "3,000 fresh scholarships will be awarded every year and will be paid on DBT mode on annual basis.",
      "Note",
      "No other additional grant will be payable in lieu of hostel charges and medical charges, etc."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pgmssurhula.json",
    "title": "Post Graduate Merit Scholarship Scheme For University Rank Holders At Under-Graduate Level Applicable",
    "description": "University Grants Commission (UGC), Department of Higher Education (DoHE) introduced a Post-Graduate Merit Scholarship Scheme for University rank holders both in General and Honours Courses at the Undergraduate level. The scholarship may be tenable for a period of two years to enable the rank holders of each university at the undergraduate level to pursue their Master\u2019s Degree. <br> All universities/degree awarding institutions would be required to issue rank certificates to the toppers of the university (not at the college level) both in General and Honours Courses namely B.A., B.Sc., and B.Com. The purpose of this scheme is to attract talent for pursuing postgraduate studies besides strengthening the basic subjects \u2013 General as well as Honours, at the Undergraduate level. <br> The awardees, under this scheme, can pursue their Postgraduate program in any area of specialization in any institution of higher learning in the country. <br> **OBJECTIVES** a) to promote and nurture talent. b) to reward meritorious students with outstanding performance at the Undergraduate level for pursuing postgraduate studies. c) to Promote study in basic subjects both General as well as Honours at the undergraduate level. Professional courses are not covered under the scheme. d) to build up academic excellence at the postgraduate level across the colleges and universities in the country.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "FINANCIAL ASSISTANCE UNDER THE SCHEME",
      "The financial assistance for the scheme will be provided by the UGC to all the eligible universities/institutions which are under Sections 2(f) and 12(B) of the UGC Act.",
      "NUMBER OF SCHOLARSHIPS AND TENURE OF SCHOLARSHIP"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pgsgategpatqspmtmempugc.json",
    "title": "Post Graduate Scholarship for GATE/GPAT Qualified Students for Pursuing M.Tech/M.E./M.Pharm-UGC ",
    "description": "University Grants Commission is implementing the scheme of Post Graduate Scholarship for GATE/GPAT Qualified Students for Pursuing M.Tech/M.E./M.Pharm courses (including integrated dual degree courses). &gt; **Objective:** The objective of the scheme is to help and attract young and talented graduate students to pursue education at the Post Graduate Level in Higher Education Institutions.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pgspcscstc.json",
    "title": "Post-Graduate Scholarships for Professional Courses for SC/ST Candidates",
    "description": "The scheme \u201cPost Graduate Scholarships for Professional Courses for SC/ST Candidates\u201d has been initiated to provide opportunities to the deprived sections of the society, viz. the Scheduled Caste (SC) and Scheduled Tribe (ST) for undertaking postgraduate level studies in Professional subjects like Engineering &amp;amp; Technology, Management, Pharmacy etc. in recognized Indian Universities/Institutions/Colleges. &gt; **Objective:** The objective of the scheme is to provide financial assistance to 1000 SC/ST candidates to pursue postgraduate level studies in Professional courses.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pgssgategpatqsaicte.json",
    "title": "Post Graduate Scholarship Scheme for GATE/GPAT Qualified Students-AICTE ",
    "description": "The scheme \u201cPost Graduate Scholarship Scheme for GATE/GPAT Qualified Students- AICTE\u201d has been started by the All India Council for Technical Education, Government of India. AICTE in order to ensure the development of technical education in India awards Post Graduate Scholarship of \u20b912,400/- per month to full-time GATE/CEED qualified students admitted to AICTE approved post-graduate programs in AICTE approved Institutions/ University Departments as per AICTE approved intake.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pm-uspycsiss.json",
    "title": "Pradhan Mantri Uchchatar Shiksha Protsahan Yojana: Central Sector Interest Subsidy Scheme",
    "description": "The \u201cPradhan Mantri Uchchatar Shiksha Protsahan Yojana: Central Sector Interest Subsidy Scheme\u201d was launched by the Ministry of Education (Erstwhile Ministry of Human Resource Development), Government of India in the year 2009. The scheme provides full interest subsidy during the moratorium period on loans availed under the Model Education Loan Scheme of the Indian Banks\u2019 Association (IBA) to students belonging to economically weaker sections whose annual parental income is up to \u20b94.5 Lakhs from all sources. The subsidy is allowed for pursuing higher education in professional/technical courses only from NAAC accredited Institutions or professional/technical programmes accredited by NBA or Institutions of National Importance or Centrally Funded Technical Institutions (CFTIs) in India. Canara Bank has been appointed as Nodal Bank for the implementation of the scheme. &gt; **List of Technical/Professional Courses:** - A list of Centrally Funded Technical Institutions and Institutions of National Importance is available on the Ministry of Education website URLs [https://www.education.gov.in/technical-education-1](https://www.education.gov.in/technical-education-1) and [https://www.education.gov.in/institutions-national-importance](https://www.education.gov.in/institutions-national-importance). - The list of NAAC accredited universities/institutions is available at the NAAC website URL [http://naac.gov.in/index.php/en/2-uncategorised/32-accreditation-status](http://naac.gov.in/index.php/en/2-uncategorised/32-accreditation-status) and NBA recognized professional courses are available at the NBA website URL [https://www.nbaind.org/accreditationprogram/Accredited Program](https://www.nbaind.org/accreditationprogram/AccreditedProgram). - In case of doubt, related to eligibility of course under the scheme, etc., banks may approach the University Grants Commission (UGC)/ All India Council for Technical Education (AICTE) and other councils for clarification, for which UGC/AICTE and other councils would be requested to create Cells and identify Nodal Officers, whom banks can approach for relevant information. - It shall be the responsibility of the loan disbursing bank to ensure that only technical/professional courses are covered by them under the scheme. &gt; **Eligible Bank:** - The Scheme is adopted by all Scheduled Banks/Regional Rural Banks (RRBs)/Cooperative Banks and is linked with the existing Model Educational Loan Scheme of the Indian Banks\u2019 Association. &gt; **Nodal Bank:** - The Scheme shall continue to be implemented through Canara Bank, which is the Nodal Bank for the Ministry of Education. Modalities for implementation and monitoring shall be finalized in consultation with the Canara Bank.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pm-yasasvitcseobcebcdnts.json",
    "title": "PM-YASASVI: Top Class School Education for OBC, EBC and DNT Students",
    "description": "The \u201cPM-YASASVI: Top Class School Education for OBC, EBC and DNT Students\u201d is a sub-scheme under the umbrella scheme namely \u201cPM Young Achievers Scholarship Award Scheme for Vibrant India for OBCs and Others (PM-YASASVI)\u201d. The scheme was launched by the Ministry of Social Justice &amp;amp; Empowerment, Government of India to provide educational assistance to the students belonging to Other Backward Classes (OBCs), Economically Backward Classes (EBCs), and Denotified, Nomadic Tribes (DNT). The Scheme will be funded by the Ministry of Social Justice and Empowerment on a 100% basis. &gt; **Objective:** The objective of the scheme is to provide premium education to the meritorious students belonging to OBC, EBC, and DNT categories by funding their education from Class 9 onwards till they complete Class 12. &gt; **Scope and Coverage:** All the OBC, EBC, and DNT students studying in the Top Class Schools identified as per the modalities of the scheme with a household annual income of less than \u20b92.5 lakhs would be eligible for the scheme. The number of slots for each State would be allocated based on the OBC population data available. The sanction of scholarship would be based on merit and is done using the online portal. &gt; **Implementing Agency:** This is a central sector component under the Centrally Sponsored scheme and would be implemented by the Ministry of Social Justice and Empowerment with the assistance of the State Governments and the National Scholarship Portal. &gt; **Modalities:** The scheme would be implemented in the following manner: - The top performing schools which consistently secure 100% passes in the Classes 10th &amp;amp; 12th would be selected by a selection committee constituted under the Chairmanship of Joint Secretary (BC) and with representation from the Department of School Education and the NITI Aayog. These schools will be termed as \u2018Top Class Schools (TCSs)\u2019 for the purpose of this scheme. - The TCSs can be public (Central/State/Local Body) or aided schools or private schools. - The number of slots available under the scheme for each State and each class would be announced in the month of April each year. - At least 30% of these scholarships are reserved for girls.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pmfdr.json",
    "title": "Prime Minister\u2019s Fellowship for Doctoral Research",
    "description": "Prime Minister\u2019s Fellowship for Doctoral Research scheme is a prestigious initiative of the Science and Engineering Research Board (SERB), Department of Science &amp;amp; Technology, Government of India towards the advancement of university research engagements in line with industry requirements. This scheme is aimed at encouraging young, talented, enthusiastic, and result-oriented scholars to take up industry-relevant research by partnering with institutions of academic excellence. The intent was to leverage research with the industry\u2019s innovative capacity by providing access to know-how and facilities. These are critical in advancing expertise and technologies leading to tangible economic outcomes like patents, licenses, non-patented and non-licensed new products, and processes. Under this scheme, there are 100 slots of fellowships available annually to researchers to pursue PhD in reputed technology and research institutions in India. The first batch of fellowships commenced in 2013. The Federation of Indian Chambers of Commerce &amp;amp; Industry (FICCI) on behalf of SERB implements the scheme. &gt; **Aim:** - To encourage and inspire promising young Indian Ph.D. researchers to pursue industry-relevant research in the areas of Science, Technology, Engineering, Agriculture, and medicine. - To build industry-academia partnerships for advancing R&amp;amp;D. - To boost research on industrially relevant subject areas. &gt; **Key Features of the Fellowship:** In addition to the attractive scholarship, the Prime Minister\u2019s Fellowship emphasizes providing a unique and invigorating experience to selected fellows. It ensures the best national and international exposure for them and provides mentoring through industry and academic experts through the mechanism of annual review meetings. In addition, periodic mentorship sessions are also organized with the help of expert external agencies. &gt; **Duration of Fellowship:** \u2022 **As** per the provisions of the scheme, the scholarship is given for a maximum period of four years.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pmgdisha.json",
    "title": "Pradhan Mantri Gramin Digital Saksharta Abhiyaan",
    "description": "Pradhan Mantri Gramin Digital Saksharta Abhiyaan (PMGDISHA) is a Digital Literacy Scheme by the Ministry of Electronics and Information Technology (MeitY), to make six crore persons in rural areas, across States/UTs, are digitally literate, reaching around 40% of rural households by covering one member from every eligible household. <br> The Scheme is applicable only to rural areas of the country. Only one person (14 - 60 years of age) per eligible household would be considered for training. Priority would be given to Non-smartphone users, Antyodaya households, college drop-outs, and Participants of the adult literacy mission; Digitally illiterate school students from class 9th to 12th, provided facility of Computer/ICT Training is not available in their schools. Preference would be given to SC, ST, BPL, women, differently-abled persons, and minorities. <br> The Scheme is aimed at empowering the citizens in rural areas by training them to operate computer or digital access devices (like tablets, smartphones, etc.), send and receive e-mails, browse the Internet, access Government services, search for information, and undertake digital payment, etc. and hence enable them to use the Information Technology and related applications, especially Digital Payments to actively participate in the process of nation building. Thus the Scheme aims to bridge the digital divide, specifically targeting the rural population including the marginalized sections of society like Scheduled Castes (SC) / Scheduled Tribes (ST), Below Poverty Line (BPL), women, differently-abled persons, and minorities.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The Digital Literacy Training Course",
      "Total Duration of the Course: 20 Hours",
      "Broad Content outline:",
      "Learning Outcomes / Competency Standards:",
      "The content generation/collation/management/aggregation \u2013 the creation of the content bank, etc would be carried out by CSC-SPV in consultation with various stakeholders as per the following:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pmscteoicphh.json",
    "title": "Pre-Matric Scholarships to the Children of Those Engaged in Occupations Involving Cleaning and Prone to Health Hazards",
    "description": "Launched in the year 1977-78, the scheme &amp;quot;Pre-Matric Scholarships to the Children of Those Engaged in Occupations Involving Cleaning and Prone to Health Hazards&amp;quot; is a Scholarship Scheme by the Department of Social Justice and Empowerment, Ministry of Social Justice and Empowerment. The objective of the scheme is to provide financial assistance to children whose parents/guardians belong to one of the following categories, to pursue Pre-Matric education: Tanners, Flayers, Waste Pickers and Persons who are either presently engaged in Manual Scavenging.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Rate of Scholarship",
      "Ad-Hoc Grant",
      "Additional Provisions for Students with Disabilities",
      "NOTE 1: The students amongst target groups with disabilities covered under this scheme can, however, also get such additional benefits from other schemes, which are not covered in the above provision.",
      "Duration and Course of Studies",
      "Mode of Disbursal"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pmsfss.json",
    "title": "Post-Matric Scholarship for SC students",
    "description": "- **Objective** 1. The objective of the scheme is to appreciably increase the Gross Enrolment Ratio of SC students in higher education with a focus on those from the poorest households, by providing financial assistance at post-matriculation or post-secondary stage to enable them to complete their education - **Scope** 1. These scholarships are available for studies in India only and the awardees are selected by the State Government/Union Territory to which the applicant actually belongs (i.e. the State/UT in which permanently settled or domiciled, as per the terms of domicile decided by the State). 1. This is applicable to all the students who are currently beneficiaries of the scheme as well as fresh admissions. <br> **The Post-Matric Scholarship Scheme for SC Students categorizes courses into four groups:** 1. **Group I:** Degree and Post Graduate level courses in Medicine, Engineering, Technology, Planning, Architecture, Design, Fashion Technology, Agriculture, Veterinary Sciences, Management, Business Finance/Administration, Computer Science/Applications Commercial Pilot License (including helicopter pilot and multiengine rating) course 1. **Group II**: Post Graduate Diploma courses in various branches of Management &amp;amp; medicine C.A/I.C.W.A. /C.S./I.C.F.A. etc. 1. **Group III:** Graduate and Post Graduate courses not covered under Group 1 &amp;amp; Group 2 B.A / B.Sc. / B.Com etc. M.A/ M.Sc. / M.Com etc. 1. **Group IV**: Management &amp;amp; Catering, Travel/Tourism/Hospitality Management, Interior Decoration, Nutrition &amp;amp; Dietetics, Commercial Art, Financial Services (e.g. Banking, Insurance, Taxation etc.).",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Note 1. Ten percent extra allowances shall be provided for Divyang students.",
      "Note 2. Students pursuing C.A. /I.C.W.A. /C.S. /I.C.F.A. shall be treated as day scholars for the purpose of academic allowance. Students studying through correspondence/online courses shall not be eligible for academic allowance."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pmss.json",
    "title": "Prime Minister's Scholarship Scheme",
    "description": "Prime Minister\u2019s Scholarship Scheme was introduced in the Academic year 2006-07 by the Department of Ex-servicemen Welfare, Ministry of Defence, to encourage higher technical and professional education for the dependent wards of Ex-Servicemen / Ex-Coast Guard personnel and their widows. <br> A total number of 5500 (2750 Boys and 2750 Girls) wards / widows of Ex-servicemen are selected for the scholarship in each academic year. Scholarship amount is paid annually to the selected students for a period of one to five years as per the duration of the courses approved by the concerned regulatory bodies. The amount of the scholarship is \u20b92500 per month for boys and \u20b93000 per month for girls.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pmssrpf.json",
    "title": "Prime Minister's Scholarship Scheme for Railway Protection Force",
    "description": "Prime Minister\u2019s Scholarship Scheme (PMSS) for Railway Protection Force (RPF) was announced by the Hon\u2019ble Prime Minister of India in his address to the nation from the historical Red Ford on 15th August 2005. Prime Minister\u2019s Scholarship Scheme for RPF was introduced in the Academic year 2008-09. It was introduced to encourage higher technical and professional education for the dependent wards of Ex/Serving RPF/RPSF personnel and widows (below the Rank of Gazetted officer). **Scholarship Available:** A total number of 150 students (from academic session 2015-16) have been earmarked to RPF for an academic session. Half of the scholarships are reserved for female candidates i.e. 75. Shortfall in fresh cases shall not be adjusted from girls/boys, if applicants (boys/girls) are available less than 75. It is also mentioned that unallocated quota in any gender may not be utilized for other categories (boys/girls). Distribution of scholarships among Zonal Railways and RPSF will be as under:- **Sl. No.****Zone/Organization****Quota**1CR+KRCL 102ECoR063ECR084ER165NCR+CORE066NER067NFR088NR+JR RPF Academy + RDSO169NWR+ Construction0410SCR0611SECR0412SER1013SR+ICF1014SWR0415WCR0416WR1017RPSF2218Total150",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pmsssc.json",
    "title": "Pre- Matric Scholarships Scheme for Scheduled Castes & Others",
    "description": "This program provides financial aid to parents of children from Scheduled Castes and other disadvantaged groups to help them afford their children&#39;s education at the Pre-Matric level. The goal is to increase the participation of these children in education, reduce the dropout rate, especially during the transition from primary to secondary school, improve their academic performance, and increase their chances of continuing their education beyond the Pre-Matric stage. <br> <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The students shall be given a consolidated academic allowance, as follows:",
      "In addition, a 10% extra allowance shall be given to Divyang (Disabled) students."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pmsswcapfar.json",
    "title": "Prime Minister\u2019s Scholarship Scheme for the Wards of Central Armed Police Forces & Assam Rifles",
    "description": "The \u201cPrime Minister\u2019s Scholarship Scheme (PMSS) for the Wards of Central Armed Police Forces &amp;amp; Assam Rifles\u201d is a scholarship scheme which was introduced by the Ministry of Home Affairs, Government of India from the academic year 2006-07 to encourage higher technical &amp;amp; professional education for the dependent wards &amp;amp; widows of Central Armed Police Forces &amp;amp; Assam Rifles (CAPFs &amp;amp; AR) Personnel. &gt; **Number of Scholarship:** For the wards of CAPFs &amp;amp; Assam Rifles, a total of 2000 Scholarships (equally for both girls &amp;amp; boys) under PMSS will be given for each academic year in addition to renewal cases of previous years. Shortfall in fresh cases shall not be adjusted from girls/boys, if applicants (Boys/Girls) are selected less than 1000.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pmsswsutpp.json",
    "title": "Prime Minister\u2019s Scholarship Scheme for the Wards of States/UTs Police Personnel",
    "description": "The \u201cPrime Minister\u2019s Scholarship Scheme (PMSS) for the Wards of States/UTs Police Personnel\u201d is a scholarship scheme which was introduced by the Ministry of Home Affairs, Government of India during the academic session 2019-20 to encourage higher technical &amp;amp; professional education for the dependent wards of States/UTs Police Personnel who are martyred during Terror/Naxal attacks. &gt; **Number of Scholarship:** A total of 500 scholarships will be given to the wards of State Police Personnel who are martyred during Terror/Naxal attacks in equal numbers to the Boys and Girls (i.e. 250 for boys and 250 for girls).",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pmsswwcpfp.json",
    "title": "Prime Minister's Scholarship Scheme for the Wards/Widows of Central Police Force Personnel",
    "description": "The scheme \u201cPrime Minister\u2019s Scholarship Scheme for the Wards/Widows of Central Police Force Personnel\u201d was introduced by the Ministry of Home Affairs, Government of India in the Academic year 2006-07 to encourage higher technical and professional education for the wards of widows and ex-CPFs personnel. Service conditions of Central Police Forces (CPFs) Personnel are extremely exacting, tough, rigorous, and peculiar to the Services. The service condition often keeps these personnel away from family for long spells. This leads to neglect of family matters including the education of children. Prime Minister has announced 5000 scholarships for the wards of ex-servicemen/widows of army personnel as well as para-military forces including the Railway Protection Force for pursuing advanced education in the field of Medical Engineering/IT and other technical subjects which would be funded out of the interest income generated out of National Defence Fund. Out of the total 5000 scholarships, 1000 scholarships have been allocated to the Ministry of Home Affairs and Railways. On the basis of the strength of the forces, it has been decided that 910 scholarships for CPFs controlled by MHA and 90 for the Railways Protection Force controlled by the Ministry of Railways.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Amount of Scholarship:",
      "1. \u20b91250/- per month for boys",
      "2. \u20b91500/- per month for girls",
      "Duration of the Scholarship:",
      "1. Two to five years as approved by the concerned regulatory body for the programme."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pmsvs-maharashtra.json",
    "title": "Post-Matric Scholarship To VJNT Students - Maharashtra",
    "description": "The Government of Maharashtra launched a scheme namely \u201cPost-Matric Scholarship to VJNT students\u201d vide G.R. No. EBC 1068/83567/57 dated 24.12.1970 in 1970. This scheme was started by the Government to encourage the student of the Vimukta Jatis &amp;amp; Nomadic Tribes (VJNT) to undergo Post-Matric higher education. Objective: 1. To encourage the VJNT students to undergo Post-Matric Courses. 2. Providing financial assistance for education. 3. Creating a passion for higher education. 4. Providing students the opportunity to go to the mainstream of education through education. Under this scheme, benefits of Tuition Fees, Exam Fees, and Maintenance Allowance are paid to only VJNT category students. All the eligible VJNT students are paid maintenance allowance from \u20b9 90 to \u20b9 190 per month for hostellers and \u20b9 150 to \u20b9 425 per month for day scholar students.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "post-dis.json",
    "title": "Post Matric Scholarship Students With Disabilities",
    "description": "A scholarship scheme by DoEPwD for students with disabilities pursuing a post-matric qualification from UGC/AICTE recognized universities, i.e. students of Class 11th, Class 12th, including Polytechnics, Post-Matriculation Diploma/Certificates and Bachelor\u2019s Degree/Diploma in India and Master\u2019s Degree/Diploma. <br> The students with the specified disabilities defined in Schedule of the &quot;Rights of Persons with Disabilities Act, 2016&quot; will be eligible under this scheme. This includes persons with visual, hearing, speech, loco-motor, mental retardation, and other disabilities. NOS is implemented offline by the DEPwD. <br> At times SwDs are deprived of harnessing their latent skills and thereby miss the opportunity. This scheme aims to support SwDs to study further in order to prepare themselves to earn their livelihood and to find a dignified place for themselves in the society as they face several barriers physical, financial, psychological, mental in pursuing studies and living with dignity.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Maintenance Allowance (\u20b9 per Month):",
      "Disability Allowances (\u20b9/Annum):",
      "Book Allowance: \u20b91500/- per annum."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "post-st.json",
    "title": "Post Matric Scholarship Scheme For The Students Belonging To Scheduled Tribe For Studies In India",
    "description": "&amp;quot;Post Matric Scholarship Scheme For The Students Belonging To Scheduled Tribe For Studies In India&amp;quot; is a centrally sponsored scheme by the Ministry of Tribal Affairs, for the students of Scheduled Tribe (ST) for studies in India. This scheme is for pursuing higher education starting from class XI to Post Graduation courses in India. &gt; **Objective of the scheme:** - To enable eligible Scheduled Tribe students to undertake quality education from Post Matric to Post Graduate level by providing them financial assistance. - To create an error free platform ensuring that the targeted beneficiaries receive scholarship on time. Scholarship under the Scheme will be available to ST students for studies in India and will be directly transferred to the account of students. &gt; **Scope of the scheme:** These scholarships are available for studies in India only and are awarded by the Government of the State/Union Territory Administration to which the applicant actually belongs i.e. were permanently settled.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ppma.json",
    "title": "Padho Pardesh",
    "description": "The Padho Pardesh scheme is a central government program that provides interest subsidies to minority students who are pursuing master&#39;s, M.Phil, or Ph.D. degrees abroad. The objective of the scheme is to award interest subsidy to meritorious students belonging to economically weaker sections of notified minority communities so as to provide them better opportunities for higher education abroad and enhance their employability. <br> The subjects/ disciplines in which courses (for Masters, M.Phil and Ph.D only) may be undertaken for the grant of interest subsidy are listed below:- 1. Arts/ Humanities/ Social Sciences 1. Commerce 1. Pure Sciences 1. Engineering 1. Bio- technology/ Genetic Engineering 1. Industrial Environmental Engineering 1. Nano- technology 1. Marine Engineering 1. Petro-chemical Engineering 1. Plastic Technology 1. Cryogenic Engineering 1. Mechatronics 1. Automation Robotics including artificial intelligence 1. Laser Technology 1. Low Temperature Thermal Dynamics 1. Optometry 1. Art Restoration Technology 1. Dock and Harbour Engineering 1. Imaging System Technology 1. Composite Materials Engineering including Decentralized power Distribution (for Solar Heat) system, Energy Storage Engineering, Energy conservation, Energy Efficient Habitat 1. Packaging Engineering/ Technology 1. Nuclear Engineering 1. Information Technology including Computer Engineering, Software, Software Quality assurance, Networking/ Connectivity Engineering, Communication system under Hazardous or Post-disaster conditions, Multi- media Communication 1. Industrial Safety Engineering 1. Agriculture &amp; Agro Technology 1. Agronomy 1. Medical 1. Floriculture &amp; Landscaping 1. Food Sciences &amp; Technology 1. Forestry &amp; Natural Resources 1. Horticulture 1. Plant Pathology 1. Energy Studies 1. Farm Power &amp; Machinery 1. Veterinary Sciences 1. Soils &amp; Water Management 1. Plant Breeding &amp; Genetics 1. Small- scale Rural Technology 1. Ocean &amp; Atmospheric Sciences 1. M.B.A 1. M.C.A",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pre-dis.json",
    "title": "Pre Matric Scholarship For Students With Disabilities",
    "description": "A scholarship scheme by DoEPwDs for Students with Disabilities (SwDs) studying in class 9th and class 10th in a government school or a school recognized by the government or CBSE or State Board. <br> The students with the specified disabilities defined in Schedule of the &quot;Rights of Persons with Disabilities Act, 2016&quot; will be eligible under this scheme. This includes persons with visual, hearing, speech, loco-motor, mental retardation, and other disabilities. NOS is implemented offline by the DEPwD. <br> At times SwDs are deprived of harnessing their latent skills and thereby miss the opportunity. This scheme aims to support SwDs to study further in order to prepare themselves to earn their livelihood and to find a dignified place for themselves in the society as they face several barriers physical, financial, psychological, mental in pursuing studies and living with dignity.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "[NOTE: (*) means for 12 months in an academic year]"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pre-sc.json",
    "title": "Centrally-Sponsored Scheme Of Pre-Matric Scholarship For Scheduled Caste Students Studying In Classes 9th & 10th",
    "description": "A scholarship scheme by Ministry of Social Justice &amp; Empowerment for regular, full-time students from Scheduled Castes studying in Class 9th and 10th in a Govt. School / a School recognized by Govt. / CBSE / State Board of Secondary Education. The Total Annual income of parents/guardians of the applicant (from all sources) must not exceed \u20b9 2.50 Lakh per Annum. The scholarship for studying in any class will be available for only one year. The scholarship will be available for studying in India only. The scholarship will be awarded by the govt. of the state/UT to which the applicant belongs (domiciled). **ALL eligible Scheduled Caste candidates will be given scholarships as prescribed in this Scheme.** <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Additional Monthly Allowances for Person with Disability (PwD) studying in private unaided Schools -"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "pre-st.json",
    "title": "Pre Matric Scholarship For Scheduled Tribe Students",
    "description": "A scholarship scheme by Ministry of Tribal Affairs for regular, full time students from Scheduled Tribe studying in Class 9th and 10th, in a Government School or in a School recognized by Govt. or a Central/State Board of Secondary Education. The income of the student\u2019s Parents/Guardian should not exceed Rs. 2.00 lakh per annum. <br> The scheme aims to support the parents of ST children for education of their wards so that the incidence of drop-out, especially in the transition from the elementary to the secondary stage is minimized. The scheme improves the participation of ST children of the prematric stage, so that they perform better and have a better chance of progressing to the post-matric stage of education. <br> The scholarship will be available for studies in India only and will be awarded by the Government of the State/Union Territory to which the applicant belongs i.e. where she/he is domiciled. The scholarship for studying in any class will be available for only one year.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "prla.json",
    "title": "Physical Research Laboratory Award",
    "description": "The PRL Award, instituted by the late Prof. Devendra Lal, former Director of the Physical Research Laboratory (PRL), is awarded biennially to recognize outstanding Indian scientists for original work in Earth and Planetary systems, including areas like Oceanography, Atmospheric Sciences, and Meteorology. The award consists of a cash prize of \u20b950,000 and a medal. <br> **Discipline Areas:** - Earth and Planetary systems, including areas of oceanography, atmospheric sciences, and meteorology.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "prljrf.json",
    "title": "PRL Junior Research Fellowships",
    "description": "The Physical Research Laboratory (PRL), a prestigious institution under the Department of Space, Government of India, launched the Junior Research Fellowship (JRF) Program. The JRF program aims to provide highly motivated and academically excellent candidates with an opportunity to pursue cutting-edge research in a variety of science domains, such as Astronomy and astrophysics, atomic, Molecular, and optical Physics, Geosciences, Planetary Sciences, Space and Atmospheric Sciences, Solar Physics, and Theoretical Physics.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Fellowship Allowance:",
      "\u2022 Junior Research Fellow (JRF): \u20b937,000/- per month.",
      "\u2022 Senior Research Fellow (SRF, after 2 years): \u20b942,000/- per month (based on performance review).",
      "Platinum Jubilee Research Fellowship (ATAL):",
      "\u2022 Selected meritorious JRFs may receive an additional ATAL fellowship of \u20b940,000/- per month (for 3rd to 5th year).",
      "Ph.D. Registration:",
      "\u2022 Fellows have the opportunity to register for a Ph.D. at an institute/university with an MoU with PRL."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "prlvishwas.json",
    "title": "PRL's Vikram Sarabhai Postdoctoral Fellowship (VISHWAS)",
    "description": "The Vikram Sarabhai Postdoctoral Fellowship (VISHWAS) launched by the Department of Space, Ministry of Science and Technology is aimed at providing financial support to highly motivated young PhD holders to conduct advanced research in fundamental sciences with societal implications. The fellowship is designed to foster innovative and cutting-edge research in areas pursued by the Physical Research Laboratory (PRL), aligned with the vision of Prof. Vikram Sarabhai. <br> <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Number of VISHWAS Fellowships: 3",
      "Scholarship Amount:",
      "Duration:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "psgs-deg.json",
    "title": "Pragati Scholarship Scheme For Girl Students (Technical Degree)",
    "description": "A scholarship scheme by AICTE, MoE for Girl Students admitted in 1st or 2nd Year of the technical degree course in an AICTE approved institution. A maximum of two girl children per family are eligible to avail of the benefits. The benefits are provided for a period of maximum of 4 years for first-year admitted students and a maximum of 3 years for second-year admitted students through lateral entry. This scheme is an attempt to give young women the opportunity to further their education and prepare for a successful future by empowering Women through knowledge, skill, and self-confidence.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "\u20b9 50,000/- per annum for every year of study, i.e. maximum of 4 years for first-year admitted students and a maximum of 3 years for second-year admitted students, through lateral entry as a lump sum amount towards payment of college fees, purchase of computer, stationeries, books, equipment, software, etc."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "psgs-dip.json",
    "title": "Pragati Scholarship Scheme For Girl Students (Technical Diploma)",
    "description": "A scholarship scheme by AICTE, MoE for Girl Students admitted in 1st or 2nd Year of the technical diploma course in an AICTE approved institution. A maximum of two girl children per family are eligible to avail of the benefits. The benefits are provided for a period of maximum of 3 years for first-year admitted students and a maximum of 2 years for second-year admitted students through lateral entry. <br> This scheme is an attempt to give young women the opportunity to further their education and prepare for a successful future by empowering Women through knowledge, skill, and self-confidence.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "\u20b9 50,000/- per annum for every year of study, i.e. maximum 3 years for first-year admitted students and maximum 2 years for second-year admitted students, through lateral entry as lump sum amount towards payment of college fee, purchase of computer, stationeries, books, equipment, software, etc. No other additional grant will be payable instead of hostel charges medical charges, etc."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "qip.json",
    "title": "Quality Improvement Programme (QIP)",
    "description": "The scheme &amp;quot;Quality Improvement Programme&amp;quot; was launched by the All India Council for Technical Education (AICTE) in the year 1970. One of its primary objectives is to enhance the expertise and capabilities of faculty members in degree and diploma-level institutions across the country. The program is overseen by the All India Council for Technical Education. In the &amp;quot;Quality Improvement Programme,&amp;quot; only sponsored teachers are eligible for admission to both Master&amp;#39;s and Doctoral Degree Programs. The aim is to enable teachers to acquire Master&amp;#39;s and Doctoral degrees and instil in them a culture of research and improved educational capabilities by exposing them to the environment of study institutions. &lt;br&gt; &gt; **Category** The Scheme covers the following categories of applicants: 1. Faculty Members of AICTE-approved Polytechnic Institutes (Diploma level) (with valid Faculty ID of AICTE) for pursuing M.E./M.Tech. programs. 1. Faculty Members of AICTE approved Degree Level Engineering/Management Institutes (with valid Faculty ID of AICTE) for pursuing Ph.D. programs.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Duration",
      "Scholarship",
      "For Master of Engineering (ME) or Master of Technology (M.Tech) Programs",
      "For Ph.D. Programme",
      "Leaves",
      "NOTE: Prior approval of the QIP center is mandatory for all leaves.",
      "Mode of Payment",
      "The Scholarship/ Annual Contingency/ Pre- PhD etc. will be released through the online QIP portal directly to the beneficiary\u2019s Aadhar-linked account through DBT mode."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "qipfu.json",
    "title": "AICTE-QUALITY IMPROVEMENT (FOREIGN UNIVERSITY) PROGRAMME",
    "description": "The All India Council for Technical Education in its 55th Meeting of the Council held on 14th August 2018 approved the Quality Improvement Programme (Foreign University) (QIP-FU). The QIP(FU) is an extension of the QIP program launched by the Government of India in the year 1970. Under QIP (FU), the AICTE shall provide scholarships to the faculty who fulfils eligibility criteria and obtains admission in the Doctoral Degree programme leading to award of PhD degree in any of the enlisted top 500 universities/institutes (based on the QS ranking, the Times ranking and the Shanghai ranking) in the world. **Objectives:** The objectives of QIP(FU) programme are as follows: 1. To open an opera of avenues for faculty pursuing Doctoral programme leading to award of Ph.D degree from a foreign university / institution, 1. To fill the large gap among the faculty having PG degrees in AICTE approved institutes to obtain Ph.D degree, 1. To reduce local competition, 1. To make the Indian faculty as competitive as that of International faculty and known globally, 1. Besides strengthening of present research scenario in the Country, the horizons may be expanded to other developed countries \u2013 - who have highly qualified faculty who can help or guide PhD scholars, - More number of funding agencies, - Universities have best of facilities like laboratories, libraries, publications etc. for conduct of research work, - Opportunities for employment are more and beyond teaching.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "ra.json",
    "title": "Research Associates (RA) ",
    "description": "The objective of DBT-Research Associateship (DBT-RA) Programme is to train and nurture young researchers, scientists and generate a critical mass of trained manpower in modern areas of biology and biotechnology and build a robust postdoctoral base for the growth of Biotechnology sectors in the country.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Stipend: RAs are awarded a fellowship of \u20b955,000 per month, plus house rent allowance (HRA) and other benefits. The fellowship is tenable for two years, with the possibility of renewal for another two years based on satisfactory performance."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rcsmms.json",
    "title": "Rajarshri Chhatrapati Shahu Maharaj Merit Scholarship",
    "description": "The &quot;Rajarshri Chhatrapati Shahu Maharaj Merit Scholarship&quot; scheme was launched by Social Justice and Special Assistance, Government of Maharashtra, specifically designed to encourage Scheduled Caste (SC) students to pursue higher secondary education. The scholarship aims to enhance the educational standards and competitiveness of SC students by providing financial assistance to those who excel in their Class 10th examinations and are admitted to Class 11th in recognized junior colleges or colleges.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Scholarship Rate:",
      "Duration:",
      "Note: Totaling \u20b93,000 per academic year."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rf.json",
    "title": "Ramanujan Fellowship",
    "description": "&amp;quot;Ramanujan Fellowship&amp;quot; is meant for brilliant Indian scientists and engineers from outside India to take up scientific research positions in India, those Indian scientists/engineers who want to return to India from abroad. The fellowship is scientist-specific and very selective. The Ramanujan Fellows could work in any of the scientific institutions and universities in the country and they would be eligible for receiving regular research grants through the extramural funding schemes of various S&amp;amp;T agencies of the Government of India. &gt; **Duration of Fellowship:** - The duration of the fellowship will be for five years, and not extendable.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rfsms.json",
    "title": "Research Fellowship In Sciences For Meritorious Students",
    "description": "**Introduction** The Research Fellowship in Sciences for meritorious students (RFSMS) scheme of the UGC is open to candidates who have registered for Ph.D. in Science in Universities with Potential for Excellence/Centres with Potential for Excellence/Centres of Advance Studies and Department of Special Assistance identified by UGC. <br> **Objectives** The objective of the RFSMS scheme is to provide opportunities to meritorious candidates to undertake advanced studies and research leading to Ph.D. degrees in sciences.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Nature of Assistance Available Under the Scheme",
      "(i) The tenure of the fellowship is initially for two years under the RFSMS scheme. Upon the expiry of this period, the work of the Fellow will be evaluated by Experts Committee to be set up by the university.",
      "(ii) If the research work is found satisfactory, his/her tenure will be extended for a further period of three years.",
      "(iii) In case the work for the first two years is not found satisfactory, an additional year will be given to him/her for improvement. In such cases work will be evaluated again after three years, and if the improvement is found, the Fellow will get two more years under the RFSMS.",
      "Thus, the total period of fellowship is five years, with no further provision of extension.",
      "Financial Assistance:",
      "Fellowship: @ \u20b9 8,000/-p.m.",
      "Contingency: @ \u20b9 6,000/-p.a.",
      "Leave:",
      "(i) Research Fellows would be entitled to a maximum period of 30 days of leave in a year in addition to public holidays. They are not entitled to any other vacations.",
      "(ii) Women candidates are eligible for maternity leave of 135 days at full rates of fellowship once during the tenure of their award.",
      "(iii) In special cases, Research Fellows may be allowed leave without fellowship by the Commission for upto one academic year during the entire tenure of the award for accepting teaching assignments on a temporary basis, provided the assignment is in the same city/town.",
      "(iii) In other cases, leave without fellowship will be restricted to a period not exceeding three months during the tenure of the award on the recommendations of the supervisor and the institution. The period of leave without fellowship will be counted towards the total tenure of the award. Research Fellows have to apply for leave through universities/institutions/colleges well in advance for the approval of the Commission."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rgisfm.json",
    "title": "Research Grant For In-Service Faculty Members",
    "description": "The scheme &quot;Research Grant for In-Service Faculty Members&quot; was introduced by the University Grants Commission (UGC), Department of Higher Education (DoHE). The objective of this research grant is to provide opportunities to regularly appointed faculty members of Universities/ Institutes/ Colleges (hereinafter \u201cInstitutions\u201d) to pursue research in their area(s).",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Tenure: 2 years.",
      "Slots: 200 or as may be decided by the Commission",
      "Financial Assistance:",
      "(i) The quantum of support under the scheme is \u20b9 10,00,000.",
      "(ii) The grant can be utilized for purchasing items like minor equipment, consumables, contingencies, fieldwork, travel, etc.",
      "(iii) The grant cannot be used for international travel, purchasing furniture items, or for appointing a project assistant or research fellow.",
      "(iv) The quantum of funds under these heads can be decided by the recipient depending on his / her needs.",
      "(v) The items/equipment purchased from this grant shall be the property of the University.",
      "Release of Grants:",
      "The grant will be released in 3 installments to the university.",
      "(i) Initially, 50% of the grant will be released on receipt of the joining report (Annexure-I).",
      "(iii) The next installment of 25% of the research grant shall be paid on submission of the utilization certificate (Annexure-II) of the first installment.",
      "(ii) The final installment of 25% of the research grant shall be released on a reimbursement basis on submitting the claims and utilization certificate of the second installment.",
      "However, the tenure to utilize the whole grant shall be 2 years from the release of the first installment of the research grant."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rgnfscc.json",
    "title": "Rajiv Gandhi National Fellowship For Scheduled Caste Candidates",
    "description": "**INTRODUCTION** The Rajiv Gandhi National Fellowship (RGNF) Scheme for Scheduled Caste is formulated and funded by the Ministry of Social Justice &amp;Empowerment. The scheme is open to candidates who belong to Scheduled Caste and are pursuing higher studies such as regular and full-time M.Phil.and Ph.D.degrees in Sciences, Humanities, Social Sciences, and Engineering &amp; Technology. There are 2000 slots for Scheduled Caste every year for all the subjects. 3% fellowships are reserved for Persons with Disabilities candidates belonging to SC categories as per the provision laid down by the Government of India. <br> **OBJECTIVE** The objective of the scheme is to provide five-year fellowships in the form of financial assistance to students from SC categories, as notified by the Central Government to pursue higher studies such as M.Phil. and Ph.D. at Indian Universities/Institutions/Colleges as indicated below: i. Universities/Institutions/Colleges included under sections 2(f) and 12(B) of UGC Act. ii. Deemed to be Universities included under Section 3 of the UGC Act, 1956 and eligible to receive grants-in-aid from UGC. iii. Universities/Institutions/Colleges funded by Central/State Government iv. Institutes of National Importance.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "DURATION OF FELLOWSHIP",
      "Name of the Course: M.Phil.",
      "Maximum Duration: 2 years or submission of dissertation whichever is earlier",
      "Admissibility of JRF: 2 years; Admissibility of SRF: Nil",
      "Name of the Course: M.Phil./Ph.D.",
      "Maximum Duration: 5 years from the commencement of fellowship or submission of Ph.D. thesis whichever is earlier",
      "Admissibility of JRF: 2 years; Admissibility of SRF: Remaining 3 years",
      "Name of the Course: Ph.D.",
      "Maximum Duration: 5 years or submission of Ph.D. thesis whichever is earlier",
      "Admissibility of JRF: 2 years; Admissibility of SRF: Remaining 3 years",
      "AMOUNT OF FELLOWSHIP",
      "The rate of fellowship for JRF and SRF will be at par with the UGC Fellowship as amended from time to time. Presently these rates are as follows -",
      "Fellowship (Sciences, Humanities, and Social Sciences)",
      "@Rs. 25,000/-p.m. initial two years for JRF",
      "@Rs.28,000/- p.m. for remaining tenure for SRF",
      "Contingency (Humanities & Social Sciences)",
      "@Rs.10,000/-p.a. for an initial two years (JRF)",
      "@Rs.20,500/-p.a. for remaining tenure (SRF)",
      "Contingency (Science, Engg. & Technology)",
      "@Rs.12,000/- p.a. initial two-year (JRF)",
      "@Rs.25,000/-p.a. for remaining tenure (SRF)",
      "Escorts/Reader Assistance (All Subjects)",
      "@Rs.2,000/- p.m. in case of physically handicapped & blind candidates.",
      "HRA As per Govt. of India norms (All Subjects)",
      "HOUSE RENT ALLOWANCE",
      "1. Suitable single-seated hostel accommodation may be provided to the candidates in the institutions. In such cases, the fellow is eligible to draw only hostel fees excluding mess, electricity, water charges, etc. A certificate to this effect is to be furnished through the Registrar/Director/Principal. HRA is not permissible for those candidates who are staying in Hostel accommodation.",
      "2. In case of non-availability of hostel accommodation, the fellow may be provided with single accommodation by the host institution. In such cases, the rent paid by the fellow on actual basis may be reimbursed subject to the ceiling of HRA as per Govt. of India norms.",
      "3. If the fellow makes her own arrangements of accommodation, he/she may be entitled to draw HRA as per the categorization of cities by the Govt. of India.",
      "Note: In all the above cases, the fellow will submit a relevant certificate (Annexure-VI) through the concerned University/College/Institute to the identified Agency for settling the claim.",
      "MEDICAL",
      "No separate /fixed medical assistance is provided. However, the fellow may avail of the medical facilities available in the University/Institution/College.",
      "LEAVE",
      "i. Leave for a maximum period of 30 days in a year in addition to the public holidays that may be taken by the candidate. However, they are not entitled to any other vacation, such as summer, winter, and pooja vacations.",
      "ii. Candidates are eligible for maternity/ paternity to leave at full rates of the fellowship as per Govt. of India rules once during the tenure of the award.",
      "iii. Academic Leave: The Fellow may be allowed academic leave (without fellowship and other emoluments) for a period not exceeding one year during the tenure of award for academic/teaching assignment /foreign visit in connection with research work.",
      "iv. The expenditure on travel cannot be claimed from UGC. The period of leave without fellowship will be counted towards the tenure.",
      "v. If the awardee wishes to apply for any other fellowship/paid assignment/examination conducted by a public body during the tenure of the fellowship, he/ she is not required to obtain NOC from UGC. In case of selection, the candidate would be required to tender their resignation from the Rajiv Gandhi National Fellowship.",
      "Note: All kinds of leave shall be approved by the University/Institute/College."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rgpswobh.json",
    "title": "Rajbhasha Gaurav Puraskar Scheme for writing original book in Hindi",
    "description": "The scheme \u201cRajbhasha Gaurav Puraskar Scheme for Writing Original Book in Hindi\u201d was launched by the Department of Official Language, Ministry of Home Affairs, Government of India with an objective to encourage writing books originally in Hindi and to promote Official Language. Under the scheme, the citizens of India will be awarded as follows:- - Rajbhasha Gaurav Puraskar for writing original book in Hindi on knowledge and science-based subjects. - Rajbhasha Gaurav Puraskar for writing original book in Hindi on Forensic Science, Police, Criminology Research and Police Administration. - Rajbhasha Gaurav Puraskar for writing original book in Hindi on subjects related to Culture, Religion, Arts and Heritage. - Rajbhasha Gaurav Puraskar for writing original book in Hindi in the field of law. &gt; **Objective:** (A) Various Ministries/Departments/Offices/Undertakings/Banks etc. of the Central Government also deal with technical subjects in their official Work. The difficulty is being faced to increase the use of Hindi in official work due to scarcity of books in Hindi on the subjects based on technology, science, forensic science, police, criminology research, police administration, culture, religion, arts, heritage and in the field of law. In addition, employees do face difficulties in doing their official work in Hindi as they are less acquainted or non-acquainted with Hindi terminologies of these subjects. The Department of Official Language is undertaking this scheme with the sole objective to encourage writing books in Hindi on the above-mentioned subjects. (B) Various Ministries/Departments have undertaken different award schemes related to Hindi at the national level. Department of Official Language has been made the sole Nodal Department for book schemes related to Hindi. Hence, relevant schemes among the award schemes related to Hindi being run by various Ministries/ Departments at the national level have been incorporated under the scheme. It has been decided to discontinue the other award schemes. If any Ministry/Department, in the future, wishes to undertake any other award scheme related to Hindi it shall mandatorily consult with the Department of Official Language before taking up any such scheme to avoid repetition of the award scheme.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rgsaip.json",
    "title": "Rashtriya Gram Swaraj Abhiyan - Internship Program",
    "description": "For Implementation of Centrally Sponsored Scheme of &amp;quot;**Revamped Rashtriya Gram Swaraj Abhiyan&amp;quot;** (RGSA) (2022-23 to 2025-26), the Ministry of Panchayati Raj (MoPR), seeks to engage Students enrolled/pursuing undergraduate, graduate, or postgraduate degree programs and &amp;#39;Young Research Scholars&amp;#39; enrolled/pursuing Doctoral (Ph.D.) or post-doctoral degrees in given academic disciplines below from recognized/reputed University(s)/Institution(s) within India or abroad for short-term (maximum of 3 months only) through an Internship program. The engagement of &amp;#39;Selected Candidates&amp;#39; as &amp;#39;Interns&amp;#39; will work in various Units, Cells, and Programmes of different Divisions of MoPR under the Revamped RGSA Scheme for the period of FY 2022-23 to 2025-26. The **\u2018Internship Program\u2019** is specifically focusing on the \u2018Office set-up of MoPR\u2019. A detail list of intended domains/subject areas of research for which the \u2018Interns\u2019 are invited and shall be engaged is enclosed in \u2018[**Annexure \u2013 A**](https://cdnbbsr.s3waas.gov.in/s316026d60ff9b54410b3435b403afd226/uploads/2023/09/202403121034313656.pdf)\u2019 of detailed guidelines. **Objectives of the Program** 1. To engage &amp;#39;Students&amp;#39; and &amp;#39;Research Scholars for tapping academic talents, knowledge, skills, and techniques to be best utilized and associated with the MoPR&amp;#39;s Policy and Action Research work for mutual benefits. 1. The &amp;#39;Interns&amp;#39; shall have an opportunity to know and get in-hand experience on the Stier Local Self-governments and other Government functioning, policies, schemes, development initiatives, and interventions for rural development in context to the socioeconomic, cultural, and political aspects. 1. The &amp;#39;Interns&amp;#39; will have to provide relevant and logical inputs, suggestions, and recommendations through Data Analysis, Situational Analysis, Empirical and Evidence-Based Research through Quantitative &amp;amp; Qualitative Data Analysis, Desk Reviews, and Policy Analysis at the &amp;#39;Office setup of MoPR&amp;#39; for preparing Policy Briefs and Working Papers.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rmewf-education.json",
    "title": "RMEWF-Financial Assistance For Education Of Children & Widows Of Ex-Servicemen",
    "description": "A scheme to provide financial assistance to Ex-Servicemen and their widows for helping them in educating their child (for maximum two children) up to graduation and also for widows to pursue Post Graduation degree. <br> Aim of this scheme is to provide financial assistance to up to a maximum of two dependent children of those ESM or their widows, up to the ranks of Havildar in the Army and equivalent in the Navy and Air Force, who are not in receipt of such benefit from from the State or his Employer. It is also applicable to widows for post-graduation degree course. <br> <br> <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rmewf-vocational-training.json",
    "title": "RMEWF-Financial Assistance For Vocational Training Of Widows Of Ex-Servicemen",
    "description": "A scheme to provide financial assistance to a widow od Ex-Servicemen to settle in life through vocational training. <br> <br> Depending on their educational level and aptitude, they may opt to undergo the requisite vocational training. Such a course may be pursued at any recognized vocational training institution run by Rajya Sainik Board/Zonal Sainik Board, state like ITI or private training institutions of repute like NIIT etc.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "A financial assistance of Rs.20,000/- (max- one time aid ) is provided to widows of Ex-Servicemen on successful completion of said vocational training."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rmscitc.json",
    "title": "Reimbursement of the MS-CIT Course",
    "description": "The Reimbursement of the MS-CIT Course scheme was launched by the Maharashtra Building And Other Construction Workers Welfare Board (MBOCWW), Labour Department Maharashtra. The scheme offers reimbursement of the MS-CIT (Maharashtra State Certificate in Information Technology) course fees for up to two children of registered construction workers.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rrf.json",
    "title": "Ramalingaswami Re-Entry Fellowship",
    "description": "The Department of Biotechnology has instituted a scheme known as the \u201cRamalingaswami Re-Entry Fellowship\u201d. The scheme is aimed at Indian Nationals who are working overseas in various fields of biotechnology and life sciences and are interested in taking up scientific research positions in India. The Ramalingaswami Re-entry Fellows would be able to work in any of the scientific Institutions/Universities in the country. The applicant should have a proven/outstanding track record as evidenced by research publications and recognitions. The duration of the fellowship will be for a period of three years. Ramalingaswami Re-entry Fellows shall also be eligible for regular research grant through extramural and other research schemes of various S&amp;amp;T agencies of the Government of India. &lt;br&gt; The scheme has been conceptualized with the aim of attracting highly skilled researchers (Indian Nationals) working overseas in various cutting-edge disciplines of any area of Life Sciences &amp;amp; Biotechnology, Bio-engineering, Healthcare (human and animal), Agriculture and Veterinary biotechnology, Bio-energy and allied areas by providing them an attractive avenue to pursue their R&amp;amp;D interests in Indian universities/institutions.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "DURATION AND NUMBER OF FELLOWSHIP"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "rtif.json",
    "title": "Right To Information Fellowship",
    "description": "The Department of Personnel and Training (DOPT), Ministry of Personnel, Public Grievances and Pensions, Government of India, is the nodal Ministry for the Right to Information Act. The primary goal of the &quot;Right to Information Fellowship&quot; scheme is to contribute towards more accountable and transparent government and it has several components including programmes for awareness generation, training and e-governance initiatives for RTI for achieving the purpose. Under this scheme, DOPT proposes to offer 4(Four) short-term fellowships to researchers from the field of media / Civil Society professionals / RTI Trainers to conduct field-based research on themes relating to RTI. It is hoped that the research output will enhance the understanding of the status of the implementation of the act, including its successes, constraints in its implementation and how those are being / could be overcome and what more needs to be done to help achieve the objectives of the Act.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Stipend",
      "A stipend of \u20b9 50,000/- per month for three months.",
      "(subject to tax deduction at source)",
      "Additional Grant",
      "\u20b9 50,000/- for books, research material, travel, printing, production of creatives etc., sanctioned on the basis of the research proposal and released on production of actual bills."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "safaew-bcew.json",
    "title": "Scheme For Award Of Financial Assistance For Education To The Wards Of Beedi/Cine/IOMC/LSDM Workers \u2013 Pre & Post-Matric",
    "description": "A scholarship scheme by the Directorate of Social Welfare, Ministry of Labour and Employment wherein financial assistance for education is provided to the Wards of Beedi/Iron Ore Mines, Manganese Ore &amp; Chrome Ore Mines (IOMC)/Limestone Mines, Dolomite Mines (LSDM)/Mica Mines and Cine Workers, varying from \u20b91,000/- to \u20b925,000/- per student per annum. The benefits under the scheme are being transferred through the DBT system and the applications under this scheme are invited and processed through the National Scholarship Portal. The Applicant must have passed the last qualifying examination on the first attempt. However, Students promoted to the next class are also eligible to apply for the above scholarships. Candidates for the award of scholarships should have taken regular admission for studies at recognized institutions in India in any course of general or technical education, including medical, engineering, and agricultural studies.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Quantum of Financial Assistance to be paid to Eligible Students (\u20b9/Annum) w.e.f. AY 2022-23):"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sak-deg.json",
    "title": "AICTE \u2013 Saksham Scholarship Scheme For Specially-Abled Student (Degree)",
    "description": "Saksham is a Scholarship Scheme by the Ministry of Education, implemented by AICTE, aimed at providing encouragement and support to specially-abled children to pursue technical education. This is an attempt to give every young student, who is otherwise specially abled, the opportunity to study further and prepare for a successful future through technical education/ knowledge. \u20b950,000/- per annum for every year of study i.e. maximum 4 years for the first year admitted students and maximum 3 years for the second year admitted students through lateral entry as lump sum amount towards payment of college fee, purchase of computer, stationeries, books, equipment, software, etc. The candidate should be admitted to the First year of the Degree level course OR the Second year of the Degree level course through lateral entry in any of the AICTE-approved institutions of the respective year. Family income from all sources should not be more than Rs. 8 lakh per annum during the current financial year.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sak-dip.json",
    "title": "AICTE \u2013 Saksham Scholarship Scheme For Specially-Abled Student (Diploma)",
    "description": "Saksham is a Scholarship Scheme by the Ministry of Education, implemented by AICTE, aimed at providing encouragement and support to specially-abled children to pursue technical education. This is an attempt to give every young student, who is otherwise specially abled, the opportunity to study further and prepare for a successful future through technical education/ knowledge. \u20b950,000/- per annum for every year of study i.e. maximum 3 years for the first year admitted students and maximum 2 years for the second year admitted students through lateral entry as lump sum amount towards payment of college fee, purchase of computer, stationeries, books, equipment, software, etc. The candidate should be admitted to the First year of the Diploma level course OR the Second year of the Diploma level course through lateral entry in any of the AICTE-approved institutions of the respective year. Family income from all sources should not be more than Rs. 8 lakh per annum during the current financial year.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "scafe.json",
    "title": "Scheme For Campus Accommodation & Facilities Enhancing Social Experience",
    "description": "**Introduction** &quot;Scheme for Campus Accommodation &amp; Facilities Enhancing Social Experience (CAFES)&quot; was introduced by the All India Council for Technical Education (AICTE), Department of Higher Education (DoHE), to provide financial assistance for construction of hostel to create a congenial study atmosphere free from the shackles of domestic shores so as to encourage students to purse their education career without dropping out. <br> **Objective** (a) The scheme is initiated to facilitate continuation of education and also interaction between the students beyond class hours for their all-around development. (b) The scheme aims to support Government/ Government-aided engineering colleges/ University departments/ Polytechnics for construction of hostel for providing residential accommodation for students/researchers. (c) This AICTE scheme also allows extension of existing hostels in the institute by additional construction work to benefit the students. (d) This scheme has three variants addressing the needs of: (i) CAFES - SC/ST students (ii) CAFES \u2013 NER (Institute located in North Eastern Region) (iii) CAFES \u2013 Differently Abled students",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Limit of Funding from AICTE: \u20b9 3.25 crore",
      "(a) Construction of Hostel: \u20b9 3,00,00,000",
      "(b) Establishment of Gym equipment: \u20b9 5,00,000",
      "(c) Establishment of Indoor sports club: \u20b9 10,00,000",
      "(d) Establishment of the library for preparation of tests for competitive examination/higher education: \u20b9 10,00,000",
      "Disbursement of the Funds",
      "(a) Disbursement of 50% of the amount (1st installment) in advance upon sanction of the proposal, out of funds for the construction of the hostel.",
      "(b) Disbursement of 40% of the amount (2nd installment), out of funds for the construction of the hostel on utilization of the 1st installment to be released only after spot inspection carried out by an Evaluation Committee comprising of two engineers (one each from Civil & Architect) from AICTE approved panel to be organized by concerned RO AICTE. The EVC report should contain all the mandatory documents.",
      "(c) Disbursement of the remaining 10% of the amount (3rd installment), out of funds for the construction of the hostel on submitting a completion certificate by registered Civil Engineer/ Architect/ PWD and submission of all other mandatory documents as mentioned in the sanction letters and the parameter of the scheme.",
      "In addition to this, funds for the establishment of the gym, indoor sports club, and the establishment of library would be granted on submission of a proper quotation at a competitive rate after the release of the 2nd installment amount and handing over the building in all respects."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "scsssetul.json",
    "title": "Star College Scheme For Strengthening Of Science Education And Training At Undergraduate Level",
    "description": "The Dept. of Biotechnology (DBT) has launched a scheme &amp;quot;Star College Scheme for Strengthening of Science Education and Training at Undergraduate Level&amp;quot; for improving critical thinking and &amp;#39;hands-on&amp;#39; experimental work at the undergraduate (college) level in sciences. It is expected to encourage, more students to take up higher education in science. DBT will identify colleges with ambition and potential for excellence and provide academic and physical infrastructure for achieving excellence in teaching and unique exposure of students to experimental science. &lt;br&gt; The Star College Scheme is a pan-India Scheme that envisages a Star College in every district of the country, thus the Department shall exert dialogues with the State Government and identify colleges that can be considered for support under this Scheme. DBT has supported over 200 undergraduate colleges across the country in the past 9 years. Apart from financial support, colleges benefit tremendously from guidance received in Advisory Committee Meetings, mentoring, Task Force Meetings, and learning from peers in other colleges. &lt;br&gt; &gt; **Objectives** 1. To strengthen the academic and physical infrastructure for achieving excellence in teaching and training. 1. To enhance the quality of the learning and teaching process to stimulate original thinking through \u2018hands-on\u2019 exposure to experimental work and participation in summer schools. 1. To promote networking and strengthen ties with neighboring institutions and other laboratories. 1. To conduct specialized training programs for faculty improvement for optimizing technical capabilities. 1. To increase capabilities of core instrumentation resources by procuring new equipment and upgrading existing facilities. 1. To provide access and exposure to students to research laboratories and industries in the country. 1. To help in devising standard curricula and Standard Operating Procedures (SOPs) / kits for practicals. 1. To provide better library facilities to students and teachers.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Nature of Financial Assistance",
      "For Students",
      "For Faculty",
      "Expected Outcomes",
      "Annual Outcomes",
      "1. Increase in the number of practicals being conducted individually by the students.",
      "2. Introduction of \u201chands-on training\u201d to enhance conceptual clarity for topics taught previously by theoretical approach.",
      "3. Engaging students in minor research projects.",
      "4. Faculty development programs and laboratory staff training programs.",
      "5. Involvement of students in scientific writing and journal club activities.",
      "Consolidated outcome after the sanctioned tenure (3 years)",
      "1. Increase in the admission cut-off percentage and decrease in the dropout rates of students.",
      "2. Increase in the faculty generated resources viz extramural research grants from other funding agencies to strengthen the Star College Scheme efforts.",
      "3. Number of colleges or schools mentored from underprivileged areas.",
      "4. Number of colleges mentored to write grants for Star Scheme support and their outcome.",
      "5. SOPs developed, lab manuals created and uploaded on the website, or submitted to DBT."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sebiitdip.json",
    "title": "SEBI ITD Internship Program",
    "description": "The SEBI ITD Internship Program provides hands-on training to the students of the institutes based in and around Mumbai. The program accepts up to 15 interns. The Interns accepted under this program would be given an opportunity to work on different Information Technology (IT) projects including Data Analytics (DA), regulatory business processes and reporting, and FinTech at SEBI. Such projects will provide an exceptional opportunity to the interns to apply their IT and DA skills while gaining valuable exposure to the functioning of the Indian capital markets. <br> > **Duration** The internship program is proposed to be for a contiguous period of minimum 1 year which may comprise of either 2 semesters and 1 summer / winter internship or 3 trimesters and 1 summer / winter internship. <br> > **Schedule** At least 3 days a week of internship at SEBI (excluding Saturdays, Sundays and Public Holidays).",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Stipend (\u20b9)",
      "Leaves",
      "Accommodation",
      "Unfurnished shared accommodation only for outstation candidates, subject to availability",
      "Certificate",
      "A certificate of completion of internship program by SEBI.",
      "Other Perks"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "secoii.json",
    "title": "Solar Energy Corporation of India (SECI) Internship",
    "description": "The Ministry of New and Renewable Energy launched the &quot;SECI Internship&quot; program under Solar Energy Corporation of India Ltd. The Internship Program will serve as an opportunity for students to gain understanding about Renewable as a sector and SECI as an employer and help them evaluate future career opportunities. The Program will be structured, short-term, supervised placements often focused around particular tasks or projects with defined timescales. The work should be meaningful and must be mutually beneficial for intern and the Corporation. <br> > **Area of Interest:** - Renewable Energy and Solar-Wind Hybrids. - Floating Solar. - Solar Manufacturing and Battery Energy Storage Systems. - Solar Park development. - Solar Rooftop projects and Off-grid Solar. <br> > **Duration:** - Engineering/M-Tech students: 3 &amp; 6 months - CA/CA (Inter),CS/ICWA/ICWA(Inter)/CMA students: 6 months to 3 years - MBA students: 7 weeks to 6 months",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Stipend:",
      "Completion Certificate:",
      "NOTE: The internship program does not include compensation of any kind, boarding, lodging, transportation etc."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sevtgi.json",
    "title": "Special Education And Vocational Training Through Government Institutions",
    "description": "The &quot;Special Education and Vocational Training through Government Institutions&quot; is a scheme by the Department of Social Justice &amp; Special Assistance, Govt. of Maharashtra. In this scheme, Special Education is provided to children with disability between the age group of 6 to 18 years in the Government Special Schools and Vocational Training is provided to special children above the age of 18 years. Only citizens who are permanent residents of the state of Maharashtra are eligible to apply for this scheme. This scheme is 100% funded by the Govt. of Maharashtra.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sgrcsl.json",
    "title": "Scheme For Grant Of Rewards To The Children Of Salt Labourers",
    "description": "The scheme \u201cScheme for Grant of Rewards to the Children of Salt Labourers\u201d was launched by Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry in the year 1985. Initially, the scheme known as \u201cScheme for grant of rewards to the children of labourers working in Salt Industry (CRS)\u201d was initiated for granting 20 rewards to the children of the salt workers to enable them to meet the initial expenses either partly or wholly for purchase of books, stationeries, etc., on admission to recognized institutes for higher studies. Since 2011-12 the numbers of rewards are 3500 with a financial implication of \u20b945.00 Lakh. Under the scheme, the financial assistance will be given as \u20b91000/- for the students of classes VI to VIII, \u20b91500/- for classes IX to X, and \u20b92000/- for classes XI to XII with the proviso that awards for girl child be reserved to a minimum of 50% allocation per state. In the absence of female students in a particular Salt Factory/State, the reward could be given to the available eligible male students in each category of other Salt Factory/State.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sheambgoc.json",
    "title": "Scholarships For Higher Education Abroad To Meritorious Boys And Girls From Open Category",
    "description": "The scheme \u201cScholarships for Higher Education Abroad to Meritorious Boys and Girls from Open Category\u201d was launched by the Department of Higher and Technical Education, Government of Maharashtra on 4th October 2018. Under the scheme, meritorious students from the open/unreserved category from the Maharashtra State who wish to study abroad and pursue Post Graduation, Diploma after Graduation and Ph.D. studies can avail of this scholarship every year. The students from the unreserved category can avail of scholarships for studying various courses in reputed universities. The Maharashtra government has sanctioned foreign scholarships to Twenty (20) students every year. The Universities/higher educational institutes should be acknowledged by THE (Times Higher Education)/or QS (Quacquarelli Symonds) which are included in the 200 Ranking lists. This programme will be implemented from the academic year 2018-19 under the Higher and technical education department. <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sipgrs-mospi.json",
    "title": "Scheme of Internship for Post-Graduate/Research Students",
    "description": "The **Ministry of Statistics &amp;amp; Programme Implementation (MoSPI)** is implementing a scheme of Internship for Post-graduate/Research Students of Statistics/ Mathematical Statistics/Operations Research/ Economics/ Demography or any of the applied fields of Statistics of recognized Universities/Institutions during 2023-24. The scheme is as follows: &gt; **Aim, Objectives &amp;amp; Scope** 1. To facilitate the students pursuing post-graduate/research in statistics to study and get familiarized with the prevailing system of Official Statistics in the Country. 1. To familiarize the interested and willing post-graduate/research students with the Official Statistical System of the Country, with specific reference to data collection, processing &amp;amp; analysis, publication and dissemination needs. 1. To create awareness amongst the students of Statistics/ Mathematical Statistics/ OperationsResearch/ Economics/ Demography or any of the applied fields of Statistics about the Indian Statistical Service and Subordinate Statistical Service. 1. To sensitize the students of Statistics/ Mathematical Statistics/ Operational Research/ Economics/ Demography or any of the applied fields of Statistics about choosing their career in the field of Statistics. &gt; **Number of Internships** The total available number of internships during 2023-24 would be 193.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sipocagi.json",
    "title": "Student Internship Programme",
    "description": "The Student Internship Program, a unique learning opportunity aims to provide the Interns exposure to the functioning of the CAG of India. The office of the Comptroller and Auditor General of India (CAG) invites applications for engaging Student Interns (SIs) on contract basis for a duration of 3 to 6 months to work in the Regional Capacity Building and Knowledge Institutes. Candidates pursuing under graduation/ post-graduation / research in any discipline from recognized, reputed institutions, with stellar academic record are eligible to apply. Preferred attributes include skills in Information Technology (IT) &amp;amp; Information Communication Technology (ICT) with good communication and interpersonal skills. The Student Intern (SI) shall be subject to the laws of secrecy of the country and will sign a Secrecy and Non-Disclosure Agreement before reporting for the internship. Interns will have to present to the concerned Head of the Functional Wing/Head of the Field office a Report/Paper on the assigned subject at the end of the internship. The Head of the Functional Wing at CAG office/Head of Field Office will review the progress of the projects on a regular basis. At the end of the internship, an Experience Certificate / Recommendatory letter shall be given. &gt; **Number of Interns** The number of Student Interns to be engaged by the CAG of India shall depend on the actual requirement from time to time. &gt; **Duration** The duration of internship for a Student Intern shall be 3 to 6 months. &gt; **Place of Posting** The place of posting will be the CAG\u2019s office, New Delhi or any of CAG\u2019s field office across India. &gt; **Travel, Service Incurred Death, Injury or Illness, Allowances** 1. No TA/DA will be paid to the SI to attend the interviews. 1. No other perks and facilities such as DA, accommodation, residential phone/conveyance/transport, foreign travel, personal staff, medical reimbursement, CGHS etc. shall be admissible, 1. In the event of death, injury or illness of the SI during the term of his/her internship the SI or the SI\u2019s dependents, legal heirs, claimant etc., shall not be entitled to any compensation.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sipprl.json",
    "title": "Summer Internship Programme (PRL)",
    "description": "The Physical Research Laboratory (PRL) Summer Internship Programme was launched by the Department of Space, Government of India. The scheme aims to provide a platform for highly motivated students and teachers to interact with PRL\u2019s scientists, gaining exposure to the lab\u2019s research areas and facilities. Participants will work on projects in fundamental science, technology, and their societal applications. The program offers hands-on experience in real research projects, helping young talents shape their career paths. <br> **Duration of Internship:** 45 days. <br> **Training Mode:** Offline/Online. <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Note:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sire.json",
    "title": "SERB International Research Experience",
    "description": "The Science and Engineering Research Board (SERB), a statutory body under the Department of Science and Technology, Government of India has launched &amp;quot;SERB International Research Experience (SIRE)&amp;quot;. This Program aims to impart high-end research training in frontier areas of Science and Technology, which are of interest to India by providing an opportunity to visit leading institutions/universities across the globe for a period of 02-06 months. The SERB under this program selects candidates in frontier areas of S &amp;amp; T and supports their visit to top institutions around the globe, preferably to the institutions where internationally acclaimed scientists are working. &gt; **Objectives:** - To build national capacity in frontier areas of Science and Technology by providing opportunities for International R&amp;amp;D experience by SIRE fellows. - To tap the expertise gained by SIRE fellows to strengthen/initiate national programmes in their domain knowledge. - To encourage research activities in priority areas that are still less explored in the Indian context.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sisdgft.json",
    "title": "Summer Internship Scheme Of DGFT",
    "description": "The Summer Internship Scheme by the Directorate General of Foreign Trade is for the interaction of the officers of the Directorate with young scholars and researchers with brilliant academic backgrounds from reputed academic institutions pursuing Studies/Research in Public Policy/Economics/Law/Finance/Management. While refreshing ideas from the field of academics will enable the Directorate to critically analyze its activity and take corrective steps in an objective and impartial manner. The internship will provide an excellent opportunity for the interns in their carrier advancement and professional expertise. The objective of the internship is to familiarize interns with the overall process of formulation of foreign trade policy of the Government at the macro level and its implementation by DGFT at the micro level. <br> > **Duration** The duration of the internship will be for a maximum period of 2 months. <br> > **Declaration of Secrecy** Interns are required to furnish to this Directorate a declaration of Secrecy before the commencement of the internship. <br> > **Location** DGFT headquarters in New Delhi. The interns will be attached to the heads of each Division and will be reporting to them directly.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Remuneration",
      "Interns will be paid a consolidated token remuneration of \u20b910,000/- per month.",
      "Logistics Support",
      "Necessary logistics support will be provided to the intern taking into account the functional requirements.",
      "Certificate",
      "Certificates will be issued to the interns on satisfactory completion of their internship."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sjpfsgc.json",
    "title": "Savitribai Jyotirao Phule Fellowship For Single Girl Child",
    "description": "Savitribai Jyotirao Phule Fellowship for Single Girl Child (SJSGC) is a Fellowship Scheme by the University Grants Commission (UGC), Department of Higher Education, for pursuing research work leading to the award of a Ph.D. degree. The target group of this scheme are the \u2018single girl child\u2019, i.e. the only girl child in the family without having any brother or sister. A girl scholar who is one of the twin daughters/fraternal daughters is also eligible to apply for fellowship under the scheme. The number of slots for the fellowship will be decided every year on the basis of eligible applications complete in all respects, received through online mode. <br> **Objectives of the Scheme -** i. To support the higher education of single girl children in Social Sciences. ii. To recognize the value of observance of the small family norm. iii. To recognize the norm of single girl children in society. iv. To propagate the concept of single girl child norm. v. To promote single girls in society.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "TENURE OF FELLOWSHIP:",
      "The tenure of the fellowship is for five years and will be effective from 1st April of the selection year or the actual date of joining under the fellowship in the University/College/Institute, whichever is later. Fellowship will be granted upto the date of submission of Ph.D. Thesis or 5 years of tenure whichever is earlier. No extension is permissible beyond the total period of five years, and the fellow ceases to be a UGC research fellow immediately after the expiry of the due date.",
      "FINANCIAL ASSISTANCE:",
      "Fellowship:",
      "JRF @ \u20b9 31,000/- p.m. for initial two years (subject to satisfactory progress of research work)",
      "SRF @ \u20b9 35,000/- p.m. for remaining tenure (subject to satisfactory progress of research work)",
      "Contingency:",
      "For Humanities and Social Sciences: @ \u20b9 10,000/- p.a. for the initial two years, @ \u20b9 20,500/- p.a. for the remaining tenure.",
      "For Science, Engineering, and Technology @ \u20b9 12,000/- p.a. for the initial two years, @ \u20b9 25,000/- p.a. for the remaining tenure.",
      "Escort Reader Assistance:",
      "@ \u20b9 3,000/- p.m. in the case of \u2018Divyang\u2019 scholars.",
      "Note: At the end of tenure/termination of fellowship/resignation of scholar, the books, journals, and equipment purchased out of the contingency grant shall become the property of the institution concerned.",
      "HRA:",
      "(i) Hostel accommodation may be provided to the scholars by their institutions. In such cases, the scholar is eligible to draw only hostel fees excluding",
      "mess, electricity, water charges, etc. In case, a scholar refuses the hostel accommodation, he/she shall not be eligible to draw HRA.",
      "(ii) In case of non-availability of hostel accommodation, the scholar may be provided with single accommodation by the host institution. In such cases, the rent paid by the scholar on an actual basis shall be reimbursed, subject to the ceiling of HRA as per Govt. of India norms.",
      "(iii) If the scholar makes her own arrangements of accommodation, he/she shall be entitled to draw HRA as per ceiling and categorization of cities by the Govt. of India. In case, the scholar wishes to draw HRA, he/she is required to submit a certificate, in the prescribed format, to her institution.",
      "MEDICAL ASSISTANCE:",
      "No separate/fixed medical assistance is provided. However, the scholars may avail the medical facilities available in their Institutions",
      "concerned.",
      "LEAVE:",
      "(i) Earned Leave for a maximum period of 30 days in a year in addition to public holidays may be taken by a scholar. However, they are not entitled to any other vacation, such as summer, winter, and pooja vacations, etc.",
      "(ii) Maternity/paternity leave as per the Govt. of India norms issued from time to time shall be available for female scholars at full rates of the fellowship once during the tenure of the fellowship. The period of leave without fellowship, if any, shall be counted towards the tenure.",
      "Besides this, an \u2018Intermittent Break\u2019 for a maximum total period of 1 year may also be permissible for women scholars. The break can be availed a maximum of 3 times during the entire period of the fellowship. However, the total duration of the break shall not exceed one year. No fellowship shall be available for the period of such break(s). This period of intermittent breaks shall not be counted towards the tenure of the fellowship, and thus effectively the total period of fellowship shall remain the same.",
      "(iii) Academic leave (without fellowship and other emoluments) shall be permissible only for one year throughout the tenure (for any kind of academic/teaching assignment/foreign visit in connection with research work). The period of leave without fellowship will be counted towards the tenure. Expenditure on foreign visits in connection to research work cannot be claimed from UGC.",
      "(iv) All kinds of leave shall be availed by the scholar only with due approval of the institution concerned."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "smile-scholarship.json",
    "title": "SMILE - Comprehensive Rehabilitation For Welfare Of Transgender Persons",
    "description": "Financial assistance in the form of scholarships is provided to Transgender students studying in secondary school (IX &amp;amp; X) &amp;amp; senior secondary school (XI &amp;amp; XII) to reduce the incidence of dropout and support their educational aspirations. #### Objectives: - The objective is to provide financial assistance to Transgender students studying in IX and above to enable them to complete their education. - To support Transgender students to study further in order to prepare themselves to earn their livelihood and to find a dignified place for themselves in society as they face several barriers physical, financial, psychological, and mental in pursuing studies and living with dignity. At times such students are deprived of harnessing their latent skills and thereby miss the opportunity. - The scholarship shall be awarded to students studying in a government or private higher secondary school/college/university, including such residential institutes of the Government and eligible private institutes selected and notified in a transparent manner by the State Government/Union Territory Administration concerned. - The scheme will also cover technical and vocational courses in Industrial Training Institutes/ Industrial Training Centres affiliated with the National Council for Vocational Training (NCVT) of classes XI and XII level including Polytechnics and other courses (any course of less than one-year duration not covered under this scheme. - All eligible candidates identifying as Transgender Persons will be considered for scholarship. As the number of scholarships for Transgender persons available in a year is fixed and limited, the selection of applications would be on the basis of total marks achieved in the previous academic year as reflected in the mark sheet. #### Terms and Conditions: - The scholarship is dependent on the satisfactory progress and conduct of the Transgender student. If it is reported by the Head of the Institution/School at any time that the student has by reasons of their own act of default failed to make satisfactory progress or has been guilty of misconduct such as resorting to or participating in strikes, irregularity in attendance without the permission of the authorities concerned, etc. The authority sanctioning the scholarship may either cancel the scholarship or stop or withhold further payment for such a period as it may dream fit. - If a student violates school discipline or any other terms and conditions of the scholarship, the scholarship may be suspended or cancelled. - If a student is found to have obtained a scholarship by false statement, his/her scholarship will be cancelled forthwith and the amount of the scholarship already paid will be recovered by the Ministry along with penal interest as per applicable rules. The student concerned will be blacklisted and debarred for future scholarships in any scheme forever. - A transgender student is liable to refund the scholarship amount, if during the course of the year, the studies for which the scholarship has been awarded, are discontinued by the student.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sn2408.json",
    "title": "National Fellowship for Students with Disabilities",
    "description": "The National Fellowship for Students with Disabilities (NFPwD) is a fellowship scheme launched by the Government of India in 2012-13 to increase opportunities for students with disabilities to pursue higher education leading to degrees such as M. Phil. and Ph.D. The scheme is implemented by the University Grants Commission (UGC) on behalf of the Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice and Empowerment. <br> The NFPwD scheme provides financial assistance to students with disabilities who are pursuing M. Phil. and Ph.D. degrees in any university/institution recognized by the UGC. The fellowship is awarded on the basis of merit and the student&#39;s disability certificate",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The value of the fellowship is as follows:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "spmsd.json",
    "title": "State Post-metric Scholarship For Disabled",
    "description": "The &quot;State Post-metric Scholarship for Disabled&quot; is a scheme by the Department of Social Justice &amp; Special Assistance, Govt. of Maharashtra. The objective of this scheme is to encourage students with disability (SwDs) to pursue higher education, i.e. H.S.C., Degree, Professional, Technical, Medical, Engineering, etc. Only citizens who are permanent residents of the state of Maharashtra are eligible to apply for this scheme. This scheme is 100% funded by the Govt. of Maharashtra.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "A. Maintenance Allowance",
      "Group A: Degree Course in Medical, Engineering, Agricultural, Veterinary, and Postgraduate Degree Courses.",
      "Rate of Scholarship for Hosteller (in \u20b9 per month): 1200/-",
      "Rate of Scholarship for Day Scholar (in \u20b9 per month): 550/-",
      "Group B: Diploma course in Medical, Engineering, Agricultural, and Veterinary.",
      "Rate of Scholarship for Hosteller (in \u20b9 per month): 820/-",
      "Rate of Scholarship for Day Scholar (in \u20b9 per month): 530/-",
      "Group C: Post Graduate Course in Arts, Science, Commerce, and Diploma in Professional Education.",
      "Rate of Scholarship for Hosteller (in \u20b9 per month): 820/-",
      "Rate of Scholarship for Day Scholar (in \u20b9 per month): 530/-",
      "Group D: From 2nd-year degree course",
      "Rate of Scholarship for Hosteller (in \u20b9 per month): 570/-",
      "Rate of Scholarship for Day Scholar (in \u20b9 per month): 300/-",
      "Group E: 11th, 10th and 1st year of Degree Course",
      "Rate of Scholarship for Hosteller (in \u20b9 per month): 380/-",
      "Rate of Scholarship for Day Scholar (in \u20b9 per month): 230/-",
      "B. Reader Allowance for Blind and Low-Vision Students.",
      "Group A, B, C (in \u20b9 per month): 100/-",
      "Group D (in \u20b9 per month): 75/-",
      "Group E (in \u20b9 per month): 50/-",
      "C. Tuition Fees (in \u20b9 per month):",
      "As approved by the competent authority.",
      "D. Study Tour Expenditure (in \u20b9 per annum):",
      "500/-",
      "E. Project Typing Expenditure (in \u20b9 per annum):",
      "600/-"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "spremsd.json",
    "title": "State Pre-metric Scholarship For Disabled",
    "description": "The &quot;State Pre-metric Scholarship for Disabled&quot; is a scheme by the Department of Social Justice &amp; Special Assistance, Govt. of Maharashtra. The objective of this scheme is to encourage students with disability (SwDs) to pursue education. Only citizens who are permanent residents of the state of Maharashtra are eligible to apply for this scheme. This scheme is 100% funded by the Govt. of Maharashtra.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Class: 1st to 4th",
      "Rate of Scholarship (\u20b9 per month): 100/-",
      "Class: 5th to 7th",
      "Rate of Scholarship (\u20b9 per month): 150/-",
      "Class: 8th to 10th",
      "Rate of Scholarship (\u20b9 per month): 200/-",
      "Class: Mentally Retarded and Mentally Ill (up to the age of 18 years)",
      "Rate of Scholarship (\u20b9 per month): 150/-",
      "Class: For disabled trainees in the workshop",
      "Rate of Scholarship (\u20b9 per month): 300/-"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sps.json",
    "title": "Savitribai Phule Scholarship For V.J.N.T And S.B.C Girls Students Studying In 8th To 10 Std",
    "description": "Savitribai Phule Scholarship is a Scholarship Scheme by the Social Justice and Special Assistance Department, Government of Maharashtra. The objective of the scheme is to encourage enrollment and to decrease the dropout ratio of Girls in the education of Maharashtra from Vimukta Jati and Nomadic Tribes (VJNT) and Special Backward Classes (SBC), studying in 8th to 10th standard, the Government has introduced this scheme from the academic year 2003-04 The beneficiary is to provide \u20b9100 per month for 10 months i.e. \u20b91000 for 10 months.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The beneficiary is to provide \u20b9100 per month for 10 months i.e. \u20b91000 for 10 months."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "spsvsgs.json",
    "title": "Savitribai Phule Scholarship For V.J.N.T. And S.B.C. Girl Students Studying In 5th To 7th Standard",
    "description": "Savitribai Phule Scholarship is a Scholarship Scheme by the Social Justice and Special Assistance Department, Government of Maharashtra. The scheme was introduced 12th January 1996. The scheme was further amended in 29th October 1996 to include S.B.C. Students. The objective of the scheme is to encourage the enrollment and to decrease the dropout ratio of Girl Students of Maharashtra from Vimukta Jati and Nomadic Tribes (VJNT) and Special Backward Classes (SBC), studying in Class 5th to Class 7th. The beneficiary is provided \u20b9 60/- per month, i.e. \u20b9 600/- for ten months.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The beneficiary is provided \u20b9 60/- per month, i.e. \u20b9 600/- for ten months."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "sr.json",
    "title": "Students Ready",
    "description": "The Student READY (Rural Entrepreneurship Awareness Development Yojana) program aims to provide rural entrepreneurship awareness, and practical experience in a real-life situation in rural agriculture, and create awareness to undergraduate students about practical agriculture and allied sciences. &lt;br&gt; The program will help in building confidence, skills, and acquiring Indigenous Technical Knowledge (ITK) of the locality and thereby preparing the pass-out for self-employment. It also aims to provide opportunities to acquire hands-on experience and entrepreneurial skills. To reorient graduates of agriculture and allied subjects for ensuring and assuring employability and developing entrepreneurs for emerging knowledge-intensive agriculture, it was felt necessary to introduce this program in all the AUs as an essential prerequisite for the award of degree to ensure hands-on experience and practical training. &lt;br&gt; The Fifth Deans committee has given a detailed curriculum of the student READY program for all the disciplines in agriculture and allied sciences. The course curricula have been restructured to develop much-needed skills and entrepreneurial mindset among the graduates to take up self-employment, contribute to the enhanced rural livelihood and food security, sustainability of agriculture, and be propeller for agricultural transformation. &lt;br&gt; **The following components are proposed for carrying out one year Student READY program in all the Undergraduate (UG) disciplines** 1. Experiential Learning on Business Model / Hands-on Training 1. Experiential Learning on Skill Development. 1. Rural Awareness Works Experience (RAWE). 1. Internship / In-Plant Training / Industrial attachment 1. Students Projects &lt;br&gt; **Student READY program is introduced in fourth year of undergraduate education in the following subjects:** 1. Agriculture 1. Agriculture Engineering 1. Bio-Technology 1. Dairy Technology 1. Fisheries 1. Food Technology 1. Forestry 1. Horticulture 1. Home Science (now Community Science) 1. Sericulture &lt;br&gt; **Five components of student READY are:** 1. Experiential Learning with business mode. 1. Hands-on training (HOT)/ Skill development training i.e. Experiential Learning without business mode. 1. Rural Awareness Work Experience (RAWE). 1. Internship/In-Plant Training/ Industrial attachment. 1. Students Projects. &lt;br&gt; **Experiential Learning with business mode** Experiential Learning (EL) with business mode helps the student to develop competence, capability, capacity building, acquiring skills, expertise, and confidence to start their own enterprise and turn job creators instead of job seekers. This is a step forward for \u201cEarn while Learn\u201d concept. Experiential Learning is an important module for high quality professional competence and practical work experience in real life situation to Graduates. The module with entrepreneurial orientation of production and production to consumption pattern is expected to facilitate producing Job Providers rather than Job Seekers. The EL provides the students an excellent opportunity to develop analytical and entrepreneurial skills, and knowledge through meaningful hands on experience, confidence in their ability to design and execute project work. The main objectives of EL are: &lt;br&gt; - To promote professional skills and knowledge through meaningful hands on experience. - To build confidence and to work in project mode. - To acquire enterprise management capabilities. &lt;br&gt; **Rural Agricultural Work Experience (RAWE)** The Rural Agricultural Work Experience (RAWE) provides exposure to agricultural students to the natural setting of the village situations, work with the farm families, identify their problems and make use of various extension tools for transferring the latest agricultural technologies. The students also get opportunity to study the various on-going schemes related to agriculture and rural development and participate in their implementation. The students were given rigorous orientation and familiarization on various issues and problems expected on farmers\u2019 field and hence gain competence and confidence for solving problems related to agriculture and allied sciences. It has been implemented in adopted villages under the supervision of scientists. Activities focused on intensive observations/ analysis of socio-economic and technological profile of the farm families in rural areas, participatory extension approach and acquaintance with farming situations, farm practices and interaction with progressive farmers. Soil testing has become the integral part of RAWE. This helps orient our agricultural graduates for participation in various rural developmental programme. The students also gained first hand information on industries during attachment with identified agro based industries. The stipend rates have been enhanced of Rs 3000/ student/ month for a maximum of 6 months for the village/ rural training under student READY programme. &lt;br&gt; **In Plant Training (IPT)/ Industrial Attachment** Technology and globalization are ushering an era of unprecedented change. The need and pressure for change and innovation is immense. To enrich the practical knowledge of the students, in-plant training is mandatory. In this training, students will have to study a problem in industrial perspective and submit the reports to the university. Such in-plant trainings will provide an industrial exposure to the students as well as to develop their career in the high tech industrial requirements. In-Plant training is meant to correlate theory and actual practices in the industries with the following objectives - To expose the students to Industrial environment, this cannot be simulated in the university. - To familiarize the students with various Materials, Machines, Processes, Products and their applications along with relevant aspects of shop management. - To make the students understand the psychology of the workers, and approach to problems along with the practices followed at factory - To make the students understand the scope, functions and job responsibility-ties in various departments of an organization. - Exposure to various aspects of entrepreneurship during the program period. &lt;br&gt; **Students Projects** There is number of students interested in higher education and study abroad. Keeping in view their future requirement a component of Student Project is placed to understand and identify problems of his/ her interest and field, experimental set up, taking observation and writing and documentation in the form of thesis. Project work provides several opportunities to students to learn various aspects that cannot be taught in a class room or laboratory. In order to provide such opportunities to the graduates of agricultural science, Students Project is proposed as one of the components of the Student READY. It may be adopted based on the interest of student and expertise and facilities available with the College.The Students Project is proposed with the following objectives: - To impart analytical skills and capability to work independently. - To conceptualize, design and implement the proposed work plan. - Learn to work as a team- sharing work amongst a group, and learn leadership - Learn to solve a problem through all its stages by understanding and applying project management skills. - Learn to do various implementations, fabrication, testing and trouble shooting. - Learn communication report writing skills. &lt;br&gt; &lt;br&gt; &lt;br&gt; &lt;br&gt;",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "srms.json",
    "title": "Self Employment Scheme For Rehabilitation Of Manual Scavengers",
    "description": "The Self Employment Scheme for Rehabilitation of Manual Scavengers (SRMS) was introduced in January 2017 by the Ministry of Social Justice and Empowerment, to assist the identified manual scavengers and their dependants in rehabilitation in alternative occupations. SRMS was revised in November 2013 in consonance with the provision of the \u201cProhibition of Employment as Manual Scavengers and their Rehabilitation Act, 2013 (MS Act, 2013).",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "1. Identified manual scavengers, one from each family, are provided one-time cash assistance of \u20b9 40,000.",
      "2. The identified manual scavengers and their dependents are provided project-based upfront capital subsidy up to \u20b9 5,00,000 and concessional loans for undertaking self-employment ventures.",
      "3. Sanitation workers and their dependants are provided assistance for the procurement of sanitation-related projects on the same scale as admissible to manual scavengers for general tasks.",
      "4. The group of the target beneficiaries is eligible for projects costing up to \u20b9 50,00,000.",
      "5. Beneficiaries are also provided training for skill development for up to two years, during which a stipend of \u20b9 3,000 per month is also provided.",
      "6. Manual Scavengers and their family members are also eligible for Health Insurance coverage of \u20b9 5,00,000 under the Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PMJAY)",
      "7. Upskilling/RPL training is provided to sanitation workers.",
      "8. Workshops are organized with the officers, supervisors, and sanitation workers on \u201cHazardous Cleaning of Sewers and Septic Tanks\u201d.",
      "Credit Linked upfront Capital Subsidy -",
      "Range of Project Cost (\u20b9) (for Individuals): Upto \u20b95,00,000",
      "Rate of Subsidy: 50% of project cost",
      "Range of Project Cost (\u20b9) (for Individuals): 5,00,000 to 15,00,000",
      "Rate of Subsidy: \u20b92.5 lakh + 25% of remaining project cost",
      "Range of Project Cost (\u20b9) (for Group Projects): Upto \u20b910,00,000 lakh per beneficiary maximum project cost upto \u20b950,00,000",
      "Rate of Subsidy: Same as admissible to individuals subject to a maximum \u20b93.75 lakh per beneficiary",
      "The rate of interest chargeable from the beneficiaries will be as follows:-",
      "Range of Projects: up to \u20b91,00,000/-",
      "Rate of Subsidy: 5% per annum (4% per annum for women beneficiaries)",
      "Range of Projects: above 1,00,000/-",
      "Rate of Subsidy: 6% per annum",
      "The period of repayment of the loan, including the moratorium period will be five years for projects upto \u20b9 5,00,000 and 7 years for projects above \u20b9 5,00,000 with a moratorium period to start the repayment of the loan will be upto 6 months."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "stfhrdphr.json",
    "title": "Short Term Fellowship under the Human Resource Development Programme for Health Research ",
    "description": "\u201cShort Term Fellowship\u201d under the Human Resource Development Programme for Health Research aims to provide advanced training in India and abroad to medical and health research personnel in cutting-edge research areas related to medicine and health to create trained human resources for carrying out advanced research activities. The scheme is intended to create a pool of talented health research personnel in the country by upgrading the skills of medical students &amp;amp; faculty through specialized training in priority areas of health research in leading national and international institutions, encouraging and supporting the trainees to develop and take up research projects for addressing critical national and local health problems. &gt; **Short Term Fellowships:** - Short Term Fellowships for Training (1-3 Months) in Indian Institutions to the researchers employed as regular faculty having at least three years experience in the college/institute as a regular employee. - Short Term Fellowships for Training abroad/foreign institutes in identified areas (1-3 Months) to persons employed as regular faculty. - Short Term Specialized Training (1-3 Months) to mid-career or senior-level faculty of Medical Colleges working/involved with three other approved Schemes of DHR. &gt; **Objective:** - To increase the overall availability of trained personnel for health research from medical colleges across the country through scholarships &amp;amp; fellowships for young medical doctors to take up medical and health research as a career. - To focus on the creation of a cadre of trained medical/health researchers in specific identified priority areas of health research viz., Clinical Trials; Toxicology; Good Clinical Practices (GCP); Good Laboratory Practices (GLP); Quality Control (QC) &amp;amp; QA; Genomics; Proteomics; Clinical Psychology, Geriatrics; Modern Biology; Biotechnology; Stem cells; Genetics; Drugs chemistry; and operational research etc.. - To create, support, nurture, and encourage the trainees from these medical colleges to forge linkages with other scientists from universities, research institutes etc. to develop multidisciplinary and multi-sectoral teams necessary for addressing critical national and local health problems. &gt; **Areas of Research:** Toxicology, Genomics, Proteomics, Geriatrics, Stem cell research, Clinical Trials, Good Clinical Practices (GCP), Good Laboratory Practices (GLP), Quality Control (QC) and Quality Assurance (QA), Modern Biology, Biotechnology, Genetics, Drugs Chemistry, Operational Research, Health Informatics, Medical Ethics, Disease Modelling, Health Economics, Environmental Health, Mental Health/Clinical Psychology, Any other area recommended by the committee as per National Health Policy/ National Health Goals.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Short Term Fellowship (1-3 months) in Indian institutes:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "stiti.json",
    "title": "Stipends To Trainees In Industrial Training Institute",
    "description": "The scheme \u201cStipends to Trainees in Industrial Training Institute\u201d was launched by the Department of Social Justice and Special Assistance, Government of Maharashtra for Scheduled Caste students in Industrial Training Institute (ITI). The objective of the scheme is to provide Technical Training to Scheduled Caste students in ITI for their job opportunities. Under the scheme, the students of the SC category residing in the hostel of the organization Department of Technical Education gives \u20b960/- per month and the Social Welfare department gives them \u20b9 40/- per month.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "svsgcfrss.json",
    "title": "Swami Vivekananda Single Girl Child Fellowship For Research In Social Sciences",
    "description": "A fellowship scheme by the University Grants Commission (UGC) for Single Girl Child for research in Social Sciences with an aim to compensate for direct costs of higher education, especially for such girls who happen to be the only girl child in their family. <br> The objectives of the proposed scheme are: 1. To support the higher education of single girl child in Social Sciences. 2. To recognize the value of observance of the small family norms. 3. To recognize the norm of single girl child in society. 4. To propagate the concept of single girl child norm. 5. Promoting single girls in society. <br> The girl students who are admitted to Ph. D. programs in Social Sciences in Universities/Colleges/Institutes and happen to be the only girl child in the family without having any brother or sister. The girl student who is twin daughters/fraternal daughter may also apply for fellowship under the aforesaid scheme. <br> The financial assistance available under the scheme is as follows: Fellowship @ \u20b925,000/- per month for the Initial two years; @ Rs. 28,000/- per month for the remaining tenure. Contingency @ \u20b910,000/- per annum for initial two years; @ Rs. 20,500/- per annum for remaining tenure. Escort Reader Assistance @ \u20b92,000/- per month in case of PWD candidates.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Financial Assistance",
      "The financial assistance available under the scheme is as follows:",
      "1. Fellowship @ \u20b925,000/- per month for the Initial two years; @ Rs. 28,000/- per month for the remaining tenure.",
      "2. Contingency @ \u20b910,000/- per annum for initial two years; @ Rs. 20,500/- per annum for remaining tenure.",
      "3. Escort Reader Assistance @ \u20b92,000/- per month in case of PWD candidates.",
      "Slots",
      "The number of slots for the fellowship may be decided every year on the basis of eligible applications",
      "complete in all respects, received through online mode.",
      "Tenure",
      "The tenure of the fellowship is for five years and will be effective from 1st April of the selection year or the actual date of joining under the fellowship in the University/College/Institute, whichever is later. Fellowship will be granted up to the date of submission of Ph.D. Thesis or 5 years of tenure whichever is earlier. No extension is permissible beyond the total period of five years, and the fellow ceases to be a UGC research fellow immediately after the expiry of the due date.",
      "HRA",
      "Suitable single-seated hostel accommodation may be provided to the candidates in the institutions. In such cases, the fellow is eligible to draw only hostel fees excluding mess, electricity, water charges, etc. A certificate to this effect is to be furnished through the Registrar/Director/Principal. HRA is not permissible for those candidates who are staying in Hostel accommodation.",
      "In case of non-availability of hostel accommodation, the fellow may be provided with single accommodation by the host institution. In such cases, the rent paid by the fellow on an actual basis may be reimbursed subject to the ceiling of HRA as per Govt. of India norms.",
      "If the fellow makes her own arrangements of accommodation, she may be entitled to draw HRA as per the categorization of cities by the Govt. of India.",
      "Note: In all the above cases, the fellow will submit a relevant certificate (Annexure-VI) through the concerned University/College/Institute to the identified Agency for settling the claim.",
      "Medical",
      "No separate/fixed medical assistance is provided. However, the fellow may avail of the medical facilities available in the Universities/Colleges/Institutes.",
      "Leave",
      "1. Leave for a maximum period of 30 days in a year in addition to the public holidays that may be taken by the candidate. However, they are not entitled to any other vacation, such as summer, winter, and pooja vacations.",
      "2. Maternity leave as per the Govt. of India norms issued from time to time would be available at full rates of the fellowship once during the tenure of their award.",
      "3. Academic leave (without fellowship and other emoluments) shall be permissible only for one year throughout the tenure (for any kind of academic/teaching assignment/foreign visit in connection with research work). The period of leave without fellowship will be counted towards the tenure. Expenditure on foreign visits in connection to research work cannot be claimed by UGC",
      "Note: All kinds of leave should be approved at the level of the University/College/Institute."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tce-sc.json",
    "title": "Top Class Education For Scheduled Caste Students",
    "description": "A scholarship scheme by Ministry of Social Justice and Empowerment for Scheduled Caste students pursuing studies beyond class 12th admitted in a full-time course in one of the notified institutions. The total annual family income from all sources must be less than or equal to Rs. 8.00 lakh. The benefit of the Scheme will not be provided to more than 2 siblings in a family. <br> The scholarship, once awarded, will continue till the completion of the course, subject to satisfactory performance of the student. The students who have studied class X from any of the Central/State/Municipal Govt. or Govt. aided schools (except KVS schools), shall be automatically qualified under the scheme.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tce-swd.json",
    "title": "Top Class Education For Students With Disabilities",
    "description": "A scholarship scheme by DoEPwDs for Students with Disabilities (SwDs) pursuing studies beyond class 12th admitted in a full-time course in one of the &#39;notified institutions&#39;. The students with the specified disabilities defined in Schedule of the &quot;Rights of Persons with Disabilities Act, 2016&quot; will be eligible under this scheme. This includes persons with visual, hearing, speech, loco-motor, mental retardation, and other disabilities. <br> At times SwDs are deprived of harnessing their latent skills and thereby miss the opportunity. This scheme aims to support SwDs to study further in order to prepare themselves to earn their livelihood and to find a dignified place for themselves in the society as they face several barriers physical, financial, psychological, mental in pursuing studies and living with dignity. <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "The aids and assistive devices may include:",
      "For the blind I low vision -",
      "(i) Braille / Brailer Typewriter",
      "(ii) Laptop with Screen reading software",
      "(iii) Laptop with Screen Magnification software",
      "(iv) Talk software for mobile phone accessibility",
      "(v) DAISY Recorder and player",
      "For the hearing impaired -",
      "(i] Binaural digital programmable hearing aid with provision for button cells.",
      "(ii) Cell phone with SMS SIM Card",
      "(iii) Laptop with WiFi (Blue Tooth) facility."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tdupw.json",
    "title": "Technology Development And Utilization Programme For Women",
    "description": "&gt; **Introduction** In order to meet the specific needs of women and to enhance the contribution of women towards technology capability building, the \u201cTechnology Development &amp;amp; Utilization Programme for Women (TDUPW)\u201d has been formulated by the Department of Scientific and Industrial Research (DSIR). DSIR has a mandate to carry out activities relating to indigenous technology promotion, development, utilization and transfer. DSIR under its \u201cTechnology Development and Utilization Programme for Women (TDUPW)\u201d provides assistance for those projects which are relevant to technology development and utilization by the women. &lt;br&gt; &gt; **Objectives** 1. Promoting the adoption of new technologies by women. 1. Awareness creation and training of women on technology-related issues with regard to women. 1. Promoting Technological upgradation of tiny, small and medium enterprises run by women entrepreneurs. 1. Showcasing appropriate technologies and organizing demonstration programmes for the benefit of women. 1. Design and development of products, and processes beneficial to women.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Duration of the Project",
      "The project should be time-bound, depending upon the nature of the project. Normally a duration of less than 2 years is preferred.",
      "Quantum of Financial Assistance",
      "Note 1: The type of assistance required by the institution should be clearly indicated in the proposal.",
      "Note 2: No support will be provided for basic infrastructure and buildings.",
      "Method of Release of Financial Assistance"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tecis.json",
    "title": "TEC Internship Scheme",
    "description": "The \u2018TEC Internship Scheme\u2019 by the Telecommunication Engineering Centre (TEC), Department of Telecommunications, New Delhi intends to engage 25 Interns in order to study/formulate/operationalize/assess various works/projects/policies etc. The internship Programme will allow young talent to be associated with the TEC work for mutual benefit. It will enable TEC to interact with young scholars and get fresh ideas and study/ research support from academics. At the same time, it will provide an opportunity for young scholars to contribute to the TEC work and have insight into the related technical work. <br> > **Number of Interns** The number of Interns will be 25. **NOTE:** The number is provisional and may vary as per the actual requirements at the time of finalisation of the selection. <br> > **Duration** The period of engagement initially will be for 6 (six) months, extendable to 12 months, if required. **NOTE:** An extension beyond six months shall be permitted, on the application of the intern duly recommended by the concerned Head of Division and with the approval of the Head of TEC.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Token Amount",
      "The interns will be paid a token amount of \u20b9 15,000/- per month.",
      "Certificate",
      "The Interns will be issued a at the end of the internship."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tfefvs.json",
    "title": "Tuition Fees And Examination Fees To Vjnt Students",
    "description": "The Government of Maharashtra launched a scheme namely &quot;Tuition fees and examination fees to Vimukta Jati and Nomadic Tribes (VJNT) students. **Scheme Objective** Under the scheme, 1. Tuition Fees, 1. Admission Fees 1. Term Fees 1. Library Fees 1. Laboratory Fees 1. Gymkhana Fees, and 1. Examination Fees All the students belonging to V.J. and N.T. are being reimbursed for the payment of these mentioned 7 fees at Post Matriculation Education in recognized educational institutions. Students with one failure and those not covered under the Government of India Scholarship are also held eligible for such reimbursement.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "All types of compulsory fees such as Tuition fees, and Exams. Fees & other fees are reimbursed to the concerned college/institution."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tgsctclvccmuo.json",
    "title": "Travel Grant Scheme For College Teachers / College Librarians / Vice Chancellors / Commission Members And UGC Officers",
    "description": "This scheme provides financial assistance to permanent teachers and librarians of colleges and vice-chancellors of state universities, deemed to be universities and central universities to present research papers at international conferences abroad. This facility is also available to the permanent teachers of Institutions of National Importance with a cap of 10% of the total approved cases annually. The Commission members and UGC Officers at the level of EO/US and above are also eligible to apply under this scheme.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Financial Assistance for the total admissible expenditure such as travel, registration fee, per diem allowance and visa fee.",
      "NOTE: The entire amount due to the candidate is disbursed in one instalment after the conference is over and relevant documents are submitted by the applicant."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tloiis.json",
    "title": "The Lokpal of India Internship Scheme",
    "description": "The Lokpal of India launched &quot;The Lokpal of India Internship Scheme&quot;. The interns will get an opportunity to learn about the implementation of the Lokpal and Lokayuktas Act, the Prevention of Corruption Act, the Central Vigilance Commission Act, the Delhi Police Establishment Act and other related laws and procedures. They will also learn about the functioning of various institutions like, the Lokpal, the Central Vigilance Commission, The Delhi Police Establishment (CBI), etc. <br> > **Duration:** The duration of the internship will be 6 weeks. <br> > **Attendance:** The interns will have to attend the office on all working days.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tmdvso.json",
    "title": "Training Of Motor Driving To VJNT, SBS & OBC",
    "description": "The Government of Maharashtra launched a scheme that provides light and heavy motor driving, and conductor training to the needy Vimukta Jati, Nomadic Tribes, and Other Backward Class (VJNT, OBC &amp; SBC) candidates. The scheme\u2019s objective is to create employment chances for Vimukta Jati/Nomadic Tribes, Other Backward Classes, and Special Backward Class youth. The scheme provides light and heavy motor driving or conductor training to the needy VJNT, OBC &amp; SBC candidates. The training is given through private motor driving schools. Under this scheme, the selected candidates are provided training with free lodging, boarding facility, License Fees, etc. Applicant should belong to VJNT, OBC, or SBC Category and Applicant should fulfill all the conditions of Age, Education, and fitness as per the Motor Vehicle Act. The government aims to provide training and Economic Uplifting with the help of employment to the youth. Application is to be submitted to Motor Driving School approved by the Government of Maharashtra under the Social Justice and special assistance department. <br> Light Motor Driving Rs.4264/- for 40 Days. Heavy Motor Driving Rs.4960/- for 40 Days. Conductor Rs.1728/- for 8 Days. As per the corrigendum dated 15 March 2012 Rs.100/- per student is paid for sending the license by post as particular fee &amp; postage charges. <br> <br>",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "1) If the trainee is not living at headquarters during the training period, the institution should pay Rs.300/- for Driver and Rs.150/- for the Conductor trainee as a stipend."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tnfcr.json",
    "title": "Tagore National Fellowship for Cultural Research",
    "description": "The Scheme \u201cTagore National Fellowship for Cultural Research\u201d has been introduced to invigorate and revitalize the various institutions under the Ministry of Culture (MoC) and other identified cultural institutions in the country, by encouraging Fellows/academicians to affiliate themselves with these institutions to work on projects of mutual interest. With a view to infuse fresh knowledge capital into the institutions, the scheme expects these Fellows/academicians to select specific resources of the institutions to use in their projects and take up research works that are related to the main objectives of these institutions. It is also expected that the research work would enrich the institution with a new creative edge and academic excellence. &gt; **Nodal Institutions (Participating Institutions):** The Scheme shall cover the institutions under the Ministry of Culture (MoC), as listed in the Guidelines, and may cover other such institutions in the future. The scheme will also cover Non-MoC institutions with cultural resources like manuscripts, artifacts, antiquities, books, publications, records, etc., and seek to take advantage of the scheme by engaging distinguished Fellows to work on its resources and also known for its rich publications. The nodal institutions (both MoC and non-MoC) are classified into four groups broadly based on their different areas of specialization, focus, and resources. The classification is as follows: 1. Group-A: Archaeology, Antiquities, Museums &amp;amp; Galleries 2. Group-B: Archives, Libraries and General Fellowship 3. Group-C: Anthropology &amp;amp; Sociology 4. Group D: Crafts, Performing/Visual/Literary Arts &gt; **Scope of the Scheme:** The scope of the Scheme is to enable the identified cultural institutions to engage Fellows of outstanding merit, to work on research projects in order to unravel their unexplored resources. For purposes of convenience, monitoring, accounting, and responsibility, one of the institutions listed above would be the \u2018Nodal Institution\u2019 for each project, and the Fellows will be attached/anchored to that institution. &gt; **Duration of the Fellowship:** - The duration of the Fellowship will be for a maximum period of two years. - In exceptional cases, the institution may recommend to the NSC an extension for a period of up to one more year, or a reduction to somewhat less than two years, if it is supported by its assessment of the quality of the work undertaken. However, in the case of extension, the fellow won\u2019t be eligible for any remuneration including contingency. - The award of the Fellowship will commence from the date of joining and the \u2018months\u2019 and \u2018years\u2019 will be reckoned accordingly. &gt; **Number of Fellowships:** - The scheme envisages the granting of up to 15 Fellowships in a year. - Each nodal institution can be awarded 1 Fellowship in a year. However, the MoC has the discretionary power to relax these numbers. &gt; **Administration of the Scheme:** The total number of Fellowships administered by the institutions may be decided by the Ministry of Culture from time to time, in consultation with the participating institutions. This will be based on certain criteria such as the size of its untapped holdings, physical facilities already existing in the institution, the capacity of the institution to guide and inspire the Fellows to get the best out of them, its past record in publication and research, need for research/study in a particular area, etc. An amount of up to 2% of the total allocation may be set aside for meeting expenses related to the administration of the scheme including monitoring, implementation, inspection, review, etc. of the research work carried out by the Fellows, through outsourcing or Consultants.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Honorarium:"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tnscr.json",
    "title": "Tagore National Scholarship for Cultural Research",
    "description": "The Scheme \u201cTagore National Scholarship for Cultural Research\u201d has been introduced to invigorate and revitalize the various institutions under the Ministry of Culture (MoC) and other identified cultural institutions in the country, by encouraging scholars/academicians to affiliate themselves with these institutions to work on projects of mutual interest. With a view to infusing fresh knowledge capital into the institutions, the scheme expects these scholars/academicians to select specific resources of the institutions to use in their projects and take up research works that are related to the main objectives of these institutions. It is also expected that the research work would enrich the institution with a new creative edge and academic excellence. &gt; **Nodal Institutions (Participating Institutions):** The Scheme shall cover the institutions under the Ministry of Culture (MoC), as listed in the [Guidelines](https://www.indiaculture.gov.in/sites/default/files/Schemes/TNFCR%20Guidelines_14-07-2023_17072023.pdf), and may cover other such institutions in the future. The scheme will also cover Non-MoC institutions with cultural resources like manuscripts, artifacts, antiquities, books, publications, records, etc., and seek to take advantage of the scheme by engaging distinguished Scholars to work on its resources and also known for its rich publications. The nodal institutions (both MoC and non-MoC) are classified into four groups broadly based on their different areas of specialization, focus, and resources. The classification is as follows: 1. Group-A: Archaeology, Antiquities, Museums &amp;amp; Galleries 2. Group-B: Archives, Libraries and General Scholarship 3. Group-C: Anthropology &amp;amp; Sociology 4. Group D: Crafts, Performing/Visual/Literary Arts &gt; **Scope of the Scheme:** The scope of the Scheme is to enable the identified cultural institutions to engage Scholars of outstanding merit, to work on research projects in order to unravel their unexplored resources. For purposes of convenience, monitoring, accounting, and responsibility, one of the institutions listed above would be the \u2018Nodal Institution\u2019 for each project, and the Scholars will be attached/anchored to that institution. &gt; **Duration of the Scholarship:** - The duration of the Tagore Scholarship is up to 2 years. - In exceptional cases, the institution may recommend to the NSC an extension for a period of up to one more year, or a reduction to somewhat less than two years, if it is supported by its assessment of the quality of the work undertaken. However, in the case of extension, the Scholar won\u2019t be eligible for any remuneration including contingency. - The award of the Scholarship will commence from the date of joining and the \u2018months\u2019 and \u2018years\u2019 will be reckoned accordingly. &gt; **Number of Scholarships:** - The scheme envisages the granting of up to 25 Scholarships in a year. - Each nodal institution can be awarded 1 Scholarship or a maximum of 2 scholarships in a year. However, the MoC has the discretionary power to relax these numbers. &gt; **Administration of the Scheme:** The total number of Scholarships administered by the institutions may be decided by the Ministry of Culture from time to time, in consultation with the participating institutions. This will be based on certain criteria such as the size of its untapped holdings, physical facilities already existing in the institution, the capacity of the institution to guide and inspire the Scholars to get the best out of them, its past record in publication and research, need for research/study in a particular area, etc. An amount of up to 2% of the total allocation may be set aside for meeting expenses related to the administration of the scheme including monitoring, implementation, inspection, review, etc. of the research work carried out by the Scholars, through outsourcing or Consultants.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tnsfdcis.json",
    "title": "The NSFDC Internship Scheme ",
    "description": "&quot;The NSFDC Internship Scheme 2024&quot; is implemented by the National Scheduled Castes Finance &amp; Development Corporation, Ministry of Social Justice &amp; Empowerment, Government of India. This scheme provides a platform for students to gain practical experience and understand the operations of a Central Public Sector Enterprise (CPSE) involved in socio-economic development schemes for scheduled caste communities in India. The internship will expose students to various programs and schemes undertaken by NSFDC, offering them hands-on experience in a professional environment. <br> ***Two types of the Internship programme:*** - Summer Internship (commencing every year from April to August) - Winter Internship (commencing every year from October to February)",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "NOTE: The internship is unpaid, and no financial incentives, stipend, or travel allowances are provided."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "tujtpft.json",
    "title": "AICTE- TECHNICAL UNIVERSITY JOINT TRAINING PROGRAMS FOR TEACHERS",
    "description": "AICTE- Technical University Joint Training Programs for Teachers, launched by the All India Council for Technical Education, aims to provide financial assistance to the technical universities to conduct training for faculty members to prepare them for being successful in the chosen profession and thereby enabling an improvement in teaching-learning methodology. **Duration/Type/Participants:** The training program will be of six days\u2019 residential program with minimum forty participants. **Number of Programs:** The university shall conduct 10 such training programs in a financial year. **Types of training:** Each such programs shall cover at least one of the subjects run by the university viz Civil, Mechanical, Electrical, Electronics, Computers, Physics and Chemistry etc. Minimum one session of 3 hours in each program may be kept for training related to Moral Values, Ethics, Behavioral Sciences &amp;amp; Attitude etc. Technical Universities preferably may also use any of the following as the preferred subjects for the program. 1. Examination reforms. 1. Mentor&amp;#39;s Training as per the norms of NITTT. 1. Cognitive skills &amp;amp; Design thinking. 1. NBA Accreditation &amp;amp; the processes. 1. Identifying problems &amp;amp; double diamond approach towards design. 1. Model curriculum as prescribed by AICTE. 1. Induction program for students as prescribed by AICTE. 1. Intellectual property management at early stage of innovation &amp;amp; start - ups. 1. Frugal innovations &amp;amp; social entrepreneurship. **Infrastructure:** Being a residential program, the university shall have requisite infrastructure viz. guest house and dining hall etc. **Role and responsibilities of technical university:** - The university shall conduct the joint training program for teachers strictly in accordance with the provisions of the scheme/MoU related to the program. - The university will do the certification of these programs jointly with AICTE. It shall be ensured by the - university that the certificates shall be issued only to those participants, who qualify the test to be necessarily conducted at the end. - The university will act as the facilitator for the operation of the training program. - The university will be accountable for finance/ grants sanctioned under the scheme and shall abide by the terms and conditions stipulated by AICTE for financial grants. - The university will constitute a Project Monitoring committee for effective implementation of the scheme.AICTE will provide its representative as a member on that committee. - The university shall submit, yearly report, detailed statement of expenditure and Utilization Certificate, in the prescribed format for sanctioned grants, within a month after the end of each financial year duly audited by a certified Chartered Accountant firm. The accounts shall be open to inspection by the officials of AICTE and an audit by the Statutory Auditors. - After conduct of each of the training program, the documents stated in 1.8 above shall be submitted by the university to AICTE.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "usttad.json",
    "title": "Upgrading the Skills and Training in Traditional Arts/Crafts for Development",
    "description": "The Upgrading the Skills and Training in Traditional Arts/Crafts for Development (USTTAD) scheme is a program launched by the Ministry of Minority Affairs, Government of India, in 2015. The scheme aims to preserve the rich heritage of traditional arts and crafts of minorities and to provide employment opportunities to minority youth in these sectors. **Objective** 1. To build capacity of master craftsmen/artisans. 1. Training of young generation through the master craftsmen/ artisans for traditional arts/crafts. 1. Preservation of rich heritage of the traditional arts and crafts of minorities. 1. To establish linkages of traditional skills with the global market. 1. To improve employability of existing workers, school dropouts etc. 1. To generate means of better livelihood for marginalized minorities and bring them in the mainstream. 1. To enable minorities to avail opportunities in the growing market. 1. To ensure dignity of labour. 1. Research and development in traditional arts/crafts. **The USTTAD scheme covers a wide range of traditional arts and crafts, including:** 1. Handloom weaving 1. Carpet weaving 1. Embroidery 1. Pottery 1. Metalwork 1. Wood carving 1. Stone carving 1. Painting 1. Sculpture 1. Calligraphy 1. Music 1. Dance Under this, master craftsmen and artisans are provided with training to upgrade their skills and to become trainers. They then train minority youth in the traditional arts and crafts. The scheme also provides support for the development of market linkages for the products of the trained artisans. <br> The USTTAD scheme is implemented through Project Implementing Agencies (PIAs), which are non-governmental organizations (NGOs) with experience in the field of skill development and traditional arts and crafts. The PIAs are responsible for identifying and recruiting master craftsmen and artisans, developing course modules, and providing training to minority youth. <br> The USTTAD scheme has benefited thousands of minority youth across India. The scheme has helped to preserve traditional arts and crafts and to provide employment opportunities to minority youth.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "va.json",
    "title": "Visitor's Award ",
    "description": "Visitor&#39;s Award under the Department of Higher Education provided To encourage excellence through competition. These awards would help to promote healthy competition amongst Faculties/Students of the Central Universities and motivate them to adopt best practices from around the world in the pursuit of excellence. <br> > **Under the Visitor&#39;s Award, there are three categories:** 1. For Innovation. 1. For Research. 2.1. Humanities, Arts and Social Sciences. 2.2. Physical Sciences. 2.3. Biological Sciences. 1. For Technology Development. <br> > **Who can nominate?** - Vice Chancellor/Dean/ Director/Professor of nominee&#39;s University. <br> > **Selection Process** - The selection committee will invite online nominations in the prescribed formats in the web portal. The selection committee will devise its procedure to select the awardees, which will be put in the relevant portal. A panel of awardees would be prepared by a Selection Committee for final selection by the President, in the capacity of Visitor of Central University. <br> > **Ceremony Details** - The awards shall be presented by the President of India at the time of Annual Conference of the Vice Chancellors of Central Universities or in the Visitor\u2019s Conference held annually.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "vaibhav.json",
    "title": "VAIshwik BHArtiya Vaigyanik (VAIBHAV) Fellowship",
    "description": "The \u201cVaishvik Bharatiya Vaigyanik (VAIBHAV) Fellowship\u201d is a new programme which is implemented by the Department of Science &amp;amp; Technology, Ministry of Science and Technology, Government of India. This programme envisages collaboration between scientists of the Indian Diaspora with Indian Higher Educational Institutions (HEIs), Universities and/or Public Funded Scientific Institutions. The VAIBHAV Fellow would identify an Indian Institution for collaboration and may spend up to two months in a year for a maximum of 3 years. **Research areas under which applications may be submitted:** Proposals are sought in select identified verticals and horizontals of VAIBHAV (as mentioned in the preamble): 1. Quantum Technologies: Quantum Communication; Quantum Computing; Quantum Sensing and Metrology; Quantum Materials and Devices 1. Artificial Intelligence and Machine Learning: Foundation of AI/ML; AI/ML and Signals; AI for Social Good; AI and Robotics 1. Computational Sciences: High-Performance Computing Architectures; Computational Atmospheric Sciences; Cyber-Physical Systems 1. Data Sciences: Data Science Project Management; Data Science Infrastructure, Deployment and Hosting; Data Privacy and Security; Data Science Education; Data Science Applications 1. Photonics: Photonic Devices; Optical Imaging and Bio-photonics; Photonic Materials and Sources; Nano-photonics; Integrated Photonics and Communication 1. Energy: Future Electricity Systems; Sustainable Mobility Technologies; Advanced Fossil Technologies; Sustainable Future Fuels 1. Electronics and Semiconductor Technologies: Semiconductor Materials and Process Technologies; Semiconductor Devices: Physics and Technology; Electronic Circuits and System Design 1. Communication Technologies: Cellular Evolution 5G and Beyond (THz Comm); Communication Technologies for IoT/CPS; High-Speed Optical Communication \u2013 backbone networks; Cognitive Technologies for Futuristic Communication 1. Aerospace Technologies: Aerospace Systems and Design; Propulsion Technologies; Flight Structure and Integrity; Modeling and Simulations; Unmanned Aerial Systems and Countermeasures 1. Materials and Processing Technologies: Structural Materials; Materials Recycling &amp;amp; Purification; Advanced &amp;amp; Functional Materials; Catalytic Materials &amp;amp; Processes; Computational Materials Science 1. Earth Sciences: Atmospheric Science; Polar Science; Ocean Science/Technology; Geo Science/Technology 1. Environmental Sciences: Air Quality Management; Water Quality Management; Soil and Waste Management; Carbon Sequestration and Biodiversity Conservation; Climate Change 1. Advanced Manufacturing Technologies: Smart Manufacturing, IoT, Digital Manufacturing; Additive Manufacturing; Precision/Micro-nano Manufacturing/Surface Engineering; Industrial Machines, Robotics/Automation; Speciality Products Manufacturing 1. Health, Medical Sciences and Biomedical Devices: Advanced Technologies in Health Care; Precision Health; Holistic Health; Remote and Rural Health - Reaching the Unreached 1. Pharmaceuticals and Bio-Technology: Biotherapeutics and Biosimilars; Industrial Biotechnology; Infectious Diseases/ Disease biology; Drug Discovery, Repurposing and Drug delivery 1. Agricultural Sciences: Precision Agriculture; Sustainable and Climate Smart Agriculture; Food Safety and Nutritional Security; Climate Resilient Livestock, Veterinary Therapeutics and Zoonoses control, Nanotechnology in sustainable agriculture and metabolic biology, Modern Fisheries and Aquaculture and seed production, Genome editing, Robotics, farm automation, Digital Agriculture 1. Social Sciences for SDGs: Behavioral Community Approaches &amp;amp; its impact on Societal Development; Societal aspect of Technology Development with cause; Socio-Economic aspect of Development 1. Management: Fostering academic collaborations; Mechanisms to increase R&amp;amp;D outputs from Indian institutions; Business innovation; Entrepreneurship for growth; Management of New-Age (Knowledge) Organizations; Making India R&amp;amp;D center of the world / Making India Center of Practice-Oriented Management Knowledge",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "vajra.json",
    "title": "Visiting Advanced Joint Research Faculty Scheme",
    "description": "\u201cVisiting Advanced Joint Research (VAJRA) Faculty Scheme\u201d was launched by the Department of Science and Technology, Government of India to bring a strong international connection to the R&amp;amp;D ecosystem of India. The scheme offers adjunct/visiting faculty assignments to overseas scientists, faculty members, and R&amp;amp;D professionals including Non-resident Indians (NRI) and Overseas Citizens of India (OCI) to undertake high-quality collaborative research in publicly funded academic and research Institutions of India. VAJRA Faculty will engage in collaborative research in cutting-edge areas of science and technology including interdisciplinary areas of priority such as energy, water, health, security, nutrition, materials and manufacturing, etc. with one or more Indian Collaborators. VAJRA Faculty is expected to co-guide research students and may also be involved in technology development, innovation, start-ups, etc. The Science and Engineering Research Board (SERB), a Statutory body of the Department will implement the Scheme.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "vetls.json",
    "title": "Vocational Education and Training Loan Scheme",
    "description": "The Vocational Education and Training Loan Scheme provides financial assistance to the youth of the target group to enhance their skills and employability. <br> > **Expenses to be Considered for Vocational Education and Training Course** 1. Admission/Tuition fee 1. Examination, Library, and Laboratory Fee 1. Caution Deposit 1. Purchase of Books, Equipment, and Instruments 1. Boarding and Lodging 1. Insurance for loan amount 1. Any other reasonable expenses found necessary for the completion of the course certified by the vocational education and training institute.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Quantum of loan",
      "Note: In case of cost over-run, it shall be borne by the beneficiary.",
      "Interest",
      "National Safai Karamcharis Finance & Development Corporation (NSKFDC) shall charge interest @ 1% per annum from the Channelizing Agency which, in turn, shall charge 4% per annum from the beneficiaries. In the case of women, an interest rebate of 0.5% shall be provided.",
      "Repayment: Up to 7 years."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "vnmatv.json",
    "title": "Vasantrao Naik Merit Awards To The Vjnt Students Who Came First In State Or First In Board Of 10th And 12th Standard Examination",
    "description": "Vasantrao Naik Merit Awards to the VJNT students who came First in State or First in the Board of 10th and 12th Standard Examination Scheme Announced by the Government Of Maharashtra to Scheme to motivate VJNT students for Higher Education.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "vpseit.json",
    "title": "MeitY - Visvesvaraya PhD Scheme For Electronics & IT",
    "description": "A scholarship scheme by the Ministry of Electronics and Information Technology with an objective to enhance the number of PhDs in Electronics System Design &amp; Manufacturing (ESDM) and IT/IT Enabled Services (IT/ITES) sectors in the country. Cabinet Committee on Economic Affairs (CCEA) approved the scheme in 2014 for a period of nine years with a total estimated cost of \u20b9 466 crores. The duration of the scheme is five years for the purpose of selecting candidates for support under the scheme. However, the funding would be continued till the 9th year for the commitments already made during the scheme period. <br> > **Objectives:** 1. To enhance the number of PhDs in Electronics System Design &amp; Manufacturing (ESDM) and IT/IT Enabled Services (IT/ITES) sectors in the country. 1. Give thrust to R&amp;D, create an innovative ecosystem and enhance India\u2019s competitiveness in these knowledge-intensive sectors. 1. To fulfill the commitments made in National Policy on Electronics (NPE 2012) and National Policy on Information Technology (NPIT 2012) which recommend giving special thrust on significantly increasing the number of PhDs in the country to enable India to compete globally in the coming decades, to develop an ecosystem of research, development and IP creation in these knowledge-intensive sectors. 1. To Support 1500 Ph.D. Candidates including both Full-Time (500) and Part-Time (1000) in each of the ESDM and IT/ITES sectors (Total: 3000 PhDs). 1. The scheme is also expected to encourage working professionals and non-PhD faculty members to pursue Ph.D. <br> > **Salient features of the Ph.D. scheme are as follows:** 1. This Scheme provides 25% more fellowship amount than most of the other Ph.D. Schemes. 1. The scheme also provides an infrastructural grant of \u20b9 5,00,000/- per candidate to the academic institutions for the creation/ up-gradation of laboratories. 1. Part-time Ph.D. candidates get a one-time incentive on completion of the Ph.D. 1. The scheme also supports 200 Young Faculty Research Fellowships in the areas of ESDM and IT/ITES with the objective to retain and attract bright young faculty members in these sectors.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Full-Time Ph.D. Candidates",
      "Part-Time Ph.D. Candidates",
      "Young Faculty Research Fellowship(YFRF)",
      "1) Equipment, manpower, and other similar expenses of relevance to support the research work of the \u2018Young Faculty Research Fellow (YFRF)\u2019 could be met from the Research/ Contingency Grant of Rs. 5 Lakhs/year.",
      "2) The research contingency grant of Rs. 5 Lakh/year may also be utilized by the YFRF awardee towards attending the International Conference by the researchers working under his/her guidance for presenting a paper in which the researcher (working with the YFRF awardee) is a co-author with him/her (the YFRF awardee) and the YFRF awardee he/her self is not attending the same event. The above clarification is to facilitate the use of the Grant rather than to limit the wisdom/freedom of the \u2018Young Faculty Research Fellow\u2019 i.r.o. the use of the grant for the furtherance of the research work.",
      "3) The unspent balance in a particular year under \u201cResearch Contingency grant/support\\\" for each YFRF may be carried forward to the next year, till the time the YFRF is supported under the scheme at the Institute."
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "wiser.json",
    "title": "Women Involvement in Science and Engineering Research",
    "description": "The scheme \u201cWomen Involvement in Science and Engineering Research (WISER)\u201d aims to build scientific capacity, retain and promote women researchers in India &amp;amp; Germany by utilising complementary expertise in science, technology, innovation and research partnerships. This scheme is designed for women researchers holding a regular/long-term research position in academia/research institute/industry in India or Germany. Indo-German Science &amp;amp; Technology Centre (IGSTC), established by the Department of Science &amp;amp; Technology (DST), Government of India and the Federal Ministry of Education and Research (BMBF), Government of Germany invites applications from women researchers in India/Germany to participate and collaborate in an ongoing R&amp;amp;D&amp;amp;I project without applying for fresh project grant in partnering countries. &gt; **Objective:** This programme intends to: - Enhance the representation and progression of women researchers in Science, Technology, Engineering and Mathematics (STEM). - Bring gender equity and inclusion in STEM research. - Create avenues for networking, interaction and long-term research collaboration. - Improve existing projects by adding an additional research component to get new and better results. - Promote women to lead consortium-based bilateral projects for IGSTC programmes and other funding schemes. &gt; **Tenure:** The tenure of the grant is for 3 years or till completion of the project whichever is earlier and will cover one visit per year for a short stay up to 1 month.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "wmcl.json",
    "title": "Welfare Measures for Children of Labourers",
    "description": "The scheme &amp;quot;Welfare Measures for Children of Labourers&amp;quot; is a Sub-Component of the Scheme &amp;quot;Integrated Coffee Development Project During the Medium Term Framework (MTF) Period: Development Support to Stakeholders&amp;quot; by the Coffee Board, Department of Commerce, Ministry of Commerce and Industry. This scheme aims to provide welfare measures in the form of educational stipends, incentives for academic excellence, and financial support for higher education to the children of SC/ST (Scheduled Caste/Scheduled Tribe) labourers who demonstrate exceptional academic performance and pursue higher education after completing the 10th grade, thus enhancing their educational prospects.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [
      "Educational Stipends",
      "\u20b92,250 per student",
      "Incentive Award (in addition to \u20b92,250/- Educational Stipend)",
      "For Boys: \u20b91,000; For Girls: \u20b91,500",
      "Financial Assistance",
      "Traditional Courses (Arts, Science, Commerce, etc.)",
      "(a) Graduation: \u20b93,750 per student",
      "(b) Post-Graduation: \u20b97,500 per student",
      "Professional Courses",
      "(a) Medical Sciences: \u20b97,500 per student",
      "(b) Agriculture and allied Sciences / Animal Husbandry / Engineering / Pharmacy / Nursing / Other Equivalent Professional Degree Courses: \u20b97,500 per student"
    ],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  },
  {
    "id": "wos-a.json",
    "title": "Women Scientist Scheme-A",
    "description": "A Research Grant by MoST for female candidates to pursue research in frontier areas of science and engineering, preferably those having a break in career (minimum two years) and not having regular employment, to explore possibility of re-entry into the profession. <br> This scheme will provide a research grant for a well-defined project proposal for a period of maximum three years. This grant will cover the fellowship of the applicant and cost of small equipments, contingencies, travel, consumables, etc. Institutional overhead charges will be extra. <br> The support is available in 5 disciplines under WOS-A namely, i) Physical &amp; Mathematical Sciences (PMS), ii) Chemical Sciences (CS), iii) Life Sciences (LS), iv) Earth &amp; Atmospheric Sciences (EAS), and v) Engineering Technology (ET). <br> The scheme plays pivotal role in gender mainstreaming as it not only prevents brain drain from S&amp;T system but also train and retain women in the system. The scheme initially offers opportunity to work as bench-level scientists and ultimately open new avenues for permanent position in Science &amp; Technology.",
    "eligibilityCriteria": {
      "maxAge": 20
    },
    "benefits": [],
    "applicationLink": "https://example.com",
    "state": "Maharashtra"
  }
];