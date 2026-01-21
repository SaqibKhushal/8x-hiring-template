'use client'

export function ExampleGallery() {
  // Placeholder function to generate gradient backgrounds
  const getPlaceholderGradient = (index: number) => {
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
      'from-teal-500 to-green-500',
      'from-rose-500 to-pink-500',
    ]
    return gradients[index % gradients.length]
  }

  const examples = [1, 2, 3, 4, 5, 6, 7]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Custom Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 auto-rows-fr gap-4">
          {/* Column 1: Tall Image */}
          <div className="row-span-2">
            <div className={`relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br ${getPlaceholderGradient(0)} transition-transform hover:scale-105 hover:shadow-glow flex items-center justify-center`}>
              <span className="text-white text-xl font-bold">Example 1</span>
            </div>
          </div>

          {/* Column 2: Square Image (Top) */}
          <div className="row-span-1">
            <div className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br ${getPlaceholderGradient(1)} transition-transform hover:scale-105 hover:shadow-glow flex items-center justify-center`}>
              <span className="text-white text-xl font-bold">Example 2</span>
            </div>
          </div>

          {/* Column 3: Tall Image */}
          <div className="row-span-2">
            <div className={`relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br ${getPlaceholderGradient(3)} transition-transform hover:scale-105 hover:shadow-glow flex items-center justify-center`}>
              <span className="text-white text-xl font-bold">Example 4</span>
            </div>
          </div>

          {/* Column 4: Square Image (Top) */}
          <div className="row-span-1">
            <div className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br ${getPlaceholderGradient(4)} transition-transform hover:scale-105 hover:shadow-glow flex items-center justify-center`}>
              <span className="text-white text-xl font-bold">Example 5</span>
            </div>
          </div>

          {/* Column 5: Tall Image */}
          <div className="row-span-2">
            <div className={`relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br ${getPlaceholderGradient(6)} transition-transform hover:scale-105 hover:shadow-glow flex items-center justify-center`}>
              <span className="text-white text-xl font-bold">Example 7</span>
            </div>
          </div>

          {/* Column 2: Square Image (Bottom) */}
          <div className="row-span-1">
            <div className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br ${getPlaceholderGradient(2)} transition-transform hover:scale-105 hover:shadow-glow flex items-center justify-center`}>
              <span className="text-white text-xl font-bold">Example 3</span>
            </div>
          </div>

          {/* Column 4: Square Image (Bottom) */}
          <div className="row-span-1">
            <div className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br ${getPlaceholderGradient(5)} transition-transform hover:scale-105 hover:shadow-glow flex items-center justify-center`}>
              <span className="text-white text-xl font-bold">Example 6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}