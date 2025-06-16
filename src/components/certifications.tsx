'use client'

import { motion } from 'framer-motion'
import { GraduationCapIcon } from 'lucide-react'
import { data } from '@/constants'
import { TypeAnimation } from 'react-type-animation'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'
import { Button } from './ui/button'
import { ArrowUpRightIcon } from 'lucide-react'
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip'

export function Certifications() {
  const { certifications } = data

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full py-12 px-2 md:px-0 space-y-10 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className='flex items-center gap-x-4 mb-8 justify-center md:justify-start'
      >
        <GraduationCapIcon className='size-7 animate-pulse stroke-[1.5] text-primary' />
        <TypeAnimation
          sequence={['Courses & Certifications', 5000, '',]}
          wrapper='h2'
          cursor={true}
          repeat={Infinity}
          speed={50}
          className='text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent drop-shadow'
        />
      </motion.div>

      <div className="flex flex-col gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6, ease: 'easeOut' }}
          >
            <Card className='group flex flex-col border border-border/60 shadow-lg w-full max-w-4xl mx-auto rounded-2xl bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300'>
              <CardHeader className='flex flex-col space-y-2 p-6 pb-2'>
                <CardTitle className='text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent flex items-center gap-2'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={cert.link}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center group gap-2 transition-all duration-300 hover:scale-[1.03] hover:underline underline-offset-4'
                      >
                        <span className="group-hover:text-primary dark:group-hover:text-primary transition-colors">{cert.title}</span>
                        <ArrowUpRightIcon className='size-5 text-primary/70 group-hover:text-primary' />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className='p-1' side='bottom'>
                      <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-primary/0">
                        <div className="flex items-center gap-4 p-4">
                          <GraduationCapIcon className="size-12 text-primary" />
                          <div>
                            <h3 className="text-lg font-semibold">{cert.organization}</h3>
                            {cert.date && (
                              <p className="text-sm text-muted-foreground">{cert.date}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>

                <CardDescription className='font-mono dark:text-neutral-400 text-neutral-700 text-base mt-1'>
                  {cert.description}
                </CardDescription>
              </CardHeader>

              <CardContent className='flex flex-col space-y-6 p-6 pt-0'>
                <div className="flex items-center gap-4">
                  <GraduationCapIcon className="size-6 text-primary" />
                  <div>
                    <p className="text-lg font-semibold">{cert.organization}</p>
                    {cert.date && (
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                    )}
                  </div>
                </div>

                {cert.description && (
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                )}

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 hover:underline hover:underline-offset-4"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-fit flex items-center gap-2"
                    >
                      View Certificate
                      <ArrowUpRightIcon className='size-4 text-primary/70' />
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
