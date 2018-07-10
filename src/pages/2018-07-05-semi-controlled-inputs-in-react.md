---
path: "/semi-controlled-inputs-in-react"
title: "Semi-controlled inputs in React"
date: "2018-07-05"
---

# Semi-controlled inputs in React

It's funny to realize how could I miss such simple things, even after a years of doing React.  
Recently, during a code review, my collegue asked me to improve an unexpectedly simple piece of code...

> **TL;DR** It's not always required to control `value` prop when `onChange` prop is controlled. And the name of this is **semi-controlled** 😎.

## The problem

Here is a simplified example (not runable, console section can be collapsed).

<iframe height="350px" width="100%" src="https://repl.it/@code4aman/LoathsomeSupportivePatterns?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

As you can see at line #12, the `input` here is a controlled one - it has `value` prop defined.
But, is it required? Yes, you say, because we need it to reflect our actual state. `onChange` prop is also required - this is how we actualize this state.

## Solution

Well, while it's true and the everything works fine, there is some YAGNI violation. Because, to achieve same behavior, we can omit the `value` prop and define `onChange` handler only:

`Value: <input onChange={this.onChange} />`

Behavior would be the same. However, there is one exception - initial render with non-empty value. In order to fix it we have to set `defaultValue` prop too.

`Value: <input defaultValue={this.state.value} onChange={this.onChange} />`

So, this is it, now we do not pass same value to the input again and again.

Here is a final solution (intractive).

<iframe src="https://codesandbox.io/embed/m4pj7nrr49?autoresize=1&fontsize=13&hidenavigation=1&moduleview=1&view=editor" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## P.S.

Here is a writeup ["Controlled and uncontrolled form inputs in React don't have to be complicated"](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/) on similar topic. Not sure about his book, but in this particular article (in section **Conclusion**) Gosha presents us a table of comparison on controlled vs. uncontrolled. And it seems like **instant field validation** and **conditionally disabling submit button** scenarios do not really require a controlled input.
