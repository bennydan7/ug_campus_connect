import React from 'react'

const quotes = [
  {
    quote: "I never miss an event anymore thanks to UG Campus Connect.",
    author: "Ama K.",
    role: "Computer Science, 2nd year",
  },
  {
    quote: "This app keeps me updated on seminars that actually matter to my career.",
    author: "Kojo B.",
    role: "Economics, 3rd year",
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold">What students say</h2>
        <p className="text-sm text-muted-foreground mt-1">Real feedback from UG Campus Connect users</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {quotes.map((q, i) => (
            <blockquote key={i} className="rounded-lg border bg-white p-6 shadow-sm">
              <p className="text-base">“{q.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted grid place-items-center font-semibold">{q.author.split(' ')[0][0]}</div>
                <div>
                  <div className="font-semibold">{q.author}</div>
                  <div className="text-sm text-muted-foreground">{q.role}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
