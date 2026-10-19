window.courseGroups = ["Research methods", "Feedback cycles", "Human capabilities", "Needfinding", "Design alternatives", "Prototyping and evaluation"];
window.courseNotes = {
  "home": {
    "title": "Course notes",
    "folder": "Knowledge base",
    "path": "/wiki/README.md",
    "summary": "CS6750 Human–Computer Interaction",
    "links": [
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
      "evaluation"
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
    "lesson": "2.4",
    "path": "/wiki/human-capabilities/mental-models.md",
    "summary": "Understand how people think the system works.",
    "links": [
      "gulf-evaluation",
      "cognitive-load",
      "task-analysis"
    ],
    "source": "CS6750, Lesson 2.4. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>A mental model is a person’s understanding of how a system behaves. It guides expectations, predictions, and recovery. A mismatch between that understanding and the system can create mistakes even when controls are easy to operate. Consistent language and observable effects help people develop a useful model.</p><h2>Example</h2><p>In a linked knowledge base, a reader might expect Back to revisit the previous page, while a folder breadcrumb moves to a structural parent. Making those relationships distinguishable can help the person predict where each action leads.</p><h2>Check your understanding</h2><p>What does the person believe will happen next? Does an error reflect an execution slip or a misunderstanding of the system?</p><p class=\"source-note\">Source: CS6750, Lesson 2.4. Study summary of the saved Summer 2017 lecture transcript.</p>"
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
    "lesson": "2.1",
    "path": "/wiki/design-alternatives/tasks-and-task-analysis.md",
    "summary": "Separate the user’s underlying goal from the current interface actions.",
    "links": [
      "needfinding",
      "gulf-execution",
      "cognitive-load"
    ],
    "source": "CS6750, Lesson 2.1. Study summary of the saved Summer 2017 lecture transcript.",
    "body": "<h2>Key idea</h2><p>A task describes what a person wants to accomplish. Interface actions describe how a particular system lets them do it. Understanding the underlying purpose can reveal alternatives that would be missed by only rearranging existing buttons. Include physical, cognitive, and social parts of the activity.</p><h2>Example</h2><p>“Find the explanation I saved and compare it with a related concept” is a task. “Ask the agent for a file link” is one way to carry it out. A task analysis can identify locating, opening, interpreting, following a link, and returning as useful subtasks.</p><h2>Check your understanding</h2><p>Why is the person performing each action? Which steps are essential to the goal, and which are consequences of the current interface?</p><p class=\"source-note\">Source: CS6750, Lesson 2.1. Study summary of the saved Summer 2017 lecture transcript.</p>"
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
  }
};
