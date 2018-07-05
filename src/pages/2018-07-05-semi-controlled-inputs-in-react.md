---
path: "/semi-controlled-inputs-in-react"
title: "Semi-controlled inputs in React"
date: "2018-07-05"
---

# Semi-controlled inputs in React

It's funny to realize how could I miss such simple things, even after a years of doing React.
Recently, during a code review, I was asked to improve a controlled input usage.

Here is my initial code.

<iframe height="400px" width="100%" src="https://repl.it/@code4aman/FatherlySlateblueUpgrade?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Here is improved example.

<iframe height="400px" width="100%" src="https://repl.it/@code4aman/NormalTrivialSpellchecker?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

The problem is in the props I set for input component. Well, not really an issue, just a violation of YAGNI.
If input should not be updated from outside then there is no need to set a `value` property.
And for controlled inputs I was always setting both `value` and `onChange`.
However, there are valid cases for defining `onChange` prop only, or with `defaultValue`.
