
import { useState } from 'react';
import { X, Phone, Mail, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  offer?: string;
}

export const LeadCaptureModal = ({ 
  isOpen, 
  onClose, 
  title = "Get Your Free Strategy Session",
  offer = "Limited Time: Save 40% on All Services"
}: LeadCaptureModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
    // Show success message or redirect
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mt-1 inline-block">
                {offer}
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground p-1 hover:bg-muted rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-muted-foreground">Step {step} of 3</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-medium text-foreground mb-4">Tell us about yourself</h4>
              
              <div className="relative">
                <User size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  required
                />
              </div>

              <div className="relative">
                <Mail size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  required
                />
              </div>

              <div className="relative">
                <Phone size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  required
                />
              </div>

              <div className="relative">
                <Building size={18} className="absolute left-3 top-3 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h4 className="font-medium text-foreground mb-4">Project Details</h4>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">What do you need?</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  required
                >
                  <option value="">Select service type</option>
                  <option value="website">Website Development</option>
                  <option value="app">Mobile App</option>
                  <option value="ai">AI/ML Solutions</option>
                  <option value="automation">Business Automation</option>
                  <option value="consulting">Strategy Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  required
                >
                  <option value="">Select budget</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6months+">6+ months</option>
                </select>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-4">
              <div className="text-4xl">🎉</div>
              <h4 className="font-semibold text-foreground">You're Almost Done!</h4>
              <p className="text-muted-foreground">
                We'll review your information and get back to you within 24 hours with a customized strategy proposal.
              </p>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                  🎁 Bonus: You'll also receive our exclusive "Digital Growth Checklist" worth $497
                </p>
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="flex gap-3 mt-6">
            {step > 1 && (
              <Button 
                type="button" 
                onClick={handlePrev}
                variant="outline"
                className="flex-1"
              >
                Previous
              </Button>
            )}
            
            {step < 3 ? (
              <Button 
                type="button" 
                onClick={handleNext}
                className="flex-1 btn-primary"
                disabled={
                  (step === 1 && (!formData.name || !formData.email || !formData.phone)) ||
                  (step === 2 && (!formData.projectType || !formData.budget || !formData.timeline))
                }
              >
                Continue
              </Button>
            ) : (
              <Button 
                type="submit"
                className="flex-1 btn-primary"
              >
                Get My Free Strategy Session
              </Button>
            )}
          </div>

          {/* Trust Signals */}
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              🔒 Your information is secure and will never be shared
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
