import { describe, it, expect } from 'vitest'
import { emailAnalysisSchema } from '../lib/agents/process-email'

describe('Email Analysis Schema', () => {
  it('should validate a complete email analysis', () => {
    const validData = {
      summary: 'Test summary',
      priority: 'high',
      actionItems: [
        {
          title: 'Task 1',
          description: 'Description of task 1',
          dueDate: '2024-01-01',
        },
      ],
      needsReply: true,
      draftReply: 'Here is a draft reply',
      calendarEvents: [],
      category: 'work',
    }

    const result = emailAnalysisSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should reject invalid priority', () => {
    const invalidData = {
      summary: 'Test summary',
      priority: 'critical', // Invalid priority
      actionItems: [],
      needsReply: false,
      draftReply: null,
      calendarEvents: [],
      category: 'work',
    }

    const result = emailAnalysisSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('should accept valid calendar event', () => {
    const dataWithEvent = {
      summary: 'Meeting scheduled',
      priority: 'medium',
      actionItems: [],
      needsReply: false,
      draftReply: null,
      calendarEvents: [
        {
          title: 'Team Meeting',
          description: 'Weekly sync',
          date: '2024-01-15',
          startTime: '2024-01-15T10:00:00Z',
          endTime: '2024-01-15T11:00:00Z',
        },
      ],
      category: 'work',
    }

    const result = emailAnalysisSchema.safeParse(dataWithEvent)
    expect(result.success).toBe(true)
  })
})
