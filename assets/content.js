window.courseGroups = ["Research methods", "Feedback cycles", "Human capabilities", "Needfinding", "Design alternatives", "Prototyping and evaluation", "Course overview", "Principles in context", "Applications and next steps"];
window.courseNotes = {
  "home": {
    "title": "Course notes",
    "folder": "Knowledge base",
    "path": "/wiki/README.md",
    "summary": "CS6750 Human–Computer Interaction",
    "links": [
      "course-map",
      "reading-guide",
      "validity",
      "reliability",
      "external-validity",
      "variables",
      "qualitative-quantitative",
      "feedback-cycles",
      "gulf-execution",
      "gulf-evaluation",
      "direct-manipulation",
      "recognition-recall",
      "cognitive-load",
      "mental-models",
      "needfinding",
      "survey",
      "interviews",
      "observation",
      "bias",
      "planning",
      "brainstorming",
      "task-analysis",
      "fidelity",
      "horizontal-vertical",
      "evaluation",
      "introduction",
      "design-principles",
      "representations",
      "distributed-cognition",
      "interfaces-politics",
      "principles-recap",
      "ethics",
      "heuristic-evaluation",
      "cognitive-walkthrough",
      "agile",
      "methods-recap",
      "technologies",
      "ideas",
      "domains",
      "next-steps"
    ]
  },
  "validity": {
    "title": "Internal validity",
    "folder": "Research methods",
    "lesson": "3.1",
    "path": "/wiki/research-methods/internal-validity.md",
    "summary": "Is the observed effect due to the test conditions?",
    "links": [
      "reliability",
      "variables",
      "external-validity"
    ],
    "source": "I. S. MacKenzie, Human–Computer Interaction: An Empirical Research Perspective, Chapter 4, Scientific Foundations, section 4.6. Study summary of the assigned reading.",
    "body": "<h2>Key idea</h2><p>Internal validity concerns whether an observed effect can be attributed to the test conditions rather than another source of variation. A comparison becomes harder to interpret when the groups, tasks, setting, or practice differ along with the interface. Define the outcome and the competing explanations before collecting data.</p><h2>Example</h2><p>If one navigation design always appears last, practice with the notes may explain better performance. Keep the task and material comparable, and vary presentation order. <a class=\"inline-link\" href=\"#variables\" data-page=\"variables\">Variables and measures</a> helps identify what changes and what is recorded.</p><h2>Check your understanding</h2><p>Could an alternative explanation account for the difference? How would you distinguish it from an effect of the interface? Consistent measurement is useful, but <a class=\"inline-link\" href=\"#reliability\" data-page=\"reliability\">reliability</a> alone does not establish a causal claim.</p><p class=\"source-note\">Source: I. S. MacKenzie, Human–Computer Interaction: An Empirical Research Perspective, Chapter 4, Scientific Foundations, section 4.6. Study summary of the assigned reading.</p>"
  },
  "reliability": {
    "title": "Reliability",
    "folder": "Research methods",
    "lesson": "3.1",
    "path": "/wiki/research-methods/reliability.md",
    "summary": "Consistency of measurement across observations.",
    "links": [
      "validity",
      "qualitative-quantitative",
      "survey"
    ],
    "source": "CS6750 research-methods study note; synthesis of Lesson 3.1 and the assigned scientific-foundations reading.",
    "body": "<h2>Key idea</h2><p>Reliability is about consistency. A measure should not change unpredictably because its instructions, coding, or collection process changed. Reliable results can still fail to measure the intended construct or support a causal interpretation. Consider reliability alongside <a class=\"inline-link\" href=\"#validity\" data-page=\"validity\">internal validity</a>.</p><h2>Example</h2><p>Two researchers classify navigation difficulties using the same categories. If they interpret “lost my place” differently, theme counts can depend on the coder. Define the categories, compare interpretations, and retain the original responses for review.</p><h2>Check your understanding</h2><p>If you repeated this measurement under comparable conditions, what might change? Is the variation due to people, the instrument, or how the evidence was recorded?</p><p class=\"source-note\">Source: CS6750 research-methods study note; synthesis of Lesson 3.1 and the assigned scientific-foundations reading.</p>"
  },
  "external-validity": {
    "title": "External validity",
    "folder": "Research methods",
    "lesson": "3.1",
    "path": "/wiki/research-methods/external-validity.md",
    "summary": "How far do results generalize to other users and settings?",
    "links": [
      "validity",
      "variables",
      "evaluation"
    ],
    "source": "I. S. MacKenzie, Human–Computer Interaction: An Empirical Research Perspective, Chapter 4, section 4.6. Study summary of the assigned reading.",
    "body": "<h2>Key idea</h2><p>External validity concerns how well a result generalizes beyond the studied people, tasks, and circumstances. A tightly controlled comparison can answer a narrow question while leaving everyday use uncertain. Realistic settings can also introduce variation that makes causal interpretation harder.</p><h2>Example</h2><p>Classmates who regularly use Markdown may understand a page tree differently from people new to file-based notes. Report who participated and what they did. Do not treat reactions to screenshots as evidence of long-term productivity.</p><h2>Check your understanding</h2><p>Which people and situations does the evidence actually cover? What would need to be studied before extending the conclusion?</p><p class=\"source-note\">Source: I. S. MacKenzie, Human–Computer Interaction: An Empirical Research Perspective, Chapter 4, section 4.6. Study summary of the assigned reading.</p>"
  },
  "variables": {
    "title": "Variables and measures",
    "folder": "Research methods",
    "lesson": "3.1",
    "path": "/wiki/research-methods/variables-and-measures.md",
    "summary": "Connect a research question to what changes and what is observed.",
    "links": [
      "validity",
      "external-validity",
      "evaluation"
    ],
    "source": "CS6750 assigned research-methods readings: MacKenzie, Chapters 4–5. Study summary of experimental variables and measurement.",
    "body": "<h2>Key idea</h2><p>An independent variable identifies a condition or factor being compared. A dependent variable records an outcome. Operational definitions describe how a concept such as success, error, or ease is measured. A confounding variable changes systematically with the condition and offers another explanation.</p><h2>Example</h2><p>In a navigation comparison, interface alternative is the condition. Outcomes could include whether a participant reaches the target page, the number of wrong turns, or a reported ease rating. These are different measures; a preference rating is not a measured completion time.</p><h2>Check your understanding</h2><p>Write one research question, name the condition, and define the outcome precisely. What factors should remain comparable?</p><p class=\"source-note\">Source: CS6750 assigned research-methods readings: MacKenzie, Chapters 4–5. Study summary of experimental variables and measurement.</p>"
  },
  "qualitative-quantitative": {
    "title": "Qualitative and quantitative data",
    "folder": "Research methods",
    "lesson": "3.1",
    "path": "/wiki/research-methods/qualitative-and-quantitative-data.md",
    "summary": "Use different evidence to understand what happened and why.",
    "links": [
      "survey",
      "reliability",
      "evaluation"
    ],
    "source": "CS6750, Lesson 3.1. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>Quantitative data are numerical observations such as counts, durations, or ordered ratings. Qualitative data include descriptions, observations, and participants’ explanations. The choice depends on the question. Combining them can reveal both a pattern and the reasoning behind it.</p><h2>Example</h2><p>A survey may show that several respondents report difficulty returning to a page. Their written accounts can distinguish losing a browser tab, forgetting a title, and not understanding the navigation. Counting a theme summarizes it numerically without replacing its meaning.</p><h2>Check your understanding</h2><p>What does each measure let you conclude? Keep missing answers and “cannot judge” separate from ordinary scale values, and report the denominator for each summary.</p><p class=\"source-note\">Source: CS6750, Lesson 3.1. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "feedback-cycles": {
    "title": "Feedback cycles",
    "folder": "Feedback cycles",
    "lesson": "2.2",
    "path": "/wiki/feedback-cycles/feedback-cycles.md",
    "summary": "Connect goals, actions, system response, and interpretation.",
    "links": [
      "gulf-execution",
      "gulf-evaluation",
      "direct-manipulation"
    ],
    "source": "CS6750, Lesson 2.2. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>A person acts toward a goal, observes the response, interprets what happened, and decides whether the goal has been reached. The next action depends on that evaluation. An interface helps by making available actions understandable and making the resulting state observable.</p><h2>Example</h2><p>Opening a note changes the title, selected page, and document content. Those signals help the person recognize what opened. The <a class=\"inline-link\" href=\"#gulf-execution\" data-page=\"gulf-execution\">gulf of execution</a> concerns choosing and performing the action; the <a class=\"inline-link\" href=\"#gulf-evaluation\" data-page=\"gulf-evaluation\">gulf of evaluation</a> concerns understanding its result.</p><h2>Check your understanding</h2><p>Choose an everyday interaction. What is the goal, what action is taken, and what information tells the person whether it worked?</p><p class=\"source-note\">Source: CS6750, Lesson 2.2. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "gulf-execution": {
    "title": "Gulf of execution",
    "folder": "Feedback cycles",
    "lesson": "2.2",
    "path": "/wiki/feedback-cycles/gulf-of-execution.md",
    "summary": "From a goal to intentions, actions, and execution.",
    "links": [
      "feedback-cycles",
      "gulf-evaluation",
      "recognition-recall"
    ],
    "source": "CS6750, Lesson 2.2. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>The gulf of execution is the gap between what someone wants to accomplish and the actions the interface makes possible. The user must translate a goal into intentions, identify an action, and carry it out. Discoverable functions, understandable labels, familiar conventions, and safe exploration can help.</p><h2>Example</h2><p>A student wants to revisit a saved explanation but does not remember its filename. A visible topic list may help identify an action; search may help when a keyword is known. Which approach helps depends on the person and the task.</p><h2>Check your understanding</h2><p>Can the person determine what actions are available and predict their effects? Distinguish knowing what to do from being able to physically perform it.</p><p class=\"source-note\">Source: CS6750, Lesson 2.2. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "gulf-evaluation": {
    "title": "Gulf of evaluation",
    "folder": "Feedback cycles",
    "lesson": "2.2",
    "path": "/wiki/feedback-cycles/gulf-of-evaluation.md",
    "summary": "From system output to understanding whether the goal was met.",
    "links": [
      "feedback-cycles",
      "gulf-execution",
      "mental-models"
    ],
    "source": "CS6750, Lesson 2.2. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>The gulf of evaluation is the gap between the system’s response and the person’s understanding of it. The person must perceive the output, interpret what it means, and compare that state with the original goal. Feedback should be noticeable, timely, and understandable.</p><h2>Example</h2><p>After following a link, a changed page title and selected item can indicate which note opened. A breadcrumb can expose its location. These cues may help orientation, but their usefulness should be checked through <a class=\"inline-link\" href=\"#evaluation\" data-page=\"evaluation\">evaluation</a>.</p><h2>Check your understanding</h2><p>What output would tell the person that the action succeeded? Could the same output be interpreted in more than one way?</p><p class=\"source-note\">Source: CS6750, Lesson 2.2. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "direct-manipulation": {
    "title": "Direct manipulation",
    "folder": "Feedback cycles",
    "lesson": "2.3",
    "path": "/wiki/feedback-cycles/direct-manipulation.md",
    "summary": "Make the object, the action, and the visible effect closely connected.",
    "links": [
      "gulf-execution",
      "gulf-evaluation",
      "recognition-recall"
    ],
    "source": "CS6750, Lesson 2.3. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>Direct manipulation supports interaction with visible representations of task objects, with closely connected feedback. The person can see what is being acted on and how the state changes. Directness concerns the effort of expressing an intention and interpreting the result, rather than simply whether a mouse is used.</p><h2>Example</h2><p>Selecting a visible page title and seeing that note open creates a close connection between action and result. Moving a file by dragging it between folders is another familiar example. Undo or a clear return path supports exploration.</p><h2>Check your understanding</h2><p>Which task objects are visible? How quickly can the person observe the effect of an action and recover from an unintended change?</p><p class=\"source-note\">Source: CS6750, Lesson 2.3. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "recognition-recall": {
    "title": "Recognition and recall",
    "folder": "Human capabilities",
    "lesson": "2.4",
    "path": "/wiki/human-capabilities/recognition-and-recall.md",
    "summary": "Use visible cues to reduce the need to remember information.",
    "links": [
      "cognitive-load",
      "mental-models",
      "gulf-execution"
    ],
    "source": "CS6750, Lesson 2.4. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>Recall requires retrieving information without it being present. Recognition lets a person identify something among available cues. Interfaces can reduce memory demands by making relevant choices, previous states, and examples visible. A long or poorly organized list can still make recognition difficult.</p><h2>Example</h2><p>A person may recognize “Internal validity” in a topic list even when they cannot recall the filename. Recent pages can support returning to a note, while too many similarly named entries can make that choice harder.</p><h2>Check your understanding</h2><p>What does the interface require the user to remember? Which cues could make that information available at the moment it is needed?</p><p class=\"source-note\">Source: CS6750, Lesson 2.4. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "cognitive-load": {
    "title": "Cognitive load",
    "folder": "Human capabilities",
    "lesson": "2.4",
    "path": "/wiki/human-capabilities/cognitive-load.md",
    "summary": "Reserve attention for the task rather than managing the interface.",
    "links": [
      "recognition-recall",
      "mental-models",
      "task-analysis"
    ],
    "source": "CS6750, Lesson 2.4. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>People have limited cognitive resources. The interface, the task, distractions, and the environment compete for them. Reducing unnecessary navigation or memory demands can leave more attention for understanding the content. The right support depends on the context and the person’s experience.</p><h2>Example</h2><p>While reading a difficult concept, someone may also keep track of the page they came from and the next question they want to ask. A stable navigation context can externalize part of that bookkeeping. More visible controls can also add clutter, so evaluate the tradeoff.</p><h2>Check your understanding</h2><p>What must the person keep in mind at the same time? Which demands belong to the task, and which arise from the interface?</p><p class=\"source-note\">Source: CS6750, Lesson 2.4. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "mental-models": {
    "title": "Mental models",
    "folder": "Human capabilities",
    "lesson": "2.6",
    "path": "/wiki/human-capabilities/mental-models.md",
    "summary": "Understand how people think the system works.",
    "links": [
      "gulf-evaluation",
      "cognitive-load",
      "task-analysis"
    ],
    "source": "CS6750, Lesson 2.6. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>A mental model is a person’s understanding of how a system behaves. It guides expectations, predictions, and recovery. A mismatch between that understanding and the system can create mistakes even when controls are easy to operate. Consistent language and observable effects help people develop a useful model.</p><h2>Example</h2><p>In a linked knowledge base, a reader might expect Back to revisit the previous page, while a folder breadcrumb moves to a structural parent. Making those relationships distinguishable can help the person predict where each action leads.</p><h2>Check your understanding</h2><p>What does the person believe will happen next? Does an error reflect an execution slip or a misunderstanding of the system?</p><p class=\"source-note\">Source: CS6750, Lesson 2.6. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "needfinding": {
    "title": "Needfinding",
    "folder": "Needfinding",
    "lesson": "3.3",
    "path": "/wiki/needfinding/needfinding.md",
    "summary": "Understand users, tasks, context, and workarounds before choosing a solution.",
    "links": [
      "survey",
      "interviews",
      "observation",
      "bias"
    ],
    "source": "CS6750, Lesson 3.3. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>Needfinding investigates the problem space: who the users are, what they are trying to accomplish, where the task occurs, and what resources and constraints matter. Existing workarounds can reveal unmet needs, but the researcher’s own workaround does not represent every user.</p><h2>Example</h2><p>Before choosing a Wiki tab, ask people about a recent occasion when they looked for saved information. How did they begin? How did they move between pages? What worked well, and what caused difficulty? Use <a class=\"inline-link\" href=\"#survey\" data-page=\"survey\">surveys</a> or other methods to investigate.</p><h2>Check your understanding</h2><p>Which unanswered question does each activity address? What evidence might challenge the solution you already have in mind?</p><p class=\"source-note\">Source: CS6750, Lesson 3.3. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "survey": {
    "title": "Survey design",
    "folder": "Needfinding",
    "lesson": "3.3",
    "path": "/wiki/needfinding/survey-design.md",
    "summary": "Connect every question to information the study needs.",
    "links": [
      "needfinding",
      "bias",
      "qualitative-quantitative",
      "reliability"
    ],
    "source": "CS6750, Lesson 3.3. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>A survey gathers comparable responses from multiple people, but its wording, answer choices, recruitment, and length shape the evidence. Begin with the information needed, then write questions that participants can answer. Pilot the instrument and revise confusing items before wider recruitment.</p><h2>Example</h2><p>Ask about a recent page-finding occasion before showing interface alternatives. Provide balanced response options and room for an experience that worked well. Separate reports about past behavior from reactions to a <a class=\"inline-link\" href=\"#fidelity\" data-page=\"fidelity\">prototype</a>.</p><h2>Check your understanding</h2><p>Will you use the answer to every question? Could wording suggest a preferred response? What will you do with missing answers or people outside the target audience?</p><p class=\"source-note\">Source: CS6750, Lesson 3.3. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "interviews": {
    "title": "Interviews and think-alouds",
    "folder": "Needfinding",
    "lesson": "3.3",
    "path": "/wiki/needfinding/interviews-and-think-alouds.md",
    "summary": "Explore goals and reasoning while considering the effect of the method.",
    "links": [
      "needfinding",
      "observation",
      "bias"
    ],
    "source": "CS6750, Lesson 3.3. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>Interviews allow follow-up questions about goals, situations, difficulties, and strategies. A semi-structured plan provides direction while leaving room to explore unexpected information. Think-aloud activities ask a person to describe their reasoning while performing a task.</p><h2>Example</h2><p>Ask a participant to locate a note and explain what they are looking for. Record specific actions separately from interpretations. Speaking aloud can make the person act more deliberately, so do not assume the activity is identical to ordinary use.</p><h2>Check your understanding</h2><p>Which question requires a participant’s explanation? How might your prompts or presence influence that explanation?</p><p class=\"source-note\">Source: CS6750, Lesson 3.3. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "observation": {
    "title": "Observation and workarounds",
    "folder": "Needfinding",
    "lesson": "3.3",
    "path": "/wiki/needfinding/observation-and-workarounds.md",
    "summary": "Watch the task in context and investigate adaptations to the interface.",
    "links": [
      "needfinding",
      "interviews",
      "task-analysis"
    ],
    "source": "CS6750, Lesson 3.3. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>Naturalistic observation records people working in their usual context without directing the activity. It reveals behavior and context but does not directly reveal thoughts. Participant observation involves trying the activity yourself; it can inform questions without making your experience representative.</p><h2>Example</h2><p>Notice whether someone leaves the chat to open a note in an editor, keeps several tabs open, or copies a link into another document. Record what happened first. Ask why through a suitable follow-up method rather than assuming the workaround signals a particular design need.</p><h2>Check your understanding</h2><p>What was directly observed, what did the participant report, and what is your interpretation? Keep those evidence types distinct.</p><p class=\"source-note\">Source: CS6750, Lesson 3.3. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "bias": {
    "title": "Bias in needfinding",
    "folder": "Needfinding",
    "lesson": "3.3",
    "path": "/wiki/needfinding/bias-in-needfinding.md",
    "summary": "Check how expectations, questions, recruitment, and memory shape findings.",
    "links": [
      "survey",
      "needfinding",
      "observation"
    ],
    "source": "CS6750, Lesson 3.3. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>Confirmation bias favors evidence that agrees with expectations. Observer bias can arise through the researcher’s behavior or wording. Social desirability can encourage pleasing answers. Voluntary response can overrepresent strong opinions, and recall can distort accounts of past events.</p><h2>Example</h2><p>A question such as “Would a useful Wiki tab solve your navigation problems?” suggests both a problem and a solution. Ask about actual practices first, include positive experiences, and present alternatives without identifying a preferred one.</p><h2>Check your understanding</h2><p>What could make the evidence appear to support your idea even if users have different needs? Which second method could help check the interpretation?</p><p class=\"source-note\">Source: CS6750, Lesson 3.3. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "planning": {
    "title": "Design life cycle",
    "folder": "Design alternatives",
    "lesson": "3.1",
    "path": "/wiki/design-alternatives/design-life-cycle.md",
    "summary": "Needfinding, design alternatives, prototyping, and evaluation form an iterative process.",
    "links": [
      "needfinding",
      "brainstorming",
      "fidelity",
      "evaluation"
    ],
    "source": "CS6750, Lesson 3.1. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>The design life cycle connects understanding user needs, generating alternatives, making prototypes, and evaluating them with users. The stages inform one another. Evaluation can reveal new needs, and a prototype can expose assumptions that require another round of investigation.</p><h2>Example</h2><p>For knowledge-base navigation, begin with current practices, develop several ways to locate and follow pages, make them concrete, and collect feedback. Use that evidence to choose what to revise rather than treating the first polished screen as the final design.</p><h2>Check your understanding</h2><p>What did the previous activity teach you, and which design decision does that evidence support? Where should the next iteration begin?</p><p class=\"source-note\">Source: CS6750, Lesson 3.1. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "brainstorming": {
    "title": "Brainstorming design alternatives",
    "folder": "Design alternatives",
    "lesson": "3.4",
    "path": "/wiki/design-alternatives/brainstorming-design-alternatives.md",
    "summary": "Generate a range of approaches before deciding what to prototype.",
    "links": [
      "planning",
      "needfinding",
      "fidelity"
    ],
    "source": "CS6750, Lesson 3.4. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>Brainstorming expands the space of possible designs. Generating ideas and evaluating them are different activities. Individual preparation can help preserve a range of perspectives before group discussion. Premature agreement, production blocking, social loafing, and power dynamics can narrow that range.</p><h2>Example</h2><p>Generate different ways to find the same note: a folder tree, a topic index, keyword search, a recent-page trail, or combinations. Explain which user need each idea addresses. All alternatives in a comparison should support the same task.</p><h2>Check your understanding</h2><p>What rules keep the activity open to unexpected ideas? Which criteria, applied after generation, justify selecting the alternatives to prototype?</p><p class=\"source-note\">Source: CS6750, Lesson 3.4. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "task-analysis": {
    "title": "Tasks and task analysis",
    "folder": "Design alternatives",
    "lesson": "2.7",
    "path": "/wiki/design-alternatives/tasks-and-task-analysis.md",
    "summary": "Separate the user’s underlying goal from the current interface actions.",
    "links": [
      "needfinding",
      "gulf-execution",
      "cognitive-load"
    ],
    "source": "CS6750, Lesson 2.7. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>A task describes what a person wants to accomplish. Interface actions describe how a particular system lets them do it. Understanding the underlying purpose can reveal alternatives that would be missed by only rearranging existing buttons. Include physical, cognitive, and social parts of the activity.</p><h2>Example</h2><p>“Find the explanation I saved and compare it with a related concept” is a task. “Ask the agent for a file link” is one way to carry it out. A task analysis can identify locating, opening, interpreting, following a link, and returning as useful subtasks.</p><h2>Check your understanding</h2><p>Why is the person performing each action? Which steps are essential to the goal, and which are consequences of the current interface?</p><p class=\"source-note\">Source: CS6750, Lesson 2.7. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "fidelity": {
    "title": "Prototype fidelity",
    "folder": "Prototyping and evaluation",
    "lesson": "3.5",
    "path": "/wiki/prototyping-and-evaluation/prototype-fidelity.md",
    "summary": "Choose a representation detailed enough to answer the current design question.",
    "links": [
      "horizontal-vertical",
      "evaluation",
      "brainstorming"
    ],
    "source": "CS6750, Lesson 3.5. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>Fidelity concerns the completeness or maturity of a prototype. Early representations can be inexpensive to revise, while more developed prototypes can support more realistic interaction. Representation, precision, interactivity, and scope are related design choices; visual polish alone does not determine what has been tested.</p><h2>Example</h2><p>A paper page tree can explore grouping and labels. A clickable version can support moving between pages and returning. Neither demonstrates integration with a real knowledge base unless that behavior is implemented and evaluated.</p><h2>Check your understanding</h2><p>What question should the prototype answer? Which details are necessary for that question, and which could distract from it?</p><p class=\"source-note\">Source: CS6750, Lesson 3.5. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "horizontal-vertical": {
    "title": "Horizontal and vertical prototypes",
    "folder": "Prototyping and evaluation",
    "lesson": "3.5",
    "path": "/wiki/prototyping-and-evaluation/horizontal-and-vertical-prototypes.md",
    "summary": "Scope can emphasize broad coverage or a focused interaction in depth.",
    "links": [
      "fidelity",
      "task-analysis",
      "evaluation"
    ],
    "source": "CS6750, Lesson 3.5. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>A horizontal prototype represents many parts of an interface with limited depth. A vertical prototype develops a smaller part of the interaction more deeply. The choice should follow the design question and the kind of feedback needed, rather than an assumption that every screen must be built.</p><h2>Example</h2><p>A broad application mockup can show where Wiki sits among Home, Spaces, Tasks, and Plugins. A focused navigation prototype can instead develop finding a page, following a related link, and returning across a small set of notes.</p><h2>Check your understanding</h2><p>Is the current uncertainty about where the feature belongs, or about how the task works from beginning to end?</p><p class=\"source-note\">Source: CS6750, Lesson 3.5. Study summary of the saved Summer 2017 lecture transcript.</p>"
  },
  "evaluation": {
    "title": "Evaluation planning",
    "folder": "Prototyping and evaluation",
    "lesson": "3.1",
    "path": "/wiki/prototyping-and-evaluation/evaluation-planning.md",
    "summary": "Specify participants, tasks, measures, and analysis before collecting results.",
    "links": [
      "qualitative-quantitative",
      "variables",
      "fidelity"
    ],
    "source": "CS6750, Lesson 3.1 Introduction to Methods and the saved Individual Project guidelines. Study summary.",
    "body": "<h2>Key idea</h2><p>Evaluation asks how well a design supports its intended users and tasks. A plan should state who participates, what they do, what evidence is collected, and how it will be interpreted. Quantitative and qualitative evidence can address different parts of the question.</p><h2>Example</h2><p>A navigation study can record whether a participant reaches a target and ask why a route seemed clear or confusing. Reactions to a screenshot concern perceived clarity; they do not demonstrate measured task completion or time savings. Match the claim to the procedure.</p><h2>Check your understanding</h2><p>What observation would count as success? What comparison is meaningful, and what limitations will remain?</p><p class=\"source-note\">Source: CS6750, Lesson 3.1 Introduction to Methods and the saved Individual Project guidelines. Study summary.</p>"
  },
  "introduction": {
    "title": "What HCI studies",
    "folder": "Course overview",
    "lesson": "1.1–1.3",
    "path": "/wiki/course-overview/introduction.md",
    "summary": "Study people, tasks, interfaces, and the contexts in which they meet.",
    "links": [
      "task-analysis",
      "needfinding",
      "planning"
    ],
    "source": "CS6750, Lesson 1.1–1.3. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>HCI studies how people interact with technology and how designs can support their goals. A task-centered description starts with what a person wants to accomplish and the setting in which it happens. Interface design combines understanding people with iterating and evaluating possible solutions.</p><h2>Example</h2><p>Finding a saved explanation is a task; using a page tree is one possible method. Start by investigating how people currently find explanations before selecting a navigation control.</p><h2>Check your understanding</h2><p>What is the user’s goal, what is the current method, and what evidence would help distinguish them?</p><p class=\"source-note\">Source: CS6750, Lesson 1.1–1.3. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "design-principles": {
    "title": "Design principles and heuristics",
    "folder": "Principles in context",
    "lesson": "2.5",
    "path": "/wiki/principles-in-context/design-principles.md",
    "summary": "Use discoverability, mapping, consistency, constraints, and feedback to inspect an interaction.",
    "links": [
      "gulf-execution",
      "gulf-evaluation",
      "heuristic-evaluation"
    ],
    "source": "CS6750, Lesson 2.5. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>Design principles give reusable ways to reason about interfaces. Visible actions support discoverability; mapping connects a control to its effect; consistent patterns help transfer learning. Constraints can prevent errors, while tolerance and clear feedback help users recover. A principle is a lens for identifying a problem, not proof that every user will encounter it.</p><h2>Example</h2><p>A selected page row, matching document title, and predictable Back control can make the current state easier to interpret. A small icon without a label may require prior knowledge.</p><h2>Check your understanding</h2><p>Which principle explains a particular observation, and what evidence would establish its practical impact?</p><p class=\"source-note\">Source: CS6750, Lesson 2.5. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "representations": {
    "title": "Mental representations and interface metaphors",
    "folder": "Principles in context",
    "lesson": "2.6",
    "path": "/wiki/principles-in-context/representations.md",
    "summary": "Choose a representation that makes the task’s important relationships visible.",
    "links": [
      "mental-models",
      "recognition-recall",
      "distributed-cognition"
    ],
    "source": "CS6750, Lesson 2.6. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>A representation changes which relationships are easy to perceive and which operations require mental effort. Interface metaphors connect unfamiliar actions to familiar structures, but the metaphor may imply capabilities the interface does not actually provide. Consider the user’s conceptual model as well as the display.</p><h2>Example</h2><p>A folder tree emphasizes containment, a topic index emphasizes categories, and search emphasizes query matches. These representations can support different starting strategies for the same collection.</p><h2>Check your understanding</h2><p>What useful relationship does each representation expose, and what might it hide?</p><p class=\"source-note\">Source: CS6750, Lesson 2.6. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "distributed-cognition": {
    "title": "Distributed cognition",
    "folder": "Principles in context",
    "lesson": "2.8",
    "path": "/wiki/principles-in-context/distributed-cognition.md",
    "summary": "Analyze cognition across people, artifacts, and their relationships.",
    "links": [
      "representations",
      "cognitive-load",
      "observation"
    ],
    "source": "CS6750, Lesson 2.8. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>The unit of analysis can include a person, the tools they use, and other people involved in the activity. External representations can carry information that would otherwise need to be remembered. Situated action and activity theory also direct attention to the context and organization of work.</p><h2>Example</h2><p>A learner uses a note, a visit trail, and a classmate’s explanation together. Analyzing only clicks in the document viewer would miss how those resources support the activity.</p><h2>Check your understanding</h2><p>What information is carried by each artifact, and where does it move or get lost?</p><p class=\"source-note\">Source: CS6750, Lesson 2.8. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "interfaces-politics": {
    "title": "Interfaces, values, and politics",
    "folder": "Principles in context",
    "lesson": "2.9",
    "path": "/wiki/principles-in-context/interfaces-politics.md",
    "summary": "Ask who benefits, who is excluded, and which values a design makes easier to enact.",
    "links": [
      "ethics",
      "observation",
      "design-principles"
    ],
    "source": "CS6750, Lesson 2.9. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>Interfaces can shape behavior and distribute access, effort, and authority. Value-sensitive design asks designers to consider stakeholders and values alongside usability. Unintended effects deserve attention as well as the intended task benefit.</p><h2>Example</h2><p>A knowledge browser that assumes everyone knows the folder taxonomy may favor its author. Exposing sensitive file names in a shared view could create a different problem even when navigation is convenient.</p><h2>Check your understanding</h2><p>Whose needs are represented, whose needs are missing, and which tradeoffs should be investigated?</p><p class=\"source-note\">Source: CS6750, Lesson 2.9. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "principles-recap": {
    "title": "Connecting the design principles",
    "folder": "Principles in context",
    "lesson": "2.10",
    "path": "/wiki/principles-in-context/principles-recap.md",
    "summary": "Combine action, perception, memory, representations, and context when explaining a design.",
    "links": [
      "feedback-cycles",
      "cognitive-load",
      "task-analysis",
      "interfaces-politics"
    ],
    "source": "CS6750, Lesson 2.10. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>The principles unit offers complementary perspectives: feedback cycles explain acting and interpreting; human abilities help explain effort and error; mental models and task analysis describe understanding and action; distributed cognition and values broaden the context. Use the perspective that explains the specific observation.</p><h2>Example</h2><p>A user loses their place after opening another note. Visibility of state, memory demands, and the representation of page relationships offer different hypotheses to examine.</p><h2>Check your understanding</h2><p>Can you explain the observation without assuming that a favorite design pattern is always better?</p><p class=\"source-note\">Source: CS6750, Lesson 2.10. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "ethics": {
    "title": "Ethics in needfinding",
    "folder": "Needfinding",
    "lesson": "3.2",
    "path": "/wiki/needfinding/ethics.md",
    "summary": "Plan voluntary participation, clear expectations, and careful handling of participant information.",
    "links": [
      "survey",
      "bias",
      "interfaces-politics"
    ],
    "source": "CS6750, Lesson 3.2. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>Human research requires attention to participants’ rights, possible harms, and fair treatment. For a course project, follow the saved course instructions and applicable training requirements. Explain the activity clearly, allow people to decline, and collect only the information needed for the research question.</p><h2>Example</h2><p>A note-navigation survey can ask respondents to describe steps without requesting copies of private notes. Participants should know that optional prototype feedback can be skipped.</p><h2>Check your understanding</h2><p>What information is necessary, what could expose a participant, and how will you explain participation?</p><p class=\"source-note\">Source: CS6750, Lesson 3.2. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "heuristic-evaluation": {
    "title": "Heuristic evaluation",
    "folder": "Prototyping and evaluation",
    "lesson": "3.6",
    "path": "/wiki/prototyping-and-evaluation/heuristic-evaluation.md",
    "summary": "Inspect an interface against usability principles and record concrete evidence.",
    "links": [
      "design-principles",
      "evaluation",
      "cognitive-walkthrough"
    ],
    "source": "CS6750, Lesson 3.6. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>A heuristic evaluation predicts potential usability issues by examining an interface against selected principles. Record the location, task step, visible behavior, heuristic, and likely consequence. Inspection findings do not establish observed participant frequency or measured performance.</p><h2>Example</h2><p>Inspect whether the page title agrees with the highlighted navigation row, whether Back restores the expected page, and whether a person can discover where notes live.</p><h2>Check your understanding</h2><p>What did the interface show, which principle applies, and what remains a hypothesis?</p><p class=\"source-note\">Source: CS6750, Lesson 3.6. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "cognitive-walkthrough": {
    "title": "Cognitive walkthrough",
    "folder": "Prototyping and evaluation",
    "lesson": "3.6",
    "path": "/wiki/prototyping-and-evaluation/cognitive-walkthrough.md",
    "summary": "Follow a task step by step from the perspective of a learner.",
    "links": [
      "task-analysis",
      "gulf-execution",
      "gulf-evaluation",
      "heuristic-evaluation"
    ],
    "source": "CS6750, Lesson 3.6. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>A cognitive walkthrough examines whether a user can form the right goal, notice the available action, connect the action to the goal, and interpret the resulting feedback. Specify the user’s assumed knowledge and a concrete action sequence before inspecting it.</p><h2>Example</h2><p>For opening a saved note, consider whether a new user would look for Wiki, recognize a topic label, select the right page, and understand that the requested document opened.</p><h2>Check your understanding</h2><p>At which step could the user lack the knowledge needed to continue, and what supports learning there?</p><p class=\"source-note\">Source: CS6750, Lesson 3.6. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "agile": {
    "title": "HCI and Agile development",
    "folder": "Prototyping and evaluation",
    "lesson": "3.7",
    "path": "/wiki/prototyping-and-evaluation/agile.md",
    "summary": "Connect rapid delivery with repeated inquiry and feedback.",
    "links": [
      "planning",
      "fidelity",
      "evaluation"
    ],
    "source": "CS6750, Lesson 3.7. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>Agile development and user-centered design both value feedback, but frequent releases alone do not ensure that user needs have been understood. Lightweight prototypes and short studies can inform iterations; findings should feed back into priorities and design choices.</p><h2>Example</h2><p>Test a navigation concept before extending editing or synchronization. Use feedback to decide what the next iteration should investigate rather than treating the current feature list as fixed.</p><h2>Check your understanding</h2><p>What will the next iteration teach you, and how could that evidence change the plan?</p><p class=\"source-note\">Source: CS6750, Lesson 3.7. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "methods-recap": {
    "title": "From needfinding to evaluation",
    "folder": "Prototyping and evaluation",
    "lesson": "3.8",
    "path": "/wiki/prototyping-and-evaluation/methods-recap.md",
    "summary": "Match the method to the question and the stage of the design cycle.",
    "links": [
      "needfinding",
      "brainstorming",
      "fidelity",
      "evaluation"
    ],
    "source": "CS6750, Lesson 3.8. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>Needfinding investigates existing tasks and practices. Design alternatives explore possible ways to support them. Prototyping makes selected questions concrete, and evaluation supplies feedback for revision. The cycle is iterative; evidence from one stage can send the project back to an earlier assumption.</p><h2>Example</h2><p>A survey about current note retrieval can shape design alternatives. Later task-based evaluation can examine how a selected prototype supports finding, following, and returning.</p><h2>Check your understanding</h2><p>Which uncertainty are you addressing, and why is this method appropriate now?</p><p class=\"source-note\">Source: CS6750, Lesson 3.8. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "technologies": {
    "title": "Applications: technologies",
    "folder": "Applications and next steps",
    "lesson": "4.1",
    "path": "/wiki/applications-and-next-steps/technologies.md",
    "summary": "Apply HCI principles across emerging interaction technologies.",
    "links": [
      "direct-manipulation",
      "feedback-cycles",
      "domains"
    ],
    "source": "CS6750, Lesson 4.1. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>The applications unit uses technologies such as virtual and augmented reality, wearable computing, and robotics as starting points for investigation. Different devices change the available input, feedback, physical setting, and social expectations. Transfer principles while checking the assumptions of the new setting.</p><h2>Example</h2><p>A hands-free wearable and a desktop knowledge browser may support related information goals, yet differ in visibility, privacy, and the resources available for confirmation.</p><h2>Check your understanding</h2><p>Which assumptions from a desktop interface would fail in another physical or social setting?</p><p class=\"source-note\">Source: CS6750, Lesson 4.1. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "ideas": {
    "title": "Applications: interaction ideas",
    "folder": "Applications and next steps",
    "lesson": "4.2",
    "path": "/wiki/applications-and-next-steps/ideas.md",
    "summary": "Explore context sensitivity, gestures, pen and touch, visualization, and collaborative work.",
    "links": [
      "representations",
      "distributed-cognition",
      "domains"
    ],
    "source": "CS6750, Lesson 4.2. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>Interaction ideas describe ways to organize the relationship between people and technology. The saved lectures introduce context-sensitive computing, gesture-based interaction, pen and touch, information visualization, computer-supported cooperative work, and social computing. Each raises questions about interpretation and feedback.</p><h2>Example</h2><p>A visualization of linked notes may expose relationships, but a shared knowledge space also requires understanding how people coordinate and interpret one another’s contributions.</p><h2>Check your understanding</h2><p>Which interaction idea fits the task, and what new ambiguity or coordination cost might it introduce?</p><p class=\"source-note\">Source: CS6750, Lesson 4.2. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "domains": {
    "title": "Applications: domains",
    "folder": "Applications and next steps",
    "lesson": "4.3",
    "path": "/wiki/applications-and-next-steps/domains.md",
    "summary": "Study how context changes design goals in accessibility, education, health, security, and games.",
    "links": [
      "interfaces-politics",
      "ethics",
      "technologies",
      "ideas"
    ],
    "source": "CS6750, Lesson 4.3. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.",
    "body": "<h2>Key idea</h2><p>Application domains bring different stakeholders, constraints, and definitions of success. The saved applications lectures cover special needs and accessibility, education, healthcare, security, and games. A familiar interface pattern still needs to be evaluated in the domain where people will use it.</p><h2>Example</h2><p>In an educational knowledge base, retrieving the right explanation and understanding its context matter alongside speed. Different learners may need different ways to navigate the same material.</p><h2>Check your understanding</h2><p>Whose capabilities and goals matter in this domain, and what would count as a useful outcome?</p><p class=\"source-note\">Source: CS6750, Lesson 4.3. Original study summary based on the saved Summer 2017 lecture transcript; course placement follows the saved Fall 2026 syllabus.</p>"
  },
  "next-steps": {
    "title": "Course recap and further study",
    "folder": "Applications and next steps",
    "lesson": "5.1–5.3",
    "path": "/wiki/applications-and-next-steps/next-steps.md",
    "summary": "Connect the course to human factors, UX, psychology, cognitive science, and research.",
    "links": [
      "principles-recap",
      "methods-recap",
      "reading-guide"
    ],
    "source": "CS6750, Lessons 5.1 Course Recap, 5.2 Related Fields, and 5.3 Next Steps. Original summary of the saved Summer 2017 lecture transcript. Historical study directions are not a current program or admissions guide.",
    "body": "<h2>Key idea</h2><p>The conclusion revisits principles and methods, relates HCI to neighboring fields, and outlines directions for further study. Human factors, interaction design, user experience, psychology, cognitive science, collaborative systems, and intelligent interfaces offer different emphases. Use a concrete task and research question to choose what to investigate next.</p><h2>Example</h2><p>A knowledge-navigation project can lead to questions about memory, information visualization, or human–AI interaction. Select the next reading or study based on the unresolved question.</p><h2>Check your understanding</h2><p>Which finding from your project would you want to investigate more deeply, and which neighboring field could help?</p><p class=\"source-note\">Source: CS6750, Lessons 5.1 Course Recap, 5.2 Related Fields, and 5.3 Next Steps. Original summary of the saved Summer 2017 lecture transcript. Historical study directions are not a current program or admissions guide.</p>"
  },
  "reading-guide": {
    "title": "Course reading guide",
    "folder": "Course overview",
    "lesson": "Resources",
    "path": "/wiki/course-overview/reading-guide.md",
    "summary": "Find the saved reading titles associated with a concept.",
    "links": [
      "feedback-cycles",
      "distributed-cognition",
      "survey",
      "fidelity",
      "evaluation"
    ],
    "source": "Reading titles checked against the local course_files_export/Required Readings inventory. This is a navigation guide, not a reproduced reading packet.",
    "body": "<h2>Principles and feedback</h2><p>Norman, The Design of Everyday Things, Chapters 1, 2, and 5; Norman, Cognitive Engineering.</p><p>Study connections: <a class=\"inline-link\" data-page=\"feedback-cycles\" href=\"#feedback-cycles\">Feedback cycles</a>, <a class=\"inline-link\" data-page=\"mental-models\" href=\"#mental-models\">Mental models</a>.</p><h2>Interaction and context</h2><p>Hutchins, Hollan, and Norman, Direct Manipulation Interfaces; Nardi, Studying Context; Hutchins, How a Cockpit Remembers Its Speeds.</p><p>Study connections: <a class=\"inline-link\" data-page=\"direct-manipulation\" href=\"#direct-manipulation\">Direct manipulation</a>, <a class=\"inline-link\" data-page=\"distributed-cognition\" href=\"#distributed-cognition\">Distributed cognition</a>.</p><h2>Values and social effects</h2><p>Winner, Do Artifacts Have Politics?; Friedman and colleagues, Value Sensitive Design.</p><p>Study connections: <a class=\"inline-link\" data-page=\"interfaces-politics\" href=\"#interfaces-politics\">Interfaces, values, and politics</a>.</p><h2>Needfinding and alternatives</h2><p>Müller, Sedley, and Ferrall-Nunge, Survey Research in HCI; Rogers, Sharp, and Preece, The Process of Interaction Design; Faste and colleagues, Brainstorm, Chainstorm, Cheatstorm, Tweetstorm.</p><p>Study connections: <a class=\"inline-link\" data-page=\"survey\" href=\"#survey\">Survey design</a>, <a class=\"inline-link\" data-page=\"brainstorming\" href=\"#brainstorming\">Brainstorming design alternatives</a>.</p><h2>Prototyping</h2><p>Houde and Hill, What Do Prototypes Prototype?; Beaudouin-Lafon and Mackay, Prototyping Tools and Techniques.</p><p>Study connections: <a class=\"inline-link\" data-page=\"fidelity\" href=\"#fidelity\">Prototype fidelity</a>, <a class=\"inline-link\" data-page=\"horizontal-vertical\" href=\"#horizontal-vertical\">Horizontal and vertical prototypes</a>.</p><h2>Evaluation and iteration</h2><p>Polson and colleagues, Cognitive Walkthroughs; Nielsen and Molich, Heuristic Evaluation of User Interfaces; Chamberlain, Sharp, and Maiden, Towards a Framework for Integrating Agile Development and User-Centred Design.</p><p>Study connections: <a class=\"inline-link\" data-page=\"heuristic-evaluation\" href=\"#heuristic-evaluation\">Heuristic evaluation</a>, <a class=\"inline-link\" data-page=\"cognitive-walkthrough\" href=\"#cognitive-walkthrough\">Cognitive walkthrough</a>, <a class=\"inline-link\" data-page=\"agile\" href=\"#agile\">HCI and Agile development</a>.</p><p class=\"source-note\">Reading titles checked against the local course_files_export/Required Readings inventory. This is a navigation guide, not a reproduced reading packet.</p>"
  },
  "course-map": {
    "title": "CS6750 course map",
    "folder": "Course overview",
    "lesson": "All units",
    "path": "/wiki/course-overview/course-map.md",
    "summary": "A route through the five units and 27 lessons in the saved syllabus.",
    "links": [
      "introduction",
      "principles-recap",
      "methods-recap",
      "technologies",
      "next-steps",
      "reading-guide"
    ],
    "source": "Lesson titles and numbering: saved Fall 2026 CS6750 syllabus. Linked notes are original study summaries, primarily based on the saved Summer 2017 lecture transcript; they are not complete lecture replacements.",
    "body": "<p>A course-wide index of all five units. Each lesson leads to a related study summary; some summaries cover several lessons.</p><h2>1 — Introduction</h2><ul><li><a class=\"inline-link\" data-page=\"introduction\" href=\"#introduction\">1.1 Introduction to Human-Computer Interaction</a></li><li><a class=\"inline-link\" data-page=\"introduction\" href=\"#introduction\">1.2 Introduction to CS6750</a></li><li><a class=\"inline-link\" data-page=\"introduction\" href=\"#introduction\">1.3 Exploring HCI</a></li></ul><h2>2 — Principles</h2><ul><li><a class=\"inline-link\" data-page=\"principles-recap\" href=\"#principles-recap\">2.1 Introduction to Principles</a></li><li><a class=\"inline-link\" data-page=\"feedback-cycles\" href=\"#feedback-cycles\">2.2 Feedback Cycles</a></li><li><a class=\"inline-link\" data-page=\"direct-manipulation\" href=\"#direct-manipulation\">2.3 Direct Manipulation and Invisible Interfaces</a></li><li><a class=\"inline-link\" data-page=\"cognitive-load\" href=\"#cognitive-load\">2.4 Human Abilities</a></li><li><a class=\"inline-link\" data-page=\"design-principles\" href=\"#design-principles\">2.5 Design Principles and Heuristics</a></li><li><a class=\"inline-link\" data-page=\"representations\" href=\"#representations\">2.6 Mental Models and Representations</a></li><li><a class=\"inline-link\" data-page=\"task-analysis\" href=\"#task-analysis\">2.7 Task Analysis</a></li><li><a class=\"inline-link\" data-page=\"distributed-cognition\" href=\"#distributed-cognition\">2.8 Distributed Cognition</a></li><li><a class=\"inline-link\" data-page=\"interfaces-politics\" href=\"#interfaces-politics\">2.9 Interfaces and Politics</a></li><li><a class=\"inline-link\" data-page=\"principles-recap\" href=\"#principles-recap\">2.10 Conclusion to Principles</a></li></ul><h2>3 — Methods</h2><ul><li><a class=\"inline-link\" data-page=\"planning\" href=\"#planning\">3.1 Introduction to Methods</a></li><li><a class=\"inline-link\" data-page=\"ethics\" href=\"#ethics\">3.2 Ethics and Human Research</a></li><li><a class=\"inline-link\" data-page=\"needfinding\" href=\"#needfinding\">3.3 Needfinding and Requirements Gathering</a></li><li><a class=\"inline-link\" data-page=\"brainstorming\" href=\"#brainstorming\">3.4 Design Alternatives</a></li><li><a class=\"inline-link\" data-page=\"fidelity\" href=\"#fidelity\">3.5 Prototyping</a></li><li><a class=\"inline-link\" data-page=\"evaluation\" href=\"#evaluation\">3.6 Evaluation</a></li><li><a class=\"inline-link\" data-page=\"agile\" href=\"#agile\">3.7 HCI and Agile Development</a></li><li><a class=\"inline-link\" data-page=\"methods-recap\" href=\"#methods-recap\">3.8 Conclusion to Methods</a></li></ul><h2>4 — Applications</h2><ul><li><a class=\"inline-link\" data-page=\"technologies\" href=\"#technologies\">4.1 Technologies</a></li><li><a class=\"inline-link\" data-page=\"ideas\" href=\"#ideas\">4.2 Ideas</a></li><li><a class=\"inline-link\" data-page=\"domains\" href=\"#domains\">4.3 Domains</a></li></ul><h2>5 — Conclusion</h2><ul><li><a class=\"inline-link\" data-page=\"next-steps\" href=\"#next-steps\">5.1 Course Recap</a></li><li><a class=\"inline-link\" data-page=\"next-steps\" href=\"#next-steps\">5.2 Related Fields</a></li><li><a class=\"inline-link\" data-page=\"next-steps\" href=\"#next-steps\">5.3 Next Steps</a></li></ul><h2>Readings</h2><p><a class=\"inline-link\" data-page=\"reading-guide\" href=\"#reading-guide\">Course reading guide</a></p><p class=\"source-note\">Lesson titles and numbering: saved Fall 2026 CS6750 syllabus. Linked notes are original study summaries, primarily based on the saved Summer 2017 lecture transcript; they are not complete lecture replacements.</p>"
  }
};
