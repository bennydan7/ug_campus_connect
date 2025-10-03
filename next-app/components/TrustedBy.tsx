import React from 'react'

const logos = [
  { name: 'University of Ghana' },
  { name: 'Faculty of Arts' },
  { name: 'Students Rep Council (SRC)' },
]

export default function TrustedBy() {
  return (
    <section className="py-8 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold">Trusted by</h3>
        <div className="mt-4 flex items-center gap-6 flex-wrap">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center gap-3 rounded-md bg-white p-3 shadow-sm">
              <div className="h-8 w-8 rounded-md bg-primary/10 grid place-items-center text-primary font-bold">UG</div>
              <div className="text-sm font-medium">{l.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
