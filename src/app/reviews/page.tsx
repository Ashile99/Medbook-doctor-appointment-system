import { Star, ThumbsUp } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: "1",
      author: "Marcus Thorne",
      doctor: "Dr. Sarah Jenkins",
      rating: 5,
      date: "2 weeks ago",
      content: "Dr. Jenkins's expertise and calm demeanor made me feel incredibly at ease. The treatment plan she designed has significantly improved my heart health. Highly recommend to anyone looking for a top-tier cardiologist.",
      likes: 12
    },
    {
      id: "2",
      author: "Elena Rodriguez",
      doctor: "Dr. Michael Chen",
      rating: 4,
      date: "1 month ago",
      content: "Highly professional. The clinic is peaceful and modern. Dr. Chen takes the time to explain everything clearly, although the wait time was a bit longer than expected.",
      likes: 8
    },
    {
      id: "3",
      author: "David Kim",
      doctor: "Dr. Emily Rodriguez",
      rating: 5,
      date: "2 months ago",
      content: "Best pediatrician we've ever visited. My kids absolutely love her. She is patient, kind, and extremely knowledgeable.",
      likes: 24
    },
    {
      id: "4",
      author: "Sarah Connor",
      doctor: "Dr. James Wilson",
      rating: 5,
      date: "3 months ago",
      content: "After my sports injury, I thought I wouldn't play again. Dr. Wilson's surgery was flawless, and his physical therapy recommendations were spot on. Back on the field now!",
      likes: 45
    }
  ];

  return (
    <div className="min-h-screen bg-transparent py-10 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-text-main mb-3">Patient Reviews</h1>
          <p className="text-text-muted max-w-2xl mx-auto">Read what other patients are saying about their experiences with our top-rated medical professionals.</p>
        </div>

        {/* Reviews Summary Glass Card */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-white/50 mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-4xl font-extrabold text-[#102A43] mb-2">4.8<span className="text-xl text-text-muted font-medium">/5</span></h2>
            <div className="flex gap-1 justify-center md:justify-start text-[#EAB308] mb-2">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-text-muted font-medium">Based on 2,450+ patient reviews</p>
          </div>
          
          <div className="flex-1 w-full space-y-3">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-3">
                <span className="text-sm font-bold text-text-main w-3">{star}</span>
                <Star className="w-4 h-4 text-[#EAB308] fill-current" />
                <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#EAB308] rounded-full" 
                    style={{ width: `${star === 5 ? 85 : star === 4 ? 10 : star === 3 ? 3 : star === 2 ? 1 : 1}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-white/50 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-sm border border-white/50 transition-all hover:bg-white/70">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{rev.author[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-main">{rev.author}</h3>
                    <p className="text-xs text-text-muted font-medium">Reviewed {rev.doctor}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex gap-1 text-[#EAB308] justify-end mb-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-3 h-3 md:w-4 md:h-4 ${j < rev.rating ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-text-muted">{rev.date}</span>
                </div>
              </div>
              
              <p className="text-[#102A43] text-sm md:text-base leading-relaxed mb-4">&quot;{rev.content}&quot;</p>
              
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 text-text-muted hover:text-primary transition-colors text-sm font-medium px-3 py-1.5 bg-white/40 rounded-lg">
                  <ThumbsUp className="w-4 h-4" />
                  Helpful ({rev.likes})
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
