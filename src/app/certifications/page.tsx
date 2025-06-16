import { Section } from '@/components/ui/section'
import { Certifications } from '@/components/certifications'

export default function CertificationsPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='certifications' className='pb-24'>
        <Certifications />
      </Section>
    </div>
  )
}
