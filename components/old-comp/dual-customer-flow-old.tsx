import { ArrowRight, Users, Briefcase, Target, Award, Building2, Search } from "lucide-react"

export function DualCustomerFlow() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Designed for Everyone</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to accelerate your career or find exceptional talent, we have the perfect solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Talent Card */}
          <div className="card-depth p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-2xl">
            <div className="mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-3">For Talent</h3>
              <p className="text-muted-foreground">Accelerate your career path with world-class mentorship</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Target size={14} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Learn from Corporate Mentors</p>
                  <p className="text-sm text-muted-foreground">Get direct guidance from industry leaders</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award size={14} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Real Job Simulations</p>
                  <p className="text-sm text-muted-foreground">Build your portfolio with real-world projects</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Briefcase size={14} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Job Placement Support</p>
                  <p className="text-sm text-muted-foreground">Interview prep and placement assistance</p>
                </div>
              </li>
            </ul>

            <button className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
              Explore Talent Path
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Company Card */}
          <div className="card-depth p-8 bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10 rounded-2xl">
            <div className="mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-3">For Companies</h3>
              <p className="text-muted-foreground">Find and develop the best talent for your organization</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Search size={14} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Intelligent Talent Screening</p>
                  <p className="text-sm text-muted-foreground">Access pre-vetted, qualified candidates</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Target size={14} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Tailored Recruitment Partnership</p>
                  <p className="text-sm text-muted-foreground">Custom solutions for your hiring needs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award size={14} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Corporate-Ready Professionals</p>
                  <p className="text-sm text-muted-foreground">Young talent prepared for impact</p>
                </div>
              </li>
            </ul>

            <button className="w-full px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 group">
              Explore Company Solutions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
