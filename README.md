# Knowledge navigation prototype

CS6750 Individual Project research prototype. Application styling is based on a supplied Codex screenshot. Wiki navigation is a proposed design, not a released product feature. The knowledge base contains 23 original course-study summaries across six topics, with source notes, examples, and review questions. No course PDFs or lecture transcript passages are published.

## Views

- `index.html?mode=A`: page tree
- `index.html?mode=B`: topics and visit trail
- `index.html?mode=C`: search and recent pages
- `index.html?mode=current`: reconstruction of the author-reported chat/file workflow
- `basic.html`: original low-fidelity wireframes

Add `&study=1` to hide the alternative-switching bar for a focused study link. The current-workflow view is a reconstruction, not a captured baseline. This static demo has no account connection, private-file access, analytics, or survey-response collection.

Serve these files with any static host; no installation or build step is required.

The current-workflow view follows the supplied screenshot: chat sessions grouped under a project, a center chat pane, and a separate Markdown file preview on the right. It has no Wiki entry, generated Related pages section, or added cross-page links. Notes are opened from file references in a session.
