// ── Tarot Forecast Text Database ──
// 22 Arcana × 3 tones × 5 periods × 2 variants = 660 texts + moon modifiers + zodiac phrases
(function() {
  'use strict';

  window.FORECAST_DATA = {

  // ════════════════════════════════════════════════
  // ARCANA FORECASTS (22 cards × 3 tones × 5 periods × 2 variants)
  // ════════════════════════════════════════════════
  arcana: {

    // ── 0: The Fool ──
    0: {
      positive: [
        { period:"today", text:"The Fool opens doors to new possibilities today. Right now, trust your intuition even if the path seems uncharted. Fortune favors the bold. The universe sends a sign.", category:"luck" },
        { period:"today", text:"Today The Fool grants lightness and freedom. Let go of old attachments right now. A fresh cycle begins. Spontaneity brings unexpected reward.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Fool opens doors to new possibilities. When dawn arrives, trust your intuition even if the path seems uncharted. Fortune favors the bold. The universe sends a sign.", category:"luck" },
        { period:"tomorrow", text:"The Fool shapes the coming day — it grants lightness and freedom. Prepare yourself, for let go of old attachments. A fresh cycle begins. Spontaneity brings unexpected reward.", category:"action" },
        { period:"week", text:"This week The Fool opens doors to new possibilities. Throughout this week, trust your intuition even if the path seems uncharted. Fortune favors the bold. The universe sends a sign.", category:"luck" },
        { period:"week", text:"Over the next few days The Fool grants lightness and freedom. Let go of old attachments throughout the coming days. A fresh cycle begins. Spontaneity brings unexpected reward.", category:"action" },
        { period:"month", text:"This month The Fool opens doors to new possibilities. In the weeks ahead, trust your intuition even if the path seems uncharted. Fortune favors the bold. The universe sends a sign.", category:"luck" },
        { period:"month", text:"The month ahead sees The Fool grants lightness and freedom. Throughout the coming period, let go of old attachments. A fresh cycle begins. Spontaneity brings unexpected reward.", category:"action" },
        { period:"year", text:"This year The Fool opens doors to new possibilities. In the months ahead, trust your intuition even if the path seems uncharted. Fortune favors the bold. The universe sends a sign.", category:"luck" },
        { period:"year", text:"The year ahead brings The Fool's energy — it grants lightness and freedom. Throughout the coming year, let go of old attachments. A fresh cycle begins. Spontaneity brings unexpected reward.", category:"action" }
      ],
      neutral: [
        { period:"today", text:"The Fool advises you to stop and look around today. Right now, not all opportunities are equally beneficial. Do not rush decisions. Listen to your inner voice.", category:"caution" },
        { period:"today", text:"Today The Fool asks you to pause before leaping. Excitement may cloud your judgment right now. Examine what is offered with a clear eye. Patience prevents regret.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Fool advises you to stop and look around. When dawn arrives, not all opportunities are equally beneficial. Do not rush decisions. Listen to your inner voice.", category:"caution" },
        { period:"tomorrow", text:"The Fool shapes the coming day — it asks you to pause before leaping. Prepare yourself, for excitement may cloud your judgment. Examine what is offered with a clear eye. Patience prevents regret.", category:"caution" },
        { period:"week", text:"This week The Fool advises you to stop and look around. Throughout this week, not all opportunities are equally beneficial. Do not rush decisions. Listen to your inner voice.", category:"caution" },
        { period:"week", text:"Over the next few days The Fool asks you to pause before leaping. Excitement may cloud your judgment throughout the coming days. Examine what is offered with a clear eye. Patience prevents regret.", category:"caution" },
        { period:"month", text:"This month The Fool advises you to stop and look around. In the weeks ahead, not all opportunities are equally beneficial. Do not rush decisions. Listen to your inner voice.", category:"caution" },
        { period:"month", text:"The month ahead sees The Fool asks you to pause before leaping. Throughout the coming period, excitement may cloud your judgment. Examine what is offered with a clear eye. Patience prevents regret.", category:"caution" },
        { period:"year", text:"This year The Fool advises you to stop and look around. In the months ahead, not all opportunities are equally beneficial. Do not rush decisions. Listen to your inner voice.", category:"caution" },
        { period:"year", text:"The year ahead brings The Fool's energy — it asks you to pause before leaping. Throughout the coming year, excitement may cloud your judgment. Examine what is offered with a clear eye. Patience prevents regret.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Fool warns to pay close attention to details today. Right now, impulsive decisions may lead to losses. Double-check information before acting. Better to observe than leap blindly.", category:"caution" },
        { period:"today", text:"Today The Fool signals danger in carelessness. You risk overlooking something crucial right now. Slow down and reread the fine print. A hasty move could unravel progress.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Fool warns to pay close attention to details. When dawn arrives, impulsive decisions may lead to losses. Double-check information before acting. Better to observe than leap blindly.", category:"caution" },
        { period:"tomorrow", text:"The Fool shapes the coming day — it signals danger in carelessness. Prepare yourself, for you risk overlooking something crucial. Slow down and reread the fine print. A hasty move could unravel progress.", category:"action" },
        { period:"week", text:"This week The Fool warns to pay close attention to details. Throughout this week, impulsive decisions may lead to losses. Double-check information before acting. Better to observe than leap blindly.", category:"caution" },
        { period:"week", text:"Over the next few days The Fool signals danger in carelessness. You risk overlooking something crucial throughout the coming days. Slow down and reread the fine print. A hasty move could unravel progress.", category:"action" },
        { period:"month", text:"This month The Fool warns to pay close attention to details. In the weeks ahead, impulsive decisions may lead to losses. Double-check information before acting. Better to observe than leap blindly.", category:"caution" },
        { period:"month", text:"The month ahead sees The Fool signals danger in carelessness. Throughout the coming period, you risk overlooking something crucial. Slow down and reread the fine print. A hasty move could unravel progress.", category:"action" },
        { period:"year", text:"This year The Fool warns to pay close attention to details. In the months ahead, impulsive decisions may lead to losses. Double-check information before acting. Better to observe than leap blindly.", category:"caution" },
        { period:"year", text:"The year ahead brings The Fool's energy — it signals danger in carelessness. Throughout the coming year, you risk overlooking something crucial. Slow down and reread the fine print. A hasty move could unravel progress.", category:"action" }
      ]
    },

    // ── 1: The Magician ──
    1: {
      positive: [
        { period:"today", text:"The Magician activates all your resources today. This very day, you have everything needed for success. Channel willpower into a single direction. Results will exceed expectations.", category:"action" },
        { period:"today", text:"Today The Magician Mercury empowers your words and thoughts. Communication brings breakthroughs right now. Present your ideas boldly. Your mastery shines through every action.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow The Magician activates all your resources. As the new day unfolds, you have everything needed for success. Channel willpower into a single direction. Results will exceed expectations.", category:"action" },
        { period:"tomorrow", text:"The Magician shapes the coming day — it Mercury empowers your words and thoughts. Prepare yourself, for communication brings breakthroughs. Present your ideas boldly. Your mastery shines through every action.", category:"luck" },
        { period:"week", text:"This week The Magician activates all your resources. In the next few days, you have everything needed for success. Channel willpower into a single direction. Results will exceed expectations.", category:"action" },
        { period:"week", text:"Over the next few days The Magician Mercury empowers your words and thoughts. Communication brings breakthroughs throughout the coming days. Present your ideas boldly. Your mastery shines through every action.", category:"luck" },
        { period:"month", text:"This month The Magician activates all your resources. In the weeks ahead, you have everything needed for success. Channel willpower into a single direction. Results will exceed expectations.", category:"action" },
        { period:"month", text:"The month ahead sees The Magician Mercury empowers your words and thoughts. Throughout the coming period, communication brings breakthroughs. Present your ideas boldly. Your mastery shines through every action.", category:"luck" },
        { period:"year", text:"This year The Magician activates all your resources. In the months ahead, you have everything needed for success. Channel willpower into a single direction. Results will exceed expectations.", category:"action" },
        { period:"year", text:"The year ahead brings The Magician's energy — it Mercury empowers your words and thoughts. Throughout the coming year, communication brings breakthroughs. Present your ideas boldly. Your mastery shines through every action.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"The Magician reminds you to check your tools before starting today. This very day, preparation is half the victory. Ensure all resources are in place. Patience in planning leads to precision.", category:"caution" },
        { period:"today", text:"Today The Magician energy is present but requires focus. Power could scatter without direction right now. Clarify your intention. A clear target prevents wasted effort.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Magician reminds you to check your tools before starting. As the new day unfolds, preparation is half the victory. Ensure all resources are in place. Patience in planning leads to precision.", category:"caution" },
        { period:"tomorrow", text:"The Magician shapes the coming day — it energy is present but requires focus. Prepare yourself, for power could scatter without direction. Clarify your intention. A clear target prevents wasted effort.", category:"caution" },
        { period:"week", text:"This week The Magician reminds you to check your tools before starting. In the next few days, preparation is half the victory. Ensure all resources are in place. Patience in planning leads to precision.", category:"caution" },
        { period:"week", text:"Over the next few days The Magician energy is present but requires focus. Power could scatter without direction throughout the coming days. Clarify your intention. A clear target prevents wasted effort.", category:"caution" },
        { period:"month", text:"This month The Magician reminds you to check your tools before starting. In the weeks ahead, preparation is half the victory. Ensure all resources are in place. Patience in planning leads to precision.", category:"caution" },
        { period:"month", text:"The month ahead sees The Magician energy is present but requires focus. Throughout the coming period, power could scatter without direction. Clarify your intention. A clear target prevents wasted effort.", category:"caution" },
        { period:"year", text:"This year The Magician reminds you to check your tools before starting. In the months ahead, preparation is half the victory. Ensure all resources are in place. Patience in planning leads to precision.", category:"caution" },
        { period:"year", text:"The year ahead brings The Magician's energy — it energy is present but requires focus. Throughout the coming year, power could scatter without direction. Clarify your intention. A clear target prevents wasted effort.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Magician warns against manipulation and deception today. This very day, verify information from all sources. Someone may present illusions as reality. Trust facts over charming words.", category:"caution" },
        { period:"today", text:"Today The Magician reveals a gap between appearance and truth. An impressive presentation hides lack of substance right now. Look beyond the surface. Skill without integrity is dangerous.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Magician warns against manipulation and deception. As the new day unfolds, verify information from all sources. Someone may present illusions as reality. Trust facts over charming words.", category:"caution" },
        { period:"tomorrow", text:"The Magician shapes the coming day — it reveals a gap between appearance and truth. Prepare yourself, for an impressive presentation hides lack of substance. Look beyond the surface. Skill without integrity is dangerous.", category:"action" },
        { period:"week", text:"This week The Magician warns against manipulation and deception. In the next few days, verify information from all sources. Someone may present illusions as reality. Trust facts over charming words.", category:"caution" },
        { period:"week", text:"Over the next few days The Magician reveals a gap between appearance and truth. An impressive presentation hides lack of substance throughout the coming days. Look beyond the surface. Skill without integrity is dangerous.", category:"action" },
        { period:"month", text:"This month The Magician warns against manipulation and deception. In the weeks ahead, verify information from all sources. Someone may present illusions as reality. Trust facts over charming words.", category:"caution" },
        { period:"month", text:"The month ahead sees The Magician reveals a gap between appearance and truth. Throughout the coming period, an impressive presentation hides lack of substance. Look beyond the surface. Skill without integrity is dangerous.", category:"action" },
        { period:"year", text:"This year The Magician warns against manipulation and deception. In the months ahead, verify information from all sources. Someone may present illusions as reality. Trust facts over charming words.", category:"caution" },
        { period:"year", text:"The year ahead brings The Magician's energy — it reveals a gap between appearance and truth. Throughout the coming year, an impressive presentation hides lack of substance. Look beyond the surface. Skill without integrity is dangerous.", category:"action" }
      ]
    },

    // ── 2: The High Priestess ──
    2: {
      positive: [
        { period:"today", text:"The High Priestess opens the veil of mystery today. At this moment, your intuition is exceptionally sharp. Pay attention to dreams and subtle signs. The answers you seek are within you.", category:"luck" },
        { period:"today", text:"Today The High Priestess illuminates hidden truths through lunar light. Trust the quiet inner voice guiding you right now. Meditation and solitude bring clarity. Secrets reveal themselves at the perfect moment.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The High Priestess opens the veil of mystery. Prepare yourself for tomorrow, your intuition is exceptionally sharp. Pay attention to dreams and subtle signs. The answers you seek are within you.", category:"luck" },
        { period:"tomorrow", text:"The High Priestess shapes the coming day — it illuminates hidden truths through lunar light. Prepare yourself, for trust the quiet inner voice guiding you. Meditation and solitude bring clarity. Secrets reveal themselves at the perfect moment.", category:"action" },
        { period:"week", text:"This week The High Priestess opens the veil of mystery. Over the coming days, your intuition is exceptionally sharp. Pay attention to dreams and subtle signs. The answers you seek are within you.", category:"luck" },
        { period:"week", text:"Over the next few days The High Priestess illuminates hidden truths through lunar light. Trust the quiet inner voice guiding you throughout the coming days. Meditation and solitude bring clarity. Secrets reveal themselves at the perfect moment.", category:"action" },
        { period:"month", text:"This month The High Priestess opens the veil of mystery. In the weeks ahead, your intuition is exceptionally sharp. Pay attention to dreams and subtle signs. The answers you seek are within you.", category:"luck" },
        { period:"month", text:"The month ahead sees The High Priestess illuminates hidden truths through lunar light. Throughout the coming period, trust the quiet inner voice guiding you. Meditation and solitude bring clarity. Secrets reveal themselves at the perfect moment.", category:"action" },
        { period:"year", text:"This year The High Priestess opens the veil of mystery. In the months ahead, your intuition is exceptionally sharp. Pay attention to dreams and subtle signs. The answers you seek are within you.", category:"luck" },
        { period:"year", text:"The year ahead brings The High Priestess's energy — it illuminates hidden truths through lunar light. Throughout the coming year, trust the quiet inner voice guiding you. Meditation and solitude bring clarity. Secrets reveal themselves at the perfect moment.", category:"action" }
      ],
      neutral: [
        { period:"today", text:"The High Priestess advises patience today. At this moment, not everything needs to be understood immediately. Some mysteries unfold in their own time. Wait for clarity before sharing thoughts.", category:"caution" },
        { period:"today", text:"Today The High Priestess suggests withholding judgment. The full picture remains hidden right now. Resist filling gaps with assumptions. Silence serves better than speculation.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The High Priestess advises patience. Prepare yourself for tomorrow, not everything needs to be understood immediately. Some mysteries unfold in their own time. Wait for clarity before sharing thoughts.", category:"caution" },
        { period:"tomorrow", text:"The High Priestess shapes the coming day — it suggests withholding judgment. Prepare yourself, for the full picture remains hidden. Resist filling gaps with assumptions. Silence serves better than speculation.", category:"caution" },
        { period:"week", text:"This week The High Priestess advises patience. Over the coming days, not everything needs to be understood immediately. Some mysteries unfold in their own time. Wait for clarity before sharing thoughts.", category:"caution" },
        { period:"week", text:"Over the next few days The High Priestess suggests withholding judgment. The full picture remains hidden throughout the coming days. Resist filling gaps with assumptions. Silence serves better than speculation.", category:"caution" },
        { period:"month", text:"This month The High Priestess advises patience. In the weeks ahead, not everything needs to be understood immediately. Some mysteries unfold in their own time. Wait for clarity before sharing thoughts.", category:"caution" },
        { period:"month", text:"The month ahead sees The High Priestess suggests withholding judgment. Throughout the coming period, the full picture remains hidden. Resist filling gaps with assumptions. Silence serves better than speculation.", category:"caution" },
        { period:"year", text:"This year The High Priestess advises patience. In the months ahead, not everything needs to be understood immediately. Some mysteries unfold in their own time. Wait for clarity before sharing thoughts.", category:"caution" },
        { period:"year", text:"The year ahead brings The High Priestess's energy — it suggests withholding judgment. Throughout the coming year, the full picture remains hidden. Resist filling gaps with assumptions. Silence serves better than speculation.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The High Priestess warns of ignoring your intuition today. At this moment, logic alone will not serve you. If something feels wrong trust that feeling. Hidden forces are at work.", category:"caution" },
        { period:"today", text:"Today The High Priestess signals disconnection from inner knowing. You may be overthinking what should be felt right now. Stop analyzing and listen to your body. Ignoring gut feelings leads to mistakes.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The High Priestess warns of ignoring your intuition. Prepare yourself for tomorrow, logic alone will not serve you. If something feels wrong trust that feeling. Hidden forces are at work.", category:"caution" },
        { period:"tomorrow", text:"The High Priestess shapes the coming day — it signals disconnection from inner knowing. Prepare yourself, for you may be overthinking what should be felt. Stop analyzing and listen to your body. Ignoring gut feelings leads to mistakes.", category:"action" },
        { period:"week", text:"This week The High Priestess warns of ignoring your intuition. Over the coming days, logic alone will not serve you. If something feels wrong trust that feeling. Hidden forces are at work.", category:"caution" },
        { period:"week", text:"Over the next few days The High Priestess signals disconnection from inner knowing. You may be overthinking what should be felt throughout the coming days. Stop analyzing and listen to your body. Ignoring gut feelings leads to mistakes.", category:"action" },
        { period:"month", text:"This month The High Priestess warns of ignoring your intuition. In the weeks ahead, logic alone will not serve you. If something feels wrong trust that feeling. Hidden forces are at work.", category:"caution" },
        { period:"month", text:"The month ahead sees The High Priestess signals disconnection from inner knowing. Throughout the coming period, you may be overthinking what should be felt. Stop analyzing and listen to your body. Ignoring gut feelings leads to mistakes.", category:"action" },
        { period:"year", text:"This year The High Priestess warns of ignoring your intuition. In the months ahead, logic alone will not serve you. If something feels wrong trust that feeling. Hidden forces are at work.", category:"caution" },
        { period:"year", text:"The year ahead brings The High Priestess's energy — it signals disconnection from inner knowing. Throughout the coming year, you may be overthinking what should be felt. Stop analyzing and listen to your body. Ignoring gut feelings leads to mistakes.", category:"action" }
      ]
    },

    // ── 3: The Empress ──
    3: {
      positive: [
        { period:"today", text:"The Empress brings abundance and beauty today. Before the day ends, creative energy flows freely. Nurture relationships and watch them blossom. Matters of the heart are favored.", category:"love" },
        { period:"today", text:"Today The Empress Venus blesses you with grace and prosperity. Material concerns find resolution naturally right now. Enjoy the beauty around you. Generosity returns tenfold.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow The Empress brings abundance and beauty. The coming day, creative energy flows freely. Nurture relationships and watch them blossom. Matters of the heart are favored.", category:"love" },
        { period:"tomorrow", text:"The Empress shapes the coming day — it Venus blesses you with grace and prosperity. Prepare yourself, for material concerns find resolution naturally. Enjoy the beauty around you. Generosity returns tenfold.", category:"luck" },
        { period:"week", text:"This week The Empress brings abundance and beauty. The days ahead, creative energy flows freely. Nurture relationships and watch them blossom. Matters of the heart are favored.", category:"love" },
        { period:"week", text:"Over the next few days The Empress Venus blesses you with grace and prosperity. Material concerns find resolution naturally throughout the coming days. Enjoy the beauty around you. Generosity returns tenfold.", category:"luck" },
        { period:"month", text:"This month The Empress brings abundance and beauty. In the weeks ahead, creative energy flows freely. Nurture relationships and watch them blossom. Matters of the heart are favored.", category:"love" },
        { period:"month", text:"The month ahead sees The Empress Venus blesses you with grace and prosperity. Throughout the coming period, material concerns find resolution naturally. Enjoy the beauty around you. Generosity returns tenfold.", category:"luck" },
        { period:"year", text:"This year The Empress brings abundance and beauty. In the months ahead, creative energy flows freely. Nurture relationships and watch them blossom. Matters of the heart are favored.", category:"love" },
        { period:"year", text:"The year ahead brings The Empress's energy — it Venus blesses you with grace and prosperity. Throughout the coming year, material concerns find resolution naturally. Enjoy the beauty around you. Generosity returns tenfold.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"The Empress reminds you to care for yourself first today. Before the day ends, you cannot pour from an empty cup. Take time for comfort and self-nourishment. Balance giving with receiving.", category:"caution" },
        { period:"today", text:"Today The Empress suggests grounding your creative impulses. Not every idea needs immediate action right now. Focus on nurturing existing projects. Quality matters more than quantity.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Empress reminds you to care for yourself first. The coming day, you cannot pour from an empty cup. Take time for comfort and self-nourishment. Balance giving with receiving.", category:"caution" },
        { period:"tomorrow", text:"The Empress shapes the coming day — it suggests grounding your creative impulses. Prepare yourself, for not every idea needs immediate action. Focus on nurturing existing projects. Quality matters more than quantity.", category:"caution" },
        { period:"week", text:"This week The Empress reminds you to care for yourself first. The days ahead, you cannot pour from an empty cup. Take time for comfort and self-nourishment. Balance giving with receiving.", category:"caution" },
        { period:"week", text:"Over the next few days The Empress suggests grounding your creative impulses. Not every idea needs immediate action throughout the coming days. Focus on nurturing existing projects. Quality matters more than quantity.", category:"caution" },
        { period:"month", text:"This month The Empress reminds you to care for yourself first. In the weeks ahead, you cannot pour from an empty cup. Take time for comfort and self-nourishment. Balance giving with receiving.", category:"caution" },
        { period:"month", text:"The month ahead sees The Empress suggests grounding your creative impulses. Throughout the coming period, not every idea needs immediate action. Focus on nurturing existing projects. Quality matters more than quantity.", category:"caution" },
        { period:"year", text:"This year The Empress reminds you to care for yourself first. In the months ahead, you cannot pour from an empty cup. Take time for comfort and self-nourishment. Balance giving with receiving.", category:"caution" },
        { period:"year", text:"The year ahead brings The Empress's energy — it suggests grounding your creative impulses. Throughout the coming year, not every idea needs immediate action. Focus on nurturing existing projects. Quality matters more than quantity.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Empress warns against excess and indulgence today. Before the day ends, luxury now may cost dearly later. Be mindful of spending and overcommitting. Find beauty in simplicity.", category:"caution" },
        { period:"today", text:"Today The Empress reveals neglect of something important. You may be smothering one area while starving another right now. Check body finances and relationships. Imbalance left unchecked grows worse.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Empress warns against excess and indulgence. The coming day, luxury now may cost dearly later. Be mindful of spending and overcommitting. Find beauty in simplicity.", category:"caution" },
        { period:"tomorrow", text:"The Empress shapes the coming day — it reveals neglect of something important. Prepare yourself, for you may be smothering one area while starving another. Check body finances and relationships. Imbalance left unchecked grows worse.", category:"action" },
        { period:"week", text:"This week The Empress warns against excess and indulgence. The days ahead, luxury now may cost dearly later. Be mindful of spending and overcommitting. Find beauty in simplicity.", category:"caution" },
        { period:"week", text:"Over the next few days The Empress reveals neglect of something important. You may be smothering one area while starving another throughout the coming days. Check body finances and relationships. Imbalance left unchecked grows worse.", category:"action" },
        { period:"month", text:"This month The Empress warns against excess and indulgence. In the weeks ahead, luxury now may cost dearly later. Be mindful of spending and overcommitting. Find beauty in simplicity.", category:"caution" },
        { period:"month", text:"The month ahead sees The Empress reveals neglect of something important. Throughout the coming period, you may be smothering one area while starving another. Check body finances and relationships. Imbalance left unchecked grows worse.", category:"action" },
        { period:"year", text:"This year The Empress warns against excess and indulgence. In the months ahead, luxury now may cost dearly later. Be mindful of spending and overcommitting. Find beauty in simplicity.", category:"caution" },
        { period:"year", text:"The year ahead brings The Empress's energy — it reveals neglect of something important. Throughout the coming year, you may be smothering one area while starving another. Check body finances and relationships. Imbalance left unchecked grows worse.", category:"action" }
      ]
    },

    // ── 4: The Emperor ──
    4: {
      positive: [
        { period:"today", text:"The Emperor strengthens your authority and discipline today. Right now, you command respect through decisive action. Structure brings clarity to chaos. Lead with confidence.", category:"action" },
        { period:"today", text:"Today The Emperor Mars channels warrior energy productively. Boundaries you set protect your future right now. Practical decisions yield solid results. Your leadership inspires others.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow The Emperor strengthens your authority and discipline. When dawn arrives, you command respect through decisive action. Structure brings clarity to chaos. Lead with confidence.", category:"action" },
        { period:"tomorrow", text:"The Emperor shapes the coming day — it Mars channels warrior energy productively. Prepare yourself, for boundaries you set protect your future. Practical decisions yield solid results. Your leadership inspires others.", category:"luck" },
        { period:"week", text:"This week The Emperor strengthens your authority and discipline. Throughout this week, you command respect through decisive action. Structure brings clarity to chaos. Lead with confidence.", category:"action" },
        { period:"week", text:"Over the next few days The Emperor Mars channels warrior energy productively. Boundaries you set protect your future throughout the coming days. Practical decisions yield solid results. Your leadership inspires others.", category:"luck" },
        { period:"month", text:"This month The Emperor strengthens your authority and discipline. In the weeks ahead, you command respect through decisive action. Structure brings clarity to chaos. Lead with confidence.", category:"action" },
        { period:"month", text:"The month ahead sees The Emperor Mars channels warrior energy productively. Throughout the coming period, boundaries you set protect your future. Practical decisions yield solid results. Your leadership inspires others.", category:"luck" },
        { period:"year", text:"This year The Emperor strengthens your authority and discipline. In the months ahead, you command respect through decisive action. Structure brings clarity to chaos. Lead with confidence.", category:"action" },
        { period:"year", text:"The year ahead brings The Emperor's energy — it Mars channels warrior energy productively. Throughout the coming year, boundaries you set protect your future. Practical decisions yield solid results. Your leadership inspires others.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"The Emperor advises structure over spontaneity today. Right now, plans require clear execution steps. Resist the urge to improvise. Reliable routines yield predictable results.", category:"caution" },
        { period:"today", text:"Today The Emperor reminds you that control has limits. Some things grow better without micromanagement right now. Delegate and trust your systems. Flexibility within structure creates resilience.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Emperor advises structure over spontaneity. When dawn arrives, plans require clear execution steps. Resist the urge to improvise. Reliable routines yield predictable results.", category:"caution" },
        { period:"tomorrow", text:"The Emperor shapes the coming day — it reminds you that control has limits. Prepare yourself, for some things grow better without micromanagement. Delegate and trust your systems. Flexibility within structure creates resilience.", category:"caution" },
        { period:"week", text:"This week The Emperor advises structure over spontaneity. Throughout this week, plans require clear execution steps. Resist the urge to improvise. Reliable routines yield predictable results.", category:"caution" },
        { period:"week", text:"Over the next few days The Emperor reminds you that control has limits. Some things grow better without micromanagement throughout the coming days. Delegate and trust your systems. Flexibility within structure creates resilience.", category:"caution" },
        { period:"month", text:"This month The Emperor advises structure over spontaneity. In the weeks ahead, plans require clear execution steps. Resist the urge to improvise. Reliable routines yield predictable results.", category:"caution" },
        { period:"month", text:"The month ahead sees The Emperor reminds you that control has limits. Throughout the coming period, some things grow better without micromanagement. Delegate and trust your systems. Flexibility within structure creates resilience.", category:"caution" },
        { period:"year", text:"This year The Emperor advises structure over spontaneity. In the months ahead, plans require clear execution steps. Resist the urge to improvise. Reliable routines yield predictable results.", category:"caution" },
        { period:"year", text:"The year ahead brings The Emperor's energy — it reminds you that control has limits. Throughout the coming year, some things grow better without micromanagement. Delegate and trust your systems. Flexibility within structure creates resilience.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Emperor warns against rigidity and stubbornness today. Right now, holding too tightly creates tension. Allow others to contribute their perspective. True strength includes the ability to adapt.", category:"caution" },
        { period:"today", text:"Today The Emperor reveals ego blocking progress. Power struggles arise from unchecked pride right now. Step back from control to see the bigger picture. Humility restores balance where force fails.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Emperor warns against rigidity and stubbornness. When dawn arrives, holding too tightly creates tension. Allow others to contribute their perspective. True strength includes the ability to adapt.", category:"caution" },
        { period:"tomorrow", text:"The Emperor shapes the coming day — it reveals ego blocking progress. Prepare yourself, for power struggles arise from unchecked pride. Step back from control to see the bigger picture. Humility restores balance where force fails.", category:"action" },
        { period:"week", text:"This week The Emperor warns against rigidity and stubbornness. Throughout this week, holding too tightly creates tension. Allow others to contribute their perspective. True strength includes the ability to adapt.", category:"caution" },
        { period:"week", text:"Over the next few days The Emperor reveals ego blocking progress. Power struggles arise from unchecked pride throughout the coming days. Step back from control to see the bigger picture. Humility restores balance where force fails.", category:"action" },
        { period:"month", text:"This month The Emperor warns against rigidity and stubbornness. In the weeks ahead, holding too tightly creates tension. Allow others to contribute their perspective. True strength includes the ability to adapt.", category:"caution" },
        { period:"month", text:"The month ahead sees The Emperor reveals ego blocking progress. Throughout the coming period, power struggles arise from unchecked pride. Step back from control to see the bigger picture. Humility restores balance where force fails.", category:"action" },
        { period:"year", text:"This year The Emperor warns against rigidity and stubbornness. In the months ahead, holding too tightly creates tension. Allow others to contribute their perspective. True strength includes the ability to adapt.", category:"caution" },
        { period:"year", text:"The year ahead brings The Emperor's energy — it reveals ego blocking progress. Throughout the coming year, power struggles arise from unchecked pride. Step back from control to see the bigger picture. Humility restores balance where force fails.", category:"action" }
      ]
    },

    // ── 5: The Hierophant ──
    5: {
      positive: [
        { period:"today", text:"The Hierophant connects you to ancient wisdom today. This very day, traditions and established methods serve you well. Seek guidance from mentors. Knowledge shared is knowledge multiplied.", category:"luck" },
        { period:"today", text:"Today The Hierophant aligns spiritual teachings with practical needs. A teacher appears in unexpected form right now. Trust conventional wisdom. Foundations built on tradition stand firm.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Hierophant connects you to ancient wisdom. As the new day unfolds, traditions and established methods serve you well. Seek guidance from mentors. Knowledge shared is knowledge multiplied.", category:"luck" },
        { period:"tomorrow", text:"The Hierophant shapes the coming day — it aligns spiritual teachings with practical needs. Prepare yourself, for a teacher appears in unexpected form. Trust conventional wisdom. Foundations built on tradition stand firm.", category:"action" },
        { period:"week", text:"This week The Hierophant connects you to ancient wisdom. In the next few days, traditions and established methods serve you well. Seek guidance from mentors. Knowledge shared is knowledge multiplied.", category:"luck" },
        { period:"week", text:"Over the next few days The Hierophant aligns spiritual teachings with practical needs. A teacher appears in unexpected form throughout the coming days. Trust conventional wisdom. Foundations built on tradition stand firm.", category:"action" },
        { period:"month", text:"This month The Hierophant connects you to ancient wisdom. In the weeks ahead, traditions and established methods serve you well. Seek guidance from mentors. Knowledge shared is knowledge multiplied.", category:"luck" },
        { period:"month", text:"The month ahead sees The Hierophant aligns spiritual teachings with practical needs. Throughout the coming period, a teacher appears in unexpected form. Trust conventional wisdom. Foundations built on tradition stand firm.", category:"action" },
        { period:"year", text:"This year The Hierophant connects you to ancient wisdom. In the months ahead, traditions and established methods serve you well. Seek guidance from mentors. Knowledge shared is knowledge multiplied.", category:"luck" },
        { period:"year", text:"The year ahead brings The Hierophant's energy — it aligns spiritual teachings with practical needs. Throughout the coming year, a teacher appears in unexpected form. Trust conventional wisdom. Foundations built on tradition stand firm.", category:"action" }
      ],
      neutral: [
        { period:"today", text:"The Hierophant suggests following established procedures today. This very day, this is not the time for breaking rules. Respect existing systems. Patience with bureaucracy pays off.", category:"caution" },
        { period:"today", text:"Today The Hierophant asks you to examine your beliefs. Are your convictions truly yours or inherited right now. Questioning tradition leads to deeper understanding. Authentic faith grows through inquiry.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Hierophant suggests following established procedures. As the new day unfolds, this is not the time for breaking rules. Respect existing systems. Patience with bureaucracy pays off.", category:"caution" },
        { period:"tomorrow", text:"The Hierophant shapes the coming day — it asks you to examine your beliefs. Prepare yourself, for are your convictions truly yours or inherited. Questioning tradition leads to deeper understanding. Authentic faith grows through inquiry.", category:"caution" },
        { period:"week", text:"This week The Hierophant suggests following established procedures. In the next few days, this is not the time for breaking rules. Respect existing systems. Patience with bureaucracy pays off.", category:"caution" },
        { period:"week", text:"Over the next few days The Hierophant asks you to examine your beliefs. Are your convictions truly yours or inherited throughout the coming days. Questioning tradition leads to deeper understanding. Authentic faith grows through inquiry.", category:"caution" },
        { period:"month", text:"This month The Hierophant suggests following established procedures. In the weeks ahead, this is not the time for breaking rules. Respect existing systems. Patience with bureaucracy pays off.", category:"caution" },
        { period:"month", text:"The month ahead sees The Hierophant asks you to examine your beliefs. Throughout the coming period, are your convictions truly yours or inherited. Questioning tradition leads to deeper understanding. Authentic faith grows through inquiry.", category:"caution" },
        { period:"year", text:"This year The Hierophant suggests following established procedures. In the months ahead, this is not the time for breaking rules. Respect existing systems. Patience with bureaucracy pays off.", category:"caution" },
        { period:"year", text:"The year ahead brings The Hierophant's energy — it asks you to examine your beliefs. Throughout the coming year, are your convictions truly yours or inherited. Questioning tradition leads to deeper understanding. Authentic faith grows through inquiry.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Hierophant warns against blind conformity today. This very day, following rules without understanding breeds stagnation. Question authority when something feels wrong. Inner truth matters more than approval.", category:"caution" },
        { period:"today", text:"Today The Hierophant reveals dogma blocking your growth. Rigid thinking stifles your spirit right now. Break free from limiting beliefs. True wisdom transcends any single doctrine.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Hierophant warns against blind conformity. As the new day unfolds, following rules without understanding breeds stagnation. Question authority when something feels wrong. Inner truth matters more than approval.", category:"caution" },
        { period:"tomorrow", text:"The Hierophant shapes the coming day — it reveals dogma blocking your growth. Prepare yourself, for rigid thinking stifles your spirit. Break free from limiting beliefs. True wisdom transcends any single doctrine.", category:"action" },
        { period:"week", text:"This week The Hierophant warns against blind conformity. In the next few days, following rules without understanding breeds stagnation. Question authority when something feels wrong. Inner truth matters more than approval.", category:"caution" },
        { period:"week", text:"Over the next few days The Hierophant reveals dogma blocking your growth. Rigid thinking stifles your spirit throughout the coming days. Break free from limiting beliefs. True wisdom transcends any single doctrine.", category:"action" },
        { period:"month", text:"This month The Hierophant warns against blind conformity. In the weeks ahead, following rules without understanding breeds stagnation. Question authority when something feels wrong. Inner truth matters more than approval.", category:"caution" },
        { period:"month", text:"The month ahead sees The Hierophant reveals dogma blocking your growth. Throughout the coming period, rigid thinking stifles your spirit. Break free from limiting beliefs. True wisdom transcends any single doctrine.", category:"action" },
        { period:"year", text:"This year The Hierophant warns against blind conformity. In the months ahead, following rules without understanding breeds stagnation. Question authority when something feels wrong. Inner truth matters more than approval.", category:"caution" },
        { period:"year", text:"The year ahead brings The Hierophant's energy — it reveals dogma blocking your growth. Throughout the coming year, rigid thinking stifles your spirit. Break free from limiting beliefs. True wisdom transcends any single doctrine.", category:"action" }
      ]
    },

    // ── 6: The Lovers ──
    6: {
      positive: [
        { period:"today", text:"The Lovers illuminate the path of the heart today. At this moment, important choices align with your deepest values. Harmony in relationships brings joy. Love in all its forms flows freely to you.", category:"love" },
        { period:"today", text:"Today The Lovers bless communication in partnerships. Express your feelings openly right now. Connections deepen through honest dialogue. The choice before you leads to growth.", category:"love" },
        { period:"tomorrow", text:"Tomorrow The Lovers illuminate the path of the heart. Prepare yourself for tomorrow, important choices align with your deepest values. Harmony in relationships brings joy. Love in all its forms flows freely to you.", category:"love" },
        { period:"tomorrow", text:"The Lovers shapes the coming day — it bless communication in partnerships. Prepare yourself, for express your feelings openly. Connections deepen through honest dialogue. The choice before you leads to growth.", category:"love" },
        { period:"week", text:"This week The Lovers illuminate the path of the heart. Over the coming days, important choices align with your deepest values. Harmony in relationships brings joy. Love in all its forms flows freely to you.", category:"love" },
        { period:"week", text:"Over the next few days The Lovers bless communication in partnerships. Express your feelings openly throughout the coming days. Connections deepen through honest dialogue. The choice before you leads to growth.", category:"love" },
        { period:"month", text:"This month The Lovers illuminate the path of the heart. In the weeks ahead, important choices align with your deepest values. Harmony in relationships brings joy. Love in all its forms flows freely to you.", category:"love" },
        { period:"month", text:"The month ahead sees The Lovers bless communication in partnerships. Throughout the coming period, express your feelings openly. Connections deepen through honest dialogue. The choice before you leads to growth.", category:"love" },
        { period:"year", text:"This year The Lovers illuminate the path of the heart. In the months ahead, important choices align with your deepest values. Harmony in relationships brings joy. Love in all its forms flows freely to you.", category:"love" },
        { period:"year", text:"The year ahead brings The Lovers's energy — it bless communication in partnerships. Throughout the coming year, express your feelings openly. Connections deepen through honest dialogue. The choice before you leads to growth.", category:"love" }
      ],
      neutral: [
        { period:"today", text:"The Lovers present a crossroads today. At this moment, weigh options carefully as both paths have merit. Do not rush this decision. Consult your heart and mind equally.", category:"caution" },
        { period:"today", text:"Today The Lovers ask you to examine your values. Are commitments aligned with who you are becoming right now. Honest self-reflection reveals the right direction. Compromise without self-betrayal is key.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Lovers present a crossroads. Prepare yourself for tomorrow, weigh options carefully as both paths have merit. Do not rush this decision. Consult your heart and mind equally.", category:"caution" },
        { period:"tomorrow", text:"The Lovers shapes the coming day — it ask you to examine your values. Prepare yourself, for are commitments aligned with who you are becoming. Honest self-reflection reveals the right direction. Compromise without self-betrayal is key.", category:"caution" },
        { period:"week", text:"This week The Lovers present a crossroads. Over the coming days, weigh options carefully as both paths have merit. Do not rush this decision. Consult your heart and mind equally.", category:"caution" },
        { period:"week", text:"Over the next few days The Lovers ask you to examine your values. Are commitments aligned with who you are becoming throughout the coming days. Honest self-reflection reveals the right direction. Compromise without self-betrayal is key.", category:"caution" },
        { period:"month", text:"This month The Lovers present a crossroads. In the weeks ahead, weigh options carefully as both paths have merit. Do not rush this decision. Consult your heart and mind equally.", category:"caution" },
        { period:"month", text:"The month ahead sees The Lovers ask you to examine your values. Throughout the coming period, are commitments aligned with who you are becoming. Honest self-reflection reveals the right direction. Compromise without self-betrayal is key.", category:"caution" },
        { period:"year", text:"This year The Lovers present a crossroads. In the months ahead, weigh options carefully as both paths have merit. Do not rush this decision. Consult your heart and mind equally.", category:"caution" },
        { period:"year", text:"The year ahead brings The Lovers's energy — it ask you to examine your values. Throughout the coming year, are commitments aligned with who you are becoming. Honest self-reflection reveals the right direction. Compromise without self-betrayal is key.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Lovers warn of disharmony in close relationships today. At this moment, miscommunication creates unnecessary distance. Clarify intentions before assumptions take root. Honest conversation prevents rifts.", category:"caution" },
        { period:"today", text:"Today The Lovers signal inner conflict about a major choice. Avoid decisions driven by fear or desire alone right now. Reconnect with core values before committing. True love never demands betrayal of truth.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Lovers warn of disharmony in close relationships. Prepare yourself for tomorrow, miscommunication creates unnecessary distance. Clarify intentions before assumptions take root. Honest conversation prevents rifts.", category:"caution" },
        { period:"tomorrow", text:"The Lovers shapes the coming day — it signal inner conflict about a major choice. Prepare yourself, for avoid decisions driven by fear or desire alone. Reconnect with core values before committing. True love never demands betrayal of truth.", category:"action" },
        { period:"week", text:"This week The Lovers warn of disharmony in close relationships. Over the coming days, miscommunication creates unnecessary distance. Clarify intentions before assumptions take root. Honest conversation prevents rifts.", category:"caution" },
        { period:"week", text:"Over the next few days The Lovers signal inner conflict about a major choice. Avoid decisions driven by fear or desire alone throughout the coming days. Reconnect with core values before committing. True love never demands betrayal of truth.", category:"action" },
        { period:"month", text:"This month The Lovers warn of disharmony in close relationships. In the weeks ahead, miscommunication creates unnecessary distance. Clarify intentions before assumptions take root. Honest conversation prevents rifts.", category:"caution" },
        { period:"month", text:"The month ahead sees The Lovers signal inner conflict about a major choice. Throughout the coming period, avoid decisions driven by fear or desire alone. Reconnect with core values before committing. True love never demands betrayal of truth.", category:"action" },
        { period:"year", text:"This year The Lovers warn of disharmony in close relationships. In the months ahead, miscommunication creates unnecessary distance. Clarify intentions before assumptions take root. Honest conversation prevents rifts.", category:"caution" },
        { period:"year", text:"The year ahead brings The Lovers's energy — it signal inner conflict about a major choice. Throughout the coming year, avoid decisions driven by fear or desire alone. Reconnect with core values before committing. True love never demands betrayal of truth.", category:"action" }
      ]
    },

    // ── 7: The Chariot ──
    7: {
      positive: [
        { period:"today", text:"The Chariot propels you forward with unstoppable momentum today. Before the day ends, victory comes through focused willpower. Obstacles crumble before your determination. Channel opposing forces into one direction.", category:"action" },
        { period:"today", text:"Today The Chariot combines emotional drive with iron will. Movement and travel are favored right now. Take the reins without hesitation. Success comes to those who steer with confidence.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow The Chariot propels you forward with unstoppable momentum. The coming day, victory comes through focused willpower. Obstacles crumble before your determination. Channel opposing forces into one direction.", category:"action" },
        { period:"tomorrow", text:"The Chariot shapes the coming day — it combines emotional drive with iron will. Prepare yourself, for movement and travel are favored. Take the reins without hesitation. Success comes to those who steer with confidence.", category:"luck" },
        { period:"week", text:"This week The Chariot propels you forward with unstoppable momentum. The days ahead, victory comes through focused willpower. Obstacles crumble before your determination. Channel opposing forces into one direction.", category:"action" },
        { period:"week", text:"Over the next few days The Chariot combines emotional drive with iron will. Movement and travel are favored throughout the coming days. Take the reins without hesitation. Success comes to those who steer with confidence.", category:"luck" },
        { period:"month", text:"This month The Chariot propels you forward with unstoppable momentum. In the weeks ahead, victory comes through focused willpower. Obstacles crumble before your determination. Channel opposing forces into one direction.", category:"action" },
        { period:"month", text:"The month ahead sees The Chariot combines emotional drive with iron will. Throughout the coming period, movement and travel are favored. Take the reins without hesitation. Success comes to those who steer with confidence.", category:"luck" },
        { period:"year", text:"This year The Chariot propels you forward with unstoppable momentum. In the months ahead, victory comes through focused willpower. Obstacles crumble before your determination. Channel opposing forces into one direction.", category:"action" },
        { period:"year", text:"The year ahead brings The Chariot's energy — it combines emotional drive with iron will. Throughout the coming year, movement and travel are favored. Take the reins without hesitation. Success comes to those who steer with confidence.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"The Chariot reminds you that control requires balance today. Before the day ends, driving too hard burns out energy. Pace yourself on the journey. Rest is not retreat but strategy.", category:"caution" },
        { period:"today", text:"Today The Chariot suggests checking your direction before accelerating. Speed without purpose wastes energy right now. Ensure goals align with your deeper mission. Adjust course while momentum allows.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Chariot reminds you that control requires balance. The coming day, driving too hard burns out energy. Pace yourself on the journey. Rest is not retreat but strategy.", category:"caution" },
        { period:"tomorrow", text:"The Chariot shapes the coming day — it suggests checking your direction before accelerating. Prepare yourself, for speed without purpose wastes energy. Ensure goals align with your deeper mission. Adjust course while momentum allows.", category:"caution" },
        { period:"week", text:"This week The Chariot reminds you that control requires balance. The days ahead, driving too hard burns out energy. Pace yourself on the journey. Rest is not retreat but strategy.", category:"caution" },
        { period:"week", text:"Over the next few days The Chariot suggests checking your direction before accelerating. Speed without purpose wastes energy throughout the coming days. Ensure goals align with your deeper mission. Adjust course while momentum allows.", category:"caution" },
        { period:"month", text:"This month The Chariot reminds you that control requires balance. In the weeks ahead, driving too hard burns out energy. Pace yourself on the journey. Rest is not retreat but strategy.", category:"caution" },
        { period:"month", text:"The month ahead sees The Chariot suggests checking your direction before accelerating. Throughout the coming period, speed without purpose wastes energy. Ensure goals align with your deeper mission. Adjust course while momentum allows.", category:"caution" },
        { period:"year", text:"This year The Chariot reminds you that control requires balance. In the months ahead, driving too hard burns out energy. Pace yourself on the journey. Rest is not retreat but strategy.", category:"caution" },
        { period:"year", text:"The year ahead brings The Chariot's energy — it suggests checking your direction before accelerating. Throughout the coming year, speed without purpose wastes energy. Ensure goals align with your deeper mission. Adjust course while momentum allows.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Chariot warns of reckless ambition today. Before the day ends, pushing too hard creates resistance. Others may feel steamrolled by your drive. True victory includes those around you.", category:"caution" },
        { period:"today", text:"Today The Chariot signals loss of control or scattered efforts. Opposing forces pull you apart right now. Regroup simplify and choose one battle. Surrender to what you cannot control.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Chariot warns of reckless ambition. The coming day, pushing too hard creates resistance. Others may feel steamrolled by your drive. True victory includes those around you.", category:"caution" },
        { period:"tomorrow", text:"The Chariot shapes the coming day — it signals loss of control or scattered efforts. Prepare yourself, for opposing forces pull you apart. Regroup simplify and choose one battle. Surrender to what you cannot control.", category:"action" },
        { period:"week", text:"This week The Chariot warns of reckless ambition. The days ahead, pushing too hard creates resistance. Others may feel steamrolled by your drive. True victory includes those around you.", category:"caution" },
        { period:"week", text:"Over the next few days The Chariot signals loss of control or scattered efforts. Opposing forces pull you apart throughout the coming days. Regroup simplify and choose one battle. Surrender to what you cannot control.", category:"action" },
        { period:"month", text:"This month The Chariot warns of reckless ambition. In the weeks ahead, pushing too hard creates resistance. Others may feel steamrolled by your drive. True victory includes those around you.", category:"caution" },
        { period:"month", text:"The month ahead sees The Chariot signals loss of control or scattered efforts. Throughout the coming period, opposing forces pull you apart. Regroup simplify and choose one battle. Surrender to what you cannot control.", category:"action" },
        { period:"year", text:"This year The Chariot warns of reckless ambition. In the months ahead, pushing too hard creates resistance. Others may feel steamrolled by your drive. True victory includes those around you.", category:"caution" },
        { period:"year", text:"The year ahead brings The Chariot's energy — it signals loss of control or scattered efforts. Throughout the coming year, opposing forces pull you apart. Regroup simplify and choose one battle. Surrender to what you cannot control.", category:"action" }
      ]
    },

    // ── 8: Strength ──
    8: {
      positive: [
        { period:"today", text:"Strength fills you with quiet courage and inner fire today. Right now, gentle persistence overcomes any obstacle. Patience and compassion are powerful forces. Tame your fears with love not force.", category:"action" },
        { period:"today", text:"Today Strength ignites your inner lion. Confidence radiates naturally from you right now. Face challenges with grace. Others draw strength from your example.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow Strength fills you with quiet courage and inner fire. When dawn arrives, gentle persistence overcomes any obstacle. Patience and compassion are powerful forces. Tame your fears with love not force.", category:"action" },
        { period:"tomorrow", text:"Strength shapes the coming day — it ignites your inner lion. Prepare yourself, for confidence radiates naturally from you. Face challenges with grace. Others draw strength from your example.", category:"luck" },
        { period:"week", text:"This week Strength fills you with quiet courage and inner fire. Throughout this week, gentle persistence overcomes any obstacle. Patience and compassion are powerful forces. Tame your fears with love not force.", category:"action" },
        { period:"week", text:"Over the next few days Strength ignites your inner lion. Confidence radiates naturally from you throughout the coming days. Face challenges with grace. Others draw strength from your example.", category:"luck" },
        { period:"month", text:"This month Strength fills you with quiet courage and inner fire. In the weeks ahead, gentle persistence overcomes any obstacle. Patience and compassion are powerful forces. Tame your fears with love not force.", category:"action" },
        { period:"month", text:"The month ahead sees Strength ignites your inner lion. Throughout the coming period, confidence radiates naturally from you. Face challenges with grace. Others draw strength from your example.", category:"luck" },
        { period:"year", text:"This year Strength fills you with quiet courage and inner fire. In the months ahead, gentle persistence overcomes any obstacle. Patience and compassion are powerful forces. Tame your fears with love not force.", category:"action" },
        { period:"year", text:"The year ahead brings Strength's energy — it ignites your inner lion. Throughout the coming year, confidence radiates naturally from you. Face challenges with grace. Others draw strength from your example.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"Strength asks you to find balance between force and yielding today. Right now, not every battle needs to be fought. The bravest act may be to endure. Conserve energy for what truly matters.", category:"caution" },
        { period:"today", text:"Today Strength in its quiet aspect reminds you that rest rebuilds power. Acknowledge limits without shame right now. Seek support when the burden feels heavy. True strength includes asking for help.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow Strength asks you to find balance between force and yielding. When dawn arrives, not every battle needs to be fought. The bravest act may be to endure. Conserve energy for what truly matters.", category:"caution" },
        { period:"tomorrow", text:"Strength shapes the coming day — it in its quiet aspect reminds you that rest rebuilds power. Prepare yourself, for acknowledge limits without shame. Seek support when the burden feels heavy. True strength includes asking for help.", category:"caution" },
        { period:"week", text:"This week Strength asks you to find balance between force and yielding. Throughout this week, not every battle needs to be fought. The bravest act may be to endure. Conserve energy for what truly matters.", category:"caution" },
        { period:"week", text:"Over the next few days Strength in its quiet aspect reminds you that rest rebuilds power. Acknowledge limits without shame throughout the coming days. Seek support when the burden feels heavy. True strength includes asking for help.", category:"caution" },
        { period:"month", text:"This month Strength asks you to find balance between force and yielding. In the weeks ahead, not every battle needs to be fought. The bravest act may be to endure. Conserve energy for what truly matters.", category:"caution" },
        { period:"month", text:"The month ahead sees Strength in its quiet aspect reminds you that rest rebuilds power. Throughout the coming period, acknowledge limits without shame. Seek support when the burden feels heavy. True strength includes asking for help.", category:"caution" },
        { period:"year", text:"This year Strength asks you to find balance between force and yielding. In the months ahead, not every battle needs to be fought. The bravest act may be to endure. Conserve energy for what truly matters.", category:"caution" },
        { period:"year", text:"The year ahead brings Strength's energy — it in its quiet aspect reminds you that rest rebuilds power. Throughout the coming year, acknowledge limits without shame. Seek support when the burden feels heavy. True strength includes asking for help.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"Strength warns of suppressed emotions erupting today. Right now, what you resist persists with greater force. Acknowledge anger or fear before it controls you. Healing requires facing what you avoid.", category:"caution" },
        { period:"today", text:"Today Strength reveals a crisis of confidence undermining your power. Reconnect with past victories to remember capability right now. The fire within needs tending not extinguishing. Doubt is the enemy not the challenge itself.", category:"action" },
        { period:"tomorrow", text:"Tomorrow Strength warns of suppressed emotions erupting. When dawn arrives, what you resist persists with greater force. Acknowledge anger or fear before it controls you. Healing requires facing what you avoid.", category:"caution" },
        { period:"tomorrow", text:"Strength shapes the coming day — it reveals a crisis of confidence undermining your power. Prepare yourself, for reconnect with past victories to remember capability. The fire within needs tending not extinguishing. Doubt is the enemy not the challenge itself.", category:"action" },
        { period:"week", text:"This week Strength warns of suppressed emotions erupting. Throughout this week, what you resist persists with greater force. Acknowledge anger or fear before it controls you. Healing requires facing what you avoid.", category:"caution" },
        { period:"week", text:"Over the next few days Strength reveals a crisis of confidence undermining your power. Reconnect with past victories to remember capability throughout the coming days. The fire within needs tending not extinguishing. Doubt is the enemy not the challenge itself.", category:"action" },
        { period:"month", text:"This month Strength warns of suppressed emotions erupting. In the weeks ahead, what you resist persists with greater force. Acknowledge anger or fear before it controls you. Healing requires facing what you avoid.", category:"caution" },
        { period:"month", text:"The month ahead sees Strength reveals a crisis of confidence undermining your power. Throughout the coming period, reconnect with past victories to remember capability. The fire within needs tending not extinguishing. Doubt is the enemy not the challenge itself.", category:"action" },
        { period:"year", text:"This year Strength warns of suppressed emotions erupting. In the months ahead, what you resist persists with greater force. Acknowledge anger or fear before it controls you. Healing requires facing what you avoid.", category:"caution" },
        { period:"year", text:"The year ahead brings Strength's energy — it reveals a crisis of confidence undermining your power. Throughout the coming year, reconnect with past victories to remember capability. The fire within needs tending not extinguishing. Doubt is the enemy not the challenge itself.", category:"action" }
      ]
    },

    // ── 9: The Hermit ──
    9: {
      positive: [
        { period:"today", text:"The Hermit lights your path with inner wisdom today. This very day, solitude brings clarity that crowds cannot. Turn inward for the answers waiting in silence. Your analytical mind cuts through confusion.", category:"luck" },
        { period:"today", text:"Today The Hermit sharpens your perception to a fine point. Research and study yield remarkable discoveries right now. Step away from noise to hear truth. Your own experience is the most reliable guide.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Hermit lights your path with inner wisdom. As the new day unfolds, solitude brings clarity that crowds cannot. Turn inward for the answers waiting in silence. Your analytical mind cuts through confusion.", category:"luck" },
        { period:"tomorrow", text:"The Hermit shapes the coming day — it sharpens your perception to a fine point. Prepare yourself, for research and study yield remarkable discoveries. Step away from noise to hear truth. Your own experience is the most reliable guide.", category:"action" },
        { period:"week", text:"This week The Hermit lights your path with inner wisdom. In the next few days, solitude brings clarity that crowds cannot. Turn inward for the answers waiting in silence. Your analytical mind cuts through confusion.", category:"luck" },
        { period:"week", text:"Over the next few days The Hermit sharpens your perception to a fine point. Research and study yield remarkable discoveries throughout the coming days. Step away from noise to hear truth. Your own experience is the most reliable guide.", category:"action" },
        { period:"month", text:"This month The Hermit lights your path with inner wisdom. In the weeks ahead, solitude brings clarity that crowds cannot. Turn inward for the answers waiting in silence. Your analytical mind cuts through confusion.", category:"luck" },
        { period:"month", text:"The month ahead sees The Hermit sharpens your perception to a fine point. Throughout the coming period, research and study yield remarkable discoveries. Step away from noise to hear truth. Your own experience is the most reliable guide.", category:"action" },
        { period:"year", text:"This year The Hermit lights your path with inner wisdom. In the months ahead, solitude brings clarity that crowds cannot. Turn inward for the answers waiting in silence. Your analytical mind cuts through confusion.", category:"luck" },
        { period:"year", text:"The year ahead brings The Hermit's energy — it sharpens your perception to a fine point. Throughout the coming year, research and study yield remarkable discoveries. Step away from noise to hear truth. Your own experience is the most reliable guide.", category:"action" }
      ],
      neutral: [
        { period:"today", text:"The Hermit suggests a pause from social activities today. This very day, introspection prevents missteps. Not everyone needs to know your plans. Let ideas mature before sharing them.", category:"caution" },
        { period:"today", text:"Today The Hermit reminds you that isolation has its limits. Wisdom found alone must eventually be shared right now. Balance inner work with real-world connection. The lantern is meant to guide others too.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Hermit suggests a pause from social activities. As the new day unfolds, introspection prevents missteps. Not everyone needs to know your plans. Let ideas mature before sharing them.", category:"caution" },
        { period:"tomorrow", text:"The Hermit shapes the coming day — it reminds you that isolation has its limits. Prepare yourself, for wisdom found alone must eventually be shared. Balance inner work with real-world connection. The lantern is meant to guide others too.", category:"caution" },
        { period:"week", text:"This week The Hermit suggests a pause from social activities. In the next few days, introspection prevents missteps. Not everyone needs to know your plans. Let ideas mature before sharing them.", category:"caution" },
        { period:"week", text:"Over the next few days The Hermit reminds you that isolation has its limits. Wisdom found alone must eventually be shared throughout the coming days. Balance inner work with real-world connection. The lantern is meant to guide others too.", category:"caution" },
        { period:"month", text:"This month The Hermit suggests a pause from social activities. In the weeks ahead, introspection prevents missteps. Not everyone needs to know your plans. Let ideas mature before sharing them.", category:"caution" },
        { period:"month", text:"The month ahead sees The Hermit reminds you that isolation has its limits. Throughout the coming period, wisdom found alone must eventually be shared. Balance inner work with real-world connection. The lantern is meant to guide others too.", category:"caution" },
        { period:"year", text:"This year The Hermit suggests a pause from social activities. In the months ahead, introspection prevents missteps. Not everyone needs to know your plans. Let ideas mature before sharing them.", category:"caution" },
        { period:"year", text:"The year ahead brings The Hermit's energy — it reminds you that isolation has its limits. Throughout the coming year, wisdom found alone must eventually be shared. Balance inner work with real-world connection. The lantern is meant to guide others too.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Hermit warns against excessive withdrawal today. This very day, isolation becomes avoidance when taken too far. Reach out to someone you trust. Connection is not weakness.", category:"caution" },
        { period:"today", text:"Today The Hermit reveals loneliness or analysis paralysis. Overthinking replaces what action could resolve right now. Step out of the cave and into life. The world needs your wisdom not your absence.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Hermit warns against excessive withdrawal. As the new day unfolds, isolation becomes avoidance when taken too far. Reach out to someone you trust. Connection is not weakness.", category:"caution" },
        { period:"tomorrow", text:"The Hermit shapes the coming day — it reveals loneliness or analysis paralysis. Prepare yourself, for overthinking replaces what action could resolve. Step out of the cave and into life. The world needs your wisdom not your absence.", category:"action" },
        { period:"week", text:"This week The Hermit warns against excessive withdrawal. In the next few days, isolation becomes avoidance when taken too far. Reach out to someone you trust. Connection is not weakness.", category:"caution" },
        { period:"week", text:"Over the next few days The Hermit reveals loneliness or analysis paralysis. Overthinking replaces what action could resolve throughout the coming days. Step out of the cave and into life. The world needs your wisdom not your absence.", category:"action" },
        { period:"month", text:"This month The Hermit warns against excessive withdrawal. In the weeks ahead, isolation becomes avoidance when taken too far. Reach out to someone you trust. Connection is not weakness.", category:"caution" },
        { period:"month", text:"The month ahead sees The Hermit reveals loneliness or analysis paralysis. Throughout the coming period, overthinking replaces what action could resolve. Step out of the cave and into life. The world needs your wisdom not your absence.", category:"action" },
        { period:"year", text:"This year The Hermit warns against excessive withdrawal. In the months ahead, isolation becomes avoidance when taken too far. Reach out to someone you trust. Connection is not weakness.", category:"caution" },
        { period:"year", text:"The year ahead brings The Hermit's energy — it reveals loneliness or analysis paralysis. Throughout the coming year, overthinking replaces what action could resolve. Step out of the cave and into life. The world needs your wisdom not your absence.", category:"action" }
      ]
    },

    // ── 10: Wheel of Fortune ──
    10: {
      positive: [
        { period:"today", text:"Wheel of Fortune turns in your favor today. At this moment, lucky coincidences and unexpected opportunities appear. The cycle shifts upward embrace the momentum. Destiny places you exactly where you need to be.", category:"luck" },
        { period:"today", text:"Today Wheel of Fortune expands your horizons through Jupiter's grace. What seemed stuck begins to move again right now. Trust the timing of the universe. Good fortune arrives in an unexpected package.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow Wheel of Fortune turns in your favor. Prepare yourself for tomorrow, lucky coincidences and unexpected opportunities appear. The cycle shifts upward embrace the momentum. Destiny places you exactly where you need to be.", category:"luck" },
        { period:"tomorrow", text:"Wheel of Fortune shapes the coming day — it expands your horizons through Jupiter's grace. Prepare yourself, for what seemed stuck begins to move again. Trust the timing of the universe. Good fortune arrives in an unexpected package.", category:"luck" },
        { period:"week", text:"This week Wheel of Fortune turns in your favor. Over the coming days, lucky coincidences and unexpected opportunities appear. The cycle shifts upward embrace the momentum. Destiny places you exactly where you need to be.", category:"luck" },
        { period:"week", text:"Over the next few days Wheel of Fortune expands your horizons through Jupiter's grace. What seemed stuck begins to move again throughout the coming days. Trust the timing of the universe. Good fortune arrives in an unexpected package.", category:"luck" },
        { period:"month", text:"This month Wheel of Fortune turns in your favor. In the weeks ahead, lucky coincidences and unexpected opportunities appear. The cycle shifts upward embrace the momentum. Destiny places you exactly where you need to be.", category:"luck" },
        { period:"month", text:"The month ahead sees Wheel of Fortune expands your horizons through Jupiter's grace. Throughout the coming period, what seemed stuck begins to move again. Trust the timing of the universe. Good fortune arrives in an unexpected package.", category:"luck" },
        { period:"year", text:"This year Wheel of Fortune turns in your favor. In the months ahead, lucky coincidences and unexpected opportunities appear. The cycle shifts upward embrace the momentum. Destiny places you exactly where you need to be.", category:"luck" },
        { period:"year", text:"The year ahead brings Wheel of Fortune's energy — it expands your horizons through Jupiter's grace. Throughout the coming year, what seemed stuck begins to move again. Trust the timing of the universe. Good fortune arrives in an unexpected package.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"Wheel of Fortune reminds you that nothing stays the same today. At this moment, accept the current moment without clinging. Adapt to shifts rather than resisting. Flexibility is your greatest asset.", category:"caution" },
        { period:"today", text:"Today Wheel of Fortune cycles between highs and lows naturally. This is rhythm not punishment right now. Observe patterns rather than reacting to each swing. Equanimity in change is true mastery.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow Wheel of Fortune reminds you that nothing stays the same. Prepare yourself for tomorrow, accept the current moment without clinging. Adapt to shifts rather than resisting. Flexibility is your greatest asset.", category:"caution" },
        { period:"tomorrow", text:"Wheel of Fortune shapes the coming day — it cycles between highs and lows naturally. Prepare yourself, for this is rhythm not punishment. Observe patterns rather than reacting to each swing. Equanimity in change is true mastery.", category:"caution" },
        { period:"week", text:"This week Wheel of Fortune reminds you that nothing stays the same. Over the coming days, accept the current moment without clinging. Adapt to shifts rather than resisting. Flexibility is your greatest asset.", category:"caution" },
        { period:"week", text:"Over the next few days Wheel of Fortune cycles between highs and lows naturally. This is rhythm not punishment throughout the coming days. Observe patterns rather than reacting to each swing. Equanimity in change is true mastery.", category:"caution" },
        { period:"month", text:"This month Wheel of Fortune reminds you that nothing stays the same. In the weeks ahead, accept the current moment without clinging. Adapt to shifts rather than resisting. Flexibility is your greatest asset.", category:"caution" },
        { period:"month", text:"The month ahead sees Wheel of Fortune cycles between highs and lows naturally. Throughout the coming period, this is rhythm not punishment. Observe patterns rather than reacting to each swing. Equanimity in change is true mastery.", category:"caution" },
        { period:"year", text:"This year Wheel of Fortune reminds you that nothing stays the same. In the months ahead, accept the current moment without clinging. Adapt to shifts rather than resisting. Flexibility is your greatest asset.", category:"caution" },
        { period:"year", text:"The year ahead brings Wheel of Fortune's energy — it cycles between highs and lows naturally. Throughout the coming year, this is rhythm not punishment. Observe patterns rather than reacting to each swing. Equanimity in change is true mastery.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"Wheel of Fortune warns of unexpected reversals today. At this moment, plans may shift suddenly so stay adaptable. Do not resist the current but navigate through. What feels like setback is redirection.", category:"caution" },
        { period:"today", text:"Today Wheel of Fortune signals a cycle of challenges testing resilience. Temporary bad luck or delays appear right now. Every low contains the seed of next ascent. Stay centered through the turbulence.", category:"action" },
        { period:"tomorrow", text:"Tomorrow Wheel of Fortune warns of unexpected reversals. Prepare yourself for tomorrow, plans may shift suddenly so stay adaptable. Do not resist the current but navigate through. What feels like setback is redirection.", category:"caution" },
        { period:"tomorrow", text:"Wheel of Fortune shapes the coming day — it signals a cycle of challenges testing resilience. Prepare yourself, for temporary bad luck or delays appear. Every low contains the seed of next ascent. Stay centered through the turbulence.", category:"action" },
        { period:"week", text:"This week Wheel of Fortune warns of unexpected reversals. Over the coming days, plans may shift suddenly so stay adaptable. Do not resist the current but navigate through. What feels like setback is redirection.", category:"caution" },
        { period:"week", text:"Over the next few days Wheel of Fortune signals a cycle of challenges testing resilience. Temporary bad luck or delays appear throughout the coming days. Every low contains the seed of next ascent. Stay centered through the turbulence.", category:"action" },
        { period:"month", text:"This month Wheel of Fortune warns of unexpected reversals. In the weeks ahead, plans may shift suddenly so stay adaptable. Do not resist the current but navigate through. What feels like setback is redirection.", category:"caution" },
        { period:"month", text:"The month ahead sees Wheel of Fortune signals a cycle of challenges testing resilience. Throughout the coming period, temporary bad luck or delays appear. Every low contains the seed of next ascent. Stay centered through the turbulence.", category:"action" },
        { period:"year", text:"This year Wheel of Fortune warns of unexpected reversals. In the months ahead, plans may shift suddenly so stay adaptable. Do not resist the current but navigate through. What feels like setback is redirection.", category:"caution" },
        { period:"year", text:"The year ahead brings Wheel of Fortune's energy — it signals a cycle of challenges testing resilience. Throughout the coming year, temporary bad luck or delays appear. Every low contains the seed of next ascent. Stay centered through the turbulence.", category:"action" }
      ]
    },

    // ── 11: Justice ──
    11: {
      positive: [
        { period:"today", text:"Justice brings clarity and fair outcomes today. Before the day ends, truth prevails in your affairs. Legal or formal matters resolve in your favor. Balance is restored where needed most.", category:"luck" },
        { period:"today", text:"Today Justice harmonizes conflicting forces through Venus. Balanced decisions lead to lasting results right now. Your fairness earns respect and trust. Act with integrity as your strongest currency.", category:"action" },
        { period:"tomorrow", text:"Tomorrow Justice brings clarity and fair outcomes. The coming day, truth prevails in your affairs. Legal or formal matters resolve in your favor. Balance is restored where needed most.", category:"luck" },
        { period:"tomorrow", text:"Justice shapes the coming day — it harmonizes conflicting forces through Venus. Prepare yourself, for balanced decisions lead to lasting results. Your fairness earns respect and trust. Act with integrity as your strongest currency.", category:"action" },
        { period:"week", text:"This week Justice brings clarity and fair outcomes. The days ahead, truth prevails in your affairs. Legal or formal matters resolve in your favor. Balance is restored where needed most.", category:"luck" },
        { period:"week", text:"Over the next few days Justice harmonizes conflicting forces through Venus. Balanced decisions lead to lasting results throughout the coming days. Your fairness earns respect and trust. Act with integrity as your strongest currency.", category:"action" },
        { period:"month", text:"This month Justice brings clarity and fair outcomes. In the weeks ahead, truth prevails in your affairs. Legal or formal matters resolve in your favor. Balance is restored where needed most.", category:"luck" },
        { period:"month", text:"The month ahead sees Justice harmonizes conflicting forces through Venus. Throughout the coming period, balanced decisions lead to lasting results. Your fairness earns respect and trust. Act with integrity as your strongest currency.", category:"action" },
        { period:"year", text:"This year Justice brings clarity and fair outcomes. In the months ahead, truth prevails in your affairs. Legal or formal matters resolve in your favor. Balance is restored where needed most.", category:"luck" },
        { period:"year", text:"The year ahead brings Justice's energy — it harmonizes conflicting forces through Venus. Throughout the coming year, balanced decisions lead to lasting results. Your fairness earns respect and trust. Act with integrity as your strongest currency.", category:"action" }
      ],
      neutral: [
        { period:"today", text:"Justice asks for honesty above all else today. Before the day ends, examine your own role in current situations. Objectivity not emotion should guide decisions. Truth may be uncomfortable but necessary.", category:"caution" },
        { period:"today", text:"Today Justice weighs your choices on her scales. Every action has consequences so choose thoughtfully right now. Seek fairness even when difficult. Balanced karma follows balanced behavior.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow Justice asks for honesty above all else. The coming day, examine your own role in current situations. Objectivity not emotion should guide decisions. Truth may be uncomfortable but necessary.", category:"caution" },
        { period:"tomorrow", text:"Justice shapes the coming day — it weighs your choices on her scales. Prepare yourself, for every action has consequences so choose thoughtfully. Seek fairness even when difficult. Balanced karma follows balanced behavior.", category:"caution" },
        { period:"week", text:"This week Justice asks for honesty above all else. The days ahead, examine your own role in current situations. Objectivity not emotion should guide decisions. Truth may be uncomfortable but necessary.", category:"caution" },
        { period:"week", text:"Over the next few days Justice weighs your choices on her scales. Every action has consequences so choose thoughtfully throughout the coming days. Seek fairness even when difficult. Balanced karma follows balanced behavior.", category:"caution" },
        { period:"month", text:"This month Justice asks for honesty above all else. In the weeks ahead, examine your own role in current situations. Objectivity not emotion should guide decisions. Truth may be uncomfortable but necessary.", category:"caution" },
        { period:"month", text:"The month ahead sees Justice weighs your choices on her scales. Throughout the coming period, every action has consequences so choose thoughtfully. Seek fairness even when difficult. Balanced karma follows balanced behavior.", category:"caution" },
        { period:"year", text:"This year Justice asks for honesty above all else. In the months ahead, examine your own role in current situations. Objectivity not emotion should guide decisions. Truth may be uncomfortable but necessary.", category:"caution" },
        { period:"year", text:"The year ahead brings Justice's energy — it weighs your choices on her scales. Throughout the coming year, every action has consequences so choose thoughtfully. Seek fairness even when difficult. Balanced karma follows balanced behavior.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"Justice warns of biased judgment today. Before the day ends, perception may be skewed by emotion. Step back and seek objective perspective. Rushing to conclusions leads to regret.", category:"caution" },
        { period:"today", text:"Today Justice reveals imbalance demanding correction. Unfairness or unresolved legal matters need attention right now. Acknowledge your part in conflict. Accountability though painful restores order.", category:"action" },
        { period:"tomorrow", text:"Tomorrow Justice warns of biased judgment. The coming day, perception may be skewed by emotion. Step back and seek objective perspective. Rushing to conclusions leads to regret.", category:"caution" },
        { period:"tomorrow", text:"Justice shapes the coming day — it reveals imbalance demanding correction. Prepare yourself, for unfairness or unresolved legal matters need attention. Acknowledge your part in conflict. Accountability though painful restores order.", category:"action" },
        { period:"week", text:"This week Justice warns of biased judgment. The days ahead, perception may be skewed by emotion. Step back and seek objective perspective. Rushing to conclusions leads to regret.", category:"caution" },
        { period:"week", text:"Over the next few days Justice reveals imbalance demanding correction. Unfairness or unresolved legal matters need attention throughout the coming days. Acknowledge your part in conflict. Accountability though painful restores order.", category:"action" },
        { period:"month", text:"This month Justice warns of biased judgment. In the weeks ahead, perception may be skewed by emotion. Step back and seek objective perspective. Rushing to conclusions leads to regret.", category:"caution" },
        { period:"month", text:"The month ahead sees Justice reveals imbalance demanding correction. Throughout the coming period, unfairness or unresolved legal matters need attention. Acknowledge your part in conflict. Accountability though painful restores order.", category:"action" },
        { period:"year", text:"This year Justice warns of biased judgment. In the months ahead, perception may be skewed by emotion. Step back and seek objective perspective. Rushing to conclusions leads to regret.", category:"caution" },
        { period:"year", text:"The year ahead brings Justice's energy — it reveals imbalance demanding correction. Throughout the coming year, unfairness or unresolved legal matters need attention. Acknowledge your part in conflict. Accountability though painful restores order.", category:"action" }
      ]
    },

    // ── 12: The Hanged Man ──
    12: {
      positive: [
        { period:"today", text:"The Hanged Man offers a new perspective through stillness today. Right now, surrender control and see what unfolds. The pause is actually progress in disguise. Enlightenment comes from letting go.", category:"luck" },
        { period:"today", text:"Today The Hanged Man dissolves old patterns to reveal new truths. What seems like delay is divine timing right now. Sacrifice a small comfort for a larger gain. Patience unlocks a future breakthrough.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Hanged Man offers a new perspective through stillness. When dawn arrives, surrender control and see what unfolds. The pause is actually progress in disguise. Enlightenment comes from letting go.", category:"luck" },
        { period:"tomorrow", text:"The Hanged Man shapes the coming day — it dissolves old patterns to reveal new truths. Prepare yourself, for what seems like delay is divine timing. Sacrifice a small comfort for a larger gain. Patience unlocks a future breakthrough.", category:"action" },
        { period:"week", text:"This week The Hanged Man offers a new perspective through stillness. Throughout this week, surrender control and see what unfolds. The pause is actually progress in disguise. Enlightenment comes from letting go.", category:"luck" },
        { period:"week", text:"Over the next few days The Hanged Man dissolves old patterns to reveal new truths. What seems like delay is divine timing throughout the coming days. Sacrifice a small comfort for a larger gain. Patience unlocks a future breakthrough.", category:"action" },
        { period:"month", text:"This month The Hanged Man offers a new perspective through stillness. In the weeks ahead, surrender control and see what unfolds. The pause is actually progress in disguise. Enlightenment comes from letting go.", category:"luck" },
        { period:"month", text:"The month ahead sees The Hanged Man dissolves old patterns to reveal new truths. Throughout the coming period, what seems like delay is divine timing. Sacrifice a small comfort for a larger gain. Patience unlocks a future breakthrough.", category:"action" },
        { period:"year", text:"This year The Hanged Man offers a new perspective through stillness. In the months ahead, surrender control and see what unfolds. The pause is actually progress in disguise. Enlightenment comes from letting go.", category:"luck" },
        { period:"year", text:"The year ahead brings The Hanged Man's energy — it dissolves old patterns to reveal new truths. Throughout the coming year, what seems like delay is divine timing. Sacrifice a small comfort for a larger gain. Patience unlocks a future breakthrough.", category:"action" }
      ],
      neutral: [
        { period:"today", text:"The Hanged Man suggests waiting rather than pushing today. Right now, not everything responds to effort. The wisest action is sometimes inaction. Let the situation develop naturally.", category:"caution" },
        { period:"today", text:"Today The Hanged Man reminds you stagnation and gestation look identical. Trust the process without visible progress right now. A shift in perspective may be all that is needed. Look at your situation from a completely different angle.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Hanged Man suggests waiting rather than pushing. When dawn arrives, not everything responds to effort. The wisest action is sometimes inaction. Let the situation develop naturally.", category:"caution" },
        { period:"tomorrow", text:"The Hanged Man shapes the coming day — it reminds you stagnation and gestation look identical. Prepare yourself, for trust the process without visible progress. A shift in perspective may be all that is needed. Look at your situation from a completely different angle.", category:"caution" },
        { period:"week", text:"This week The Hanged Man suggests waiting rather than pushing. Throughout this week, not everything responds to effort. The wisest action is sometimes inaction. Let the situation develop naturally.", category:"caution" },
        { period:"week", text:"Over the next few days The Hanged Man reminds you stagnation and gestation look identical. Trust the process without visible progress throughout the coming days. A shift in perspective may be all that is needed. Look at your situation from a completely different angle.", category:"caution" },
        { period:"month", text:"This month The Hanged Man suggests waiting rather than pushing. In the weeks ahead, not everything responds to effort. The wisest action is sometimes inaction. Let the situation develop naturally.", category:"caution" },
        { period:"month", text:"The month ahead sees The Hanged Man reminds you stagnation and gestation look identical. Throughout the coming period, trust the process without visible progress. A shift in perspective may be all that is needed. Look at your situation from a completely different angle.", category:"caution" },
        { period:"year", text:"This year The Hanged Man suggests waiting rather than pushing. In the months ahead, not everything responds to effort. The wisest action is sometimes inaction. Let the situation develop naturally.", category:"caution" },
        { period:"year", text:"The year ahead brings The Hanged Man's energy — it reminds you stagnation and gestation look identical. Throughout the coming year, trust the process without visible progress. A shift in perspective may be all that is needed. Look at your situation from a completely different angle.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Hanged Man warns against stubbornly refusing to let go today. Right now, clinging to the old blocks the new. The sacrifice asked is smaller than you think. Resistance creates more suffering than release.", category:"caution" },
        { period:"today", text:"Today The Hanged Man says your sacrifice has been enough. Prolonged stagnation signals need for change right now. It is time to act not wait any longer. Break free from self-imposed limitations.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Hanged Man warns against stubbornly refusing to let go. When dawn arrives, clinging to the old blocks the new. The sacrifice asked is smaller than you think. Resistance creates more suffering than release.", category:"caution" },
        { period:"tomorrow", text:"The Hanged Man shapes the coming day — it says your sacrifice has been enough. Prepare yourself, for prolonged stagnation signals need for change. It is time to act not wait any longer. Break free from self-imposed limitations.", category:"action" },
        { period:"week", text:"This week The Hanged Man warns against stubbornly refusing to let go. Throughout this week, clinging to the old blocks the new. The sacrifice asked is smaller than you think. Resistance creates more suffering than release.", category:"caution" },
        { period:"week", text:"Over the next few days The Hanged Man says your sacrifice has been enough. Prolonged stagnation signals need for change throughout the coming days. It is time to act not wait any longer. Break free from self-imposed limitations.", category:"action" },
        { period:"month", text:"This month The Hanged Man warns against stubbornly refusing to let go. In the weeks ahead, clinging to the old blocks the new. The sacrifice asked is smaller than you think. Resistance creates more suffering than release.", category:"caution" },
        { period:"month", text:"The month ahead sees The Hanged Man says your sacrifice has been enough. Throughout the coming period, prolonged stagnation signals need for change. It is time to act not wait any longer. Break free from self-imposed limitations.", category:"action" },
        { period:"year", text:"This year The Hanged Man warns against stubbornly refusing to let go. In the months ahead, clinging to the old blocks the new. The sacrifice asked is smaller than you think. Resistance creates more suffering than release.", category:"caution" },
        { period:"year", text:"The year ahead brings The Hanged Man's energy — it says your sacrifice has been enough. Throughout the coming year, prolonged stagnation signals need for change. It is time to act not wait any longer. Break free from self-imposed limitations.", category:"action" }
      ]
    },

    // ── 13: Death ──
    13: {
      positive: [
        { period:"today", text:"Death signals powerful transformation today. This very day, what ends makes way for something beautiful. Embrace the closing of one chapter with grace. A new beginning rises from what falls away.", category:"action" },
        { period:"today", text:"Today Death cleanses and renews through Pluto's power. Old habits reach their natural end right now. Accept the transition and resist nothing. What emerges is more aligned with your true self.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow Death signals powerful transformation. As the new day unfolds, what ends makes way for something beautiful. Embrace the closing of one chapter with grace. A new beginning rises from what falls away.", category:"action" },
        { period:"tomorrow", text:"Death shapes the coming day — it cleanses and renews through Pluto's power. Prepare yourself, for old habits reach their natural end. Accept the transition and resist nothing. What emerges is more aligned with your true self.", category:"luck" },
        { period:"week", text:"This week Death signals powerful transformation. In the next few days, what ends makes way for something beautiful. Embrace the closing of one chapter with grace. A new beginning rises from what falls away.", category:"action" },
        { period:"week", text:"Over the next few days Death cleanses and renews through Pluto's power. Old habits reach their natural end throughout the coming days. Accept the transition and resist nothing. What emerges is more aligned with your true self.", category:"luck" },
        { period:"month", text:"This month Death signals powerful transformation. In the weeks ahead, what ends makes way for something beautiful. Embrace the closing of one chapter with grace. A new beginning rises from what falls away.", category:"action" },
        { period:"month", text:"The month ahead sees Death cleanses and renews through Pluto's power. Throughout the coming period, old habits reach their natural end. Accept the transition and resist nothing. What emerges is more aligned with your true self.", category:"luck" },
        { period:"year", text:"This year Death signals powerful transformation. In the months ahead, what ends makes way for something beautiful. Embrace the closing of one chapter with grace. A new beginning rises from what falls away.", category:"action" },
        { period:"year", text:"The year ahead brings Death's energy — it cleanses and renews through Pluto's power. Throughout the coming year, old habits reach their natural end. Accept the transition and resist nothing. What emerges is more aligned with your true self.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"Death reminds you that all things are temporary today. This very day, appreciate what you have before it transforms. Change is neither good nor bad it simply is. Meet transitions with openness not fear.", category:"caution" },
        { period:"today", text:"Today Death asks you to prepare for inevitable change. Something in your life completes its natural course right now. Do not force endings but do not resist them. Graceful transitions begin with acceptance.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow Death reminds you that all things are temporary. As the new day unfolds, appreciate what you have before it transforms. Change is neither good nor bad it simply is. Meet transitions with openness not fear.", category:"caution" },
        { period:"tomorrow", text:"Death shapes the coming day — it asks you to prepare for inevitable change. Prepare yourself, for something in your life completes its natural course. Do not force endings but do not resist them. Graceful transitions begin with acceptance.", category:"caution" },
        { period:"week", text:"This week Death reminds you that all things are temporary. In the next few days, appreciate what you have before it transforms. Change is neither good nor bad it simply is. Meet transitions with openness not fear.", category:"caution" },
        { period:"week", text:"Over the next few days Death asks you to prepare for inevitable change. Something in your life completes its natural course throughout the coming days. Do not force endings but do not resist them. Graceful transitions begin with acceptance.", category:"caution" },
        { period:"month", text:"This month Death reminds you that all things are temporary. In the weeks ahead, appreciate what you have before it transforms. Change is neither good nor bad it simply is. Meet transitions with openness not fear.", category:"caution" },
        { period:"month", text:"The month ahead sees Death asks you to prepare for inevitable change. Throughout the coming period, something in your life completes its natural course. Do not force endings but do not resist them. Graceful transitions begin with acceptance.", category:"caution" },
        { period:"year", text:"This year Death reminds you that all things are temporary. In the months ahead, appreciate what you have before it transforms. Change is neither good nor bad it simply is. Meet transitions with openness not fear.", category:"caution" },
        { period:"year", text:"The year ahead brings Death's energy — it asks you to prepare for inevitable change. Throughout the coming year, something in your life completes its natural course. Do not force endings but do not resist them. Graceful transitions begin with acceptance.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"Death warns against resisting inevitable change today. This very day, what you cling to only decays further. Letting go now prevents more painful loss later. The transformation you fear is actually liberation.", category:"caution" },
        { period:"today", text:"Today Death means you are holding onto what must end. Fear of change creates stagnation right now. Prolonging the inevitable deepens the pain. Courage to release opens the door to renewal.", category:"action" },
        { period:"tomorrow", text:"Tomorrow Death warns against resisting inevitable change. As the new day unfolds, what you cling to only decays further. Letting go now prevents more painful loss later. The transformation you fear is actually liberation.", category:"caution" },
        { period:"tomorrow", text:"Death shapes the coming day — it means you are holding onto what must end. Prepare yourself, for fear of change creates stagnation. Prolonging the inevitable deepens the pain. Courage to release opens the door to renewal.", category:"action" },
        { period:"week", text:"This week Death warns against resisting inevitable change. In the next few days, what you cling to only decays further. Letting go now prevents more painful loss later. The transformation you fear is actually liberation.", category:"caution" },
        { period:"week", text:"Over the next few days Death means you are holding onto what must end. Fear of change creates stagnation throughout the coming days. Prolonging the inevitable deepens the pain. Courage to release opens the door to renewal.", category:"action" },
        { period:"month", text:"This month Death warns against resisting inevitable change. In the weeks ahead, what you cling to only decays further. Letting go now prevents more painful loss later. The transformation you fear is actually liberation.", category:"caution" },
        { period:"month", text:"The month ahead sees Death means you are holding onto what must end. Throughout the coming period, fear of change creates stagnation. Prolonging the inevitable deepens the pain. Courage to release opens the door to renewal.", category:"action" },
        { period:"year", text:"This year Death warns against resisting inevitable change. In the months ahead, what you cling to only decays further. Letting go now prevents more painful loss later. The transformation you fear is actually liberation.", category:"caution" },
        { period:"year", text:"The year ahead brings Death's energy — it means you are holding onto what must end. Throughout the coming year, fear of change creates stagnation. Prolonging the inevitable deepens the pain. Courage to release opens the door to renewal.", category:"action" }
      ]
    },

    // ── 14: Temperance ──
    14: {
      positive: [
        { period:"today", text:"Temperance brings perfect balance to your experience today. At this moment, moderation and patience yield harmonious results. Combining opposites creates something beautiful. Peace flows naturally through your actions.", category:"luck" },
        { period:"today", text:"Today Temperance guides you to the golden mean through Jupiter's wisdom. Healing energy surrounds your relationships right now. Find the middle path between extremes. Your calm presence restores balance everywhere.", category:"action" },
        { period:"tomorrow", text:"Tomorrow Temperance brings perfect balance to your experience. Prepare yourself for tomorrow, moderation and patience yield harmonious results. Combining opposites creates something beautiful. Peace flows naturally through your actions.", category:"luck" },
        { period:"tomorrow", text:"Temperance shapes the coming day — it guides you to the golden mean through Jupiter's wisdom. Prepare yourself, for healing energy surrounds your relationships. Find the middle path between extremes. Your calm presence restores balance everywhere.", category:"action" },
        { period:"week", text:"This week Temperance brings perfect balance to your experience. Over the coming days, moderation and patience yield harmonious results. Combining opposites creates something beautiful. Peace flows naturally through your actions.", category:"luck" },
        { period:"week", text:"Over the next few days Temperance guides you to the golden mean through Jupiter's wisdom. Healing energy surrounds your relationships throughout the coming days. Find the middle path between extremes. Your calm presence restores balance everywhere.", category:"action" },
        { period:"month", text:"This month Temperance brings perfect balance to your experience. In the weeks ahead, moderation and patience yield harmonious results. Combining opposites creates something beautiful. Peace flows naturally through your actions.", category:"luck" },
        { period:"month", text:"The month ahead sees Temperance guides you to the golden mean through Jupiter's wisdom. Throughout the coming period, healing energy surrounds your relationships. Find the middle path between extremes. Your calm presence restores balance everywhere.", category:"action" },
        { period:"year", text:"This year Temperance brings perfect balance to your experience. In the months ahead, moderation and patience yield harmonious results. Combining opposites creates something beautiful. Peace flows naturally through your actions.", category:"luck" },
        { period:"year", text:"The year ahead brings Temperance's energy — it guides you to the golden mean through Jupiter's wisdom. Throughout the coming year, healing energy surrounds your relationships. Find the middle path between extremes. Your calm presence restores balance everywhere.", category:"action" }
      ],
      neutral: [
        { period:"today", text:"Temperance advises moderation in all things today. At this moment, excess in any direction disrupts balance. Find the steady rhythm that sustains energy. Small consistent steps move you furthest.", category:"caution" },
        { period:"today", text:"Today Temperance reminds you that healing takes time. Do not rush the integration process right now. Allow different aspects of life to find natural balance. The middle path reveals itself through patience.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow Temperance advises moderation in all things. Prepare yourself for tomorrow, excess in any direction disrupts balance. Find the steady rhythm that sustains energy. Small consistent steps move you furthest.", category:"caution" },
        { period:"tomorrow", text:"Temperance shapes the coming day — it reminds you that healing takes time. Prepare yourself, for do not rush the integration process. Allow different aspects of life to find natural balance. The middle path reveals itself through patience.", category:"caution" },
        { period:"week", text:"This week Temperance advises moderation in all things. Over the coming days, excess in any direction disrupts balance. Find the steady rhythm that sustains energy. Small consistent steps move you furthest.", category:"caution" },
        { period:"week", text:"Over the next few days Temperance reminds you that healing takes time. Do not rush the integration process throughout the coming days. Allow different aspects of life to find natural balance. The middle path reveals itself through patience.", category:"caution" },
        { period:"month", text:"This month Temperance advises moderation in all things. In the weeks ahead, excess in any direction disrupts balance. Find the steady rhythm that sustains energy. Small consistent steps move you furthest.", category:"caution" },
        { period:"month", text:"The month ahead sees Temperance reminds you that healing takes time. Throughout the coming period, do not rush the integration process. Allow different aspects of life to find natural balance. The middle path reveals itself through patience.", category:"caution" },
        { period:"year", text:"This year Temperance advises moderation in all things. In the months ahead, excess in any direction disrupts balance. Find the steady rhythm that sustains energy. Small consistent steps move you furthest.", category:"caution" },
        { period:"year", text:"The year ahead brings Temperance's energy — it reminds you that healing takes time. Throughout the coming year, do not rush the integration process. Allow different aspects of life to find natural balance. The middle path reveals itself through patience.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"Temperance warns of imbalance in your life today. At this moment, you may be giving too much in one area and neglecting another. Extremes create instability. Restore equilibrium before proceeding.", category:"caution" },
        { period:"today", text:"Today Temperance signals that patience has run thin. Disharmony and excess demand attention right now. Rebalance commitments and energy now. Without moderation burnout becomes inevitable.", category:"action" },
        { period:"tomorrow", text:"Tomorrow Temperance warns of imbalance in your life. Prepare yourself for tomorrow, you may be giving too much in one area and neglecting another. Extremes create instability. Restore equilibrium before proceeding.", category:"caution" },
        { period:"tomorrow", text:"Temperance shapes the coming day — it signals that patience has run thin. Prepare yourself, for disharmony and excess demand attention. Rebalance commitments and energy now. Without moderation burnout becomes inevitable.", category:"action" },
        { period:"week", text:"This week Temperance warns of imbalance in your life. Over the coming days, you may be giving too much in one area and neglecting another. Extremes create instability. Restore equilibrium before proceeding.", category:"caution" },
        { period:"week", text:"Over the next few days Temperance signals that patience has run thin. Disharmony and excess demand attention throughout the coming days. Rebalance commitments and energy now. Without moderation burnout becomes inevitable.", category:"action" },
        { period:"month", text:"This month Temperance warns of imbalance in your life. In the weeks ahead, you may be giving too much in one area and neglecting another. Extremes create instability. Restore equilibrium before proceeding.", category:"caution" },
        { period:"month", text:"The month ahead sees Temperance signals that patience has run thin. Throughout the coming period, disharmony and excess demand attention. Rebalance commitments and energy now. Without moderation burnout becomes inevitable.", category:"action" },
        { period:"year", text:"This year Temperance warns of imbalance in your life. In the months ahead, you may be giving too much in one area and neglecting another. Extremes create instability. Restore equilibrium before proceeding.", category:"caution" },
        { period:"year", text:"The year ahead brings Temperance's energy — it signals that patience has run thin. Throughout the coming year, disharmony and excess demand attention. Rebalance commitments and energy now. Without moderation burnout becomes inevitable.", category:"action" }
      ]
    },

    // ── 15: The Devil ──
    15: {
      positive: [
        { period:"today", text:"The Devil reveals chains that are loosening at last today. Before the day ends, you gain clarity about what has bound you. Material success comes through disciplined effort. Acknowledge your shadow to free your light.", category:"action" },
        { period:"today", text:"Today The Devil structures your ambitions productively through Saturn. Earthly pleasures can be enjoyed without addiction right now. Channel desire into motivation. Awareness of temptation becomes your protection.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow The Devil reveals chains that are loosening at last. The coming day, you gain clarity about what has bound you. Material success comes through disciplined effort. Acknowledge your shadow to free your light.", category:"action" },
        { period:"tomorrow", text:"The Devil shapes the coming day — it structures your ambitions productively through Saturn. Prepare yourself, for earthly pleasures can be enjoyed without addiction. Channel desire into motivation. Awareness of temptation becomes your protection.", category:"luck" },
        { period:"week", text:"This week The Devil reveals chains that are loosening at last. The days ahead, you gain clarity about what has bound you. Material success comes through disciplined effort. Acknowledge your shadow to free your light.", category:"action" },
        { period:"week", text:"Over the next few days The Devil structures your ambitions productively through Saturn. Earthly pleasures can be enjoyed without addiction throughout the coming days. Channel desire into motivation. Awareness of temptation becomes your protection.", category:"luck" },
        { period:"month", text:"This month The Devil reveals chains that are loosening at last. In the weeks ahead, you gain clarity about what has bound you. Material success comes through disciplined effort. Acknowledge your shadow to free your light.", category:"action" },
        { period:"month", text:"The month ahead sees The Devil structures your ambitions productively through Saturn. Throughout the coming period, earthly pleasures can be enjoyed without addiction. Channel desire into motivation. Awareness of temptation becomes your protection.", category:"luck" },
        { period:"year", text:"This year The Devil reveals chains that are loosening at last. In the months ahead, you gain clarity about what has bound you. Material success comes through disciplined effort. Acknowledge your shadow to free your light.", category:"action" },
        { period:"year", text:"The year ahead brings The Devil's energy — it structures your ambitions productively through Saturn. Throughout the coming year, earthly pleasures can be enjoyed without addiction. Channel desire into motivation. Awareness of temptation becomes your protection.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"The Devil asks you to honestly examine your attachments today. Before the day ends, what habits serve you and which hold you back. Awareness without judgment is the first step. Not everything pleasurable is harmful but mindfulness is key.", category:"caution" },
        { period:"today", text:"Today The Devil reminds you that material and spiritual needs both deserve attention. Neither denial nor excess serves growth right now. Find balance between enjoyment and discipline. Honest self-assessment reveals the path.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Devil asks you to honestly examine your attachments. The coming day, what habits serve you and which hold you back. Awareness without judgment is the first step. Not everything pleasurable is harmful but mindfulness is key.", category:"caution" },
        { period:"tomorrow", text:"The Devil shapes the coming day — it reminds you that material and spiritual needs both deserve attention. Prepare yourself, for neither denial nor excess serves growth. Find balance between enjoyment and discipline. Honest self-assessment reveals the path.", category:"caution" },
        { period:"week", text:"This week The Devil asks you to honestly examine your attachments. The days ahead, what habits serve you and which hold you back. Awareness without judgment is the first step. Not everything pleasurable is harmful but mindfulness is key.", category:"caution" },
        { period:"week", text:"Over the next few days The Devil reminds you that material and spiritual needs both deserve attention. Neither denial nor excess serves growth throughout the coming days. Find balance between enjoyment and discipline. Honest self-assessment reveals the path.", category:"caution" },
        { period:"month", text:"This month The Devil asks you to honestly examine your attachments. In the weeks ahead, what habits serve you and which hold you back. Awareness without judgment is the first step. Not everything pleasurable is harmful but mindfulness is key.", category:"caution" },
        { period:"month", text:"The month ahead sees The Devil reminds you that material and spiritual needs both deserve attention. Throughout the coming period, neither denial nor excess serves growth. Find balance between enjoyment and discipline. Honest self-assessment reveals the path.", category:"caution" },
        { period:"year", text:"This year The Devil asks you to honestly examine your attachments. In the months ahead, what habits serve you and which hold you back. Awareness without judgment is the first step. Not everything pleasurable is harmful but mindfulness is key.", category:"caution" },
        { period:"year", text:"The year ahead brings The Devil's energy — it reminds you that material and spiritual needs both deserve attention. Throughout the coming year, neither denial nor excess serves growth. Find balance between enjoyment and discipline. Honest self-assessment reveals the path.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Devil warns of addictive patterns or toxic situations today. Before the day ends, recognize what controls you before it tightens. Short-term pleasure may cost long-term freedom. Step back from temptation.", category:"caution" },
        { period:"today", text:"Today The Devil urges you to break free from unhealthy patterns. Bondage to bad habits intensifies right now. Seek support if you cannot do it alone. Liberation requires admitting the chains exist.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Devil warns of addictive patterns or toxic situations. The coming day, recognize what controls you before it tightens. Short-term pleasure may cost long-term freedom. Step back from temptation.", category:"caution" },
        { period:"tomorrow", text:"The Devil shapes the coming day — it urges you to break free from unhealthy patterns. Prepare yourself, for bondage to bad habits intensifies. Seek support if you cannot do it alone. Liberation requires admitting the chains exist.", category:"action" },
        { period:"week", text:"This week The Devil warns of addictive patterns or toxic situations. The days ahead, recognize what controls you before it tightens. Short-term pleasure may cost long-term freedom. Step back from temptation.", category:"caution" },
        { period:"week", text:"Over the next few days The Devil urges you to break free from unhealthy patterns. Bondage to bad habits intensifies throughout the coming days. Seek support if you cannot do it alone. Liberation requires admitting the chains exist.", category:"action" },
        { period:"month", text:"This month The Devil warns of addictive patterns or toxic situations. In the weeks ahead, recognize what controls you before it tightens. Short-term pleasure may cost long-term freedom. Step back from temptation.", category:"caution" },
        { period:"month", text:"The month ahead sees The Devil urges you to break free from unhealthy patterns. Throughout the coming period, bondage to bad habits intensifies. Seek support if you cannot do it alone. Liberation requires admitting the chains exist.", category:"action" },
        { period:"year", text:"This year The Devil warns of addictive patterns or toxic situations. In the months ahead, recognize what controls you before it tightens. Short-term pleasure may cost long-term freedom. Step back from temptation.", category:"caution" },
        { period:"year", text:"The year ahead brings The Devil's energy — it urges you to break free from unhealthy patterns. Throughout the coming year, bondage to bad habits intensifies. Seek support if you cannot do it alone. Liberation requires admitting the chains exist.", category:"action" }
      ]
    },

    // ── 16: The Tower ──
    16: {
      positive: [
        { period:"today", text:"The Tower clears away what was built on false foundations today. Right now, the breakthrough you experience is liberating. Truth though shocking sets you free. From the rubble build something authentic.", category:"action" },
        { period:"today", text:"Today The Tower strikes with clarifying force through Mars. Sudden change opens unexpected doors right now. What collapses was never truly stable. Your resilience transforms crisis into opportunity.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow The Tower clears away what was built on false foundations. When dawn arrives, the breakthrough you experience is liberating. Truth though shocking sets you free. From the rubble build something authentic.", category:"action" },
        { period:"tomorrow", text:"The Tower shapes the coming day — it strikes with clarifying force through Mars. Prepare yourself, for sudden change opens unexpected doors. What collapses was never truly stable. Your resilience transforms crisis into opportunity.", category:"luck" },
        { period:"week", text:"This week The Tower clears away what was built on false foundations. Throughout this week, the breakthrough you experience is liberating. Truth though shocking sets you free. From the rubble build something authentic.", category:"action" },
        { period:"week", text:"Over the next few days The Tower strikes with clarifying force through Mars. Sudden change opens unexpected doors throughout the coming days. What collapses was never truly stable. Your resilience transforms crisis into opportunity.", category:"luck" },
        { period:"month", text:"This month The Tower clears away what was built on false foundations. In the weeks ahead, the breakthrough you experience is liberating. Truth though shocking sets you free. From the rubble build something authentic.", category:"action" },
        { period:"month", text:"The month ahead sees The Tower strikes with clarifying force through Mars. Throughout the coming period, sudden change opens unexpected doors. What collapses was never truly stable. Your resilience transforms crisis into opportunity.", category:"luck" },
        { period:"year", text:"This year The Tower clears away what was built on false foundations. In the months ahead, the breakthrough you experience is liberating. Truth though shocking sets you free. From the rubble build something authentic.", category:"action" },
        { period:"year", text:"The year ahead brings The Tower's energy — it strikes with clarifying force through Mars. Throughout the coming year, sudden change opens unexpected doors. What collapses was never truly stable. Your resilience transforms crisis into opportunity.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"The Tower suggests unexpected changes are possible today. Right now, stay flexible and avoid rigid plans. Not all surprises are negative some are simply sudden. Prepare mentally for shifts.", category:"caution" },
        { period:"today", text:"Today The Tower asks you to honestly assess your foundations. What is built on truth will stand right now. Better to renovate now than rebuild later. Address structural weaknesses proactively.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Tower suggests unexpected changes are possible. When dawn arrives, stay flexible and avoid rigid plans. Not all surprises are negative some are simply sudden. Prepare mentally for shifts.", category:"caution" },
        { period:"tomorrow", text:"The Tower shapes the coming day — it asks you to honestly assess your foundations. Prepare yourself, for what is built on truth will stand. Better to renovate now than rebuild later. Address structural weaknesses proactively.", category:"caution" },
        { period:"week", text:"This week The Tower suggests unexpected changes are possible. Throughout this week, stay flexible and avoid rigid plans. Not all surprises are negative some are simply sudden. Prepare mentally for shifts.", category:"caution" },
        { period:"week", text:"Over the next few days The Tower asks you to honestly assess your foundations. What is built on truth will stand throughout the coming days. Better to renovate now than rebuild later. Address structural weaknesses proactively.", category:"caution" },
        { period:"month", text:"This month The Tower suggests unexpected changes are possible. In the weeks ahead, stay flexible and avoid rigid plans. Not all surprises are negative some are simply sudden. Prepare mentally for shifts.", category:"caution" },
        { period:"month", text:"The month ahead sees The Tower asks you to honestly assess your foundations. Throughout the coming period, what is built on truth will stand. Better to renovate now than rebuild later. Address structural weaknesses proactively.", category:"caution" },
        { period:"year", text:"This year The Tower suggests unexpected changes are possible. In the months ahead, stay flexible and avoid rigid plans. Not all surprises are negative some are simply sudden. Prepare mentally for shifts.", category:"caution" },
        { period:"year", text:"The year ahead brings The Tower's energy — it asks you to honestly assess your foundations. Throughout the coming year, what is built on truth will stand. Better to renovate now than rebuild later. Address structural weaknesses proactively.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Tower warns of sudden disruption ahead today. Right now, brace yourself but do not panic. What seems devastating clears way for truth. Avoid major decisions in the immediate aftermath.", category:"caution" },
        { period:"today", text:"Today The Tower threatens comfortable but inauthentic structures. Prolonged instability may follow upheaval right now. Accept what cannot be saved and focus on rebuilding. Resistance to necessary change extends suffering.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Tower warns of sudden disruption ahead. When dawn arrives, brace yourself but do not panic. What seems devastating clears way for truth. Avoid major decisions in the immediate aftermath.", category:"caution" },
        { period:"tomorrow", text:"The Tower shapes the coming day — it threatens comfortable but inauthentic structures. Prepare yourself, for prolonged instability may follow upheaval. Accept what cannot be saved and focus on rebuilding. Resistance to necessary change extends suffering.", category:"action" },
        { period:"week", text:"This week The Tower warns of sudden disruption ahead. Throughout this week, brace yourself but do not panic. What seems devastating clears way for truth. Avoid major decisions in the immediate aftermath.", category:"caution" },
        { period:"week", text:"Over the next few days The Tower threatens comfortable but inauthentic structures. Prolonged instability may follow upheaval throughout the coming days. Accept what cannot be saved and focus on rebuilding. Resistance to necessary change extends suffering.", category:"action" },
        { period:"month", text:"This month The Tower warns of sudden disruption ahead. In the weeks ahead, brace yourself but do not panic. What seems devastating clears way for truth. Avoid major decisions in the immediate aftermath.", category:"caution" },
        { period:"month", text:"The month ahead sees The Tower threatens comfortable but inauthentic structures. Throughout the coming period, prolonged instability may follow upheaval. Accept what cannot be saved and focus on rebuilding. Resistance to necessary change extends suffering.", category:"action" },
        { period:"year", text:"This year The Tower warns of sudden disruption ahead. In the months ahead, brace yourself but do not panic. What seems devastating clears way for truth. Avoid major decisions in the immediate aftermath.", category:"caution" },
        { period:"year", text:"The year ahead brings The Tower's energy — it threatens comfortable but inauthentic structures. Throughout the coming year, prolonged instability may follow upheaval. Accept what cannot be saved and focus on rebuilding. Resistance to necessary change extends suffering.", category:"action" }
      ]
    },

    // ── 17: The Star ──
    17: {
      positive: [
        { period:"today", text:"The Star shines hope and healing upon you today. This very day, after difficulty comes peace and renewal. Your faith is rewarded with clear signs of progress. Inspiration flows like water so create freely.", category:"luck" },
        { period:"today", text:"Today The Star sparks divine inspiration through Uranus. Dreams and wishes move toward manifestation right now. The universe confirms you are on the right path. Serenity and optimism light your way.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow The Star shines hope and healing upon you. As the new day unfolds, after difficulty comes peace and renewal. Your faith is rewarded with clear signs of progress. Inspiration flows like water so create freely.", category:"luck" },
        { period:"tomorrow", text:"The Star shapes the coming day — it sparks divine inspiration through Uranus. Prepare yourself, for dreams and wishes move toward manifestation. The universe confirms you are on the right path. Serenity and optimism light your way.", category:"luck" },
        { period:"week", text:"This week The Star shines hope and healing upon you. In the next few days, after difficulty comes peace and renewal. Your faith is rewarded with clear signs of progress. Inspiration flows like water so create freely.", category:"luck" },
        { period:"week", text:"Over the next few days The Star sparks divine inspiration through Uranus. Dreams and wishes move toward manifestation throughout the coming days. The universe confirms you are on the right path. Serenity and optimism light your way.", category:"luck" },
        { period:"month", text:"This month The Star shines hope and healing upon you. In the weeks ahead, after difficulty comes peace and renewal. Your faith is rewarded with clear signs of progress. Inspiration flows like water so create freely.", category:"luck" },
        { period:"month", text:"The month ahead sees The Star sparks divine inspiration through Uranus. Throughout the coming period, dreams and wishes move toward manifestation. The universe confirms you are on the right path. Serenity and optimism light your way.", category:"luck" },
        { period:"year", text:"This year The Star shines hope and healing upon you. In the months ahead, after difficulty comes peace and renewal. Your faith is rewarded with clear signs of progress. Inspiration flows like water so create freely.", category:"luck" },
        { period:"year", text:"The year ahead brings The Star's energy — it sparks divine inspiration through Uranus. Throughout the coming year, dreams and wishes move toward manifestation. The universe confirms you are on the right path. Serenity and optimism light your way.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"The Star gently reminds you to maintain hope today. This very day, the path is long but the destination is real. Small signs of progress deserve celebration. Keep faith even when results are not visible.", category:"caution" },
        { period:"today", text:"Today The Star asks for patience in the healing process. Not all wounds close at the same speed right now. Continue positive practices without demanding results. Consistent hope is more powerful than occasional intensity.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Star gently reminds you to maintain hope. As the new day unfolds, the path is long but the destination is real. Small signs of progress deserve celebration. Keep faith even when results are not visible.", category:"caution" },
        { period:"tomorrow", text:"The Star shapes the coming day — it asks for patience in the healing process. Prepare yourself, for not all wounds close at the same speed. Continue positive practices without demanding results. Consistent hope is more powerful than occasional intensity.", category:"caution" },
        { period:"week", text:"This week The Star gently reminds you to maintain hope. In the next few days, the path is long but the destination is real. Small signs of progress deserve celebration. Keep faith even when results are not visible.", category:"caution" },
        { period:"week", text:"Over the next few days The Star asks for patience in the healing process. Not all wounds close at the same speed throughout the coming days. Continue positive practices without demanding results. Consistent hope is more powerful than occasional intensity.", category:"caution" },
        { period:"month", text:"This month The Star gently reminds you to maintain hope. In the weeks ahead, the path is long but the destination is real. Small signs of progress deserve celebration. Keep faith even when results are not visible.", category:"caution" },
        { period:"month", text:"The month ahead sees The Star asks for patience in the healing process. Throughout the coming period, not all wounds close at the same speed. Continue positive practices without demanding results. Consistent hope is more powerful than occasional intensity.", category:"caution" },
        { period:"year", text:"This year The Star gently reminds you to maintain hope. In the months ahead, the path is long but the destination is real. Small signs of progress deserve celebration. Keep faith even when results are not visible.", category:"caution" },
        { period:"year", text:"The year ahead brings The Star's energy — it asks for patience in the healing process. Throughout the coming year, not all wounds close at the same speed. Continue positive practices without demanding results. Consistent hope is more powerful than occasional intensity.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Star warns against losing hope prematurely today. This very day, despair blinds you to help already arriving. Reconnect with what inspires you. Even a faint star provides direction in darkness.", category:"caution" },
        { period:"today", text:"Today The Star suggests you have lost touch with your inner light. Disconnection from purpose needs attention right now. Return to what originally sparked your passion. Hope is not naive it is courageous.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Star warns against losing hope prematurely. As the new day unfolds, despair blinds you to help already arriving. Reconnect with what inspires you. Even a faint star provides direction in darkness.", category:"caution" },
        { period:"tomorrow", text:"The Star shapes the coming day — it suggests you have lost touch with your inner light. Prepare yourself, for disconnection from purpose needs attention. Return to what originally sparked your passion. Hope is not naive it is courageous.", category:"action" },
        { period:"week", text:"This week The Star warns against losing hope prematurely. In the next few days, despair blinds you to help already arriving. Reconnect with what inspires you. Even a faint star provides direction in darkness.", category:"caution" },
        { period:"week", text:"Over the next few days The Star suggests you have lost touch with your inner light. Disconnection from purpose needs attention throughout the coming days. Return to what originally sparked your passion. Hope is not naive it is courageous.", category:"action" },
        { period:"month", text:"This month The Star warns against losing hope prematurely. In the weeks ahead, despair blinds you to help already arriving. Reconnect with what inspires you. Even a faint star provides direction in darkness.", category:"caution" },
        { period:"month", text:"The month ahead sees The Star suggests you have lost touch with your inner light. Throughout the coming period, disconnection from purpose needs attention. Return to what originally sparked your passion. Hope is not naive it is courageous.", category:"action" },
        { period:"year", text:"This year The Star warns against losing hope prematurely. In the months ahead, despair blinds you to help already arriving. Reconnect with what inspires you. Even a faint star provides direction in darkness.", category:"caution" },
        { period:"year", text:"The year ahead brings The Star's energy — it suggests you have lost touch with your inner light. Throughout the coming year, disconnection from purpose needs attention. Return to what originally sparked your passion. Hope is not naive it is courageous.", category:"action" }
      ]
    },

    // ── 18: The Moon ──
    18: {
      positive: [
        { period:"today", text:"The Moon heightens your psychic sensitivity powerfully today. At this moment, dreams carry messages so pay attention. Your subconscious guides you through uncertain terrain. Trust the feelings beneath the surface.", category:"luck" },
        { period:"today", text:"Today The Moon opens the gates of imagination through Neptune. Creative and artistic endeavors flourish right now. Allow mystery to enchant rather than frighten. What you sense intuitively is more reliable than sight.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Moon heightens your psychic sensitivity powerfully. Prepare yourself for tomorrow, dreams carry messages so pay attention. Your subconscious guides you through uncertain terrain. Trust the feelings beneath the surface.", category:"luck" },
        { period:"tomorrow", text:"The Moon shapes the coming day — it opens the gates of imagination through Neptune. Prepare yourself, for creative and artistic endeavors flourish. Allow mystery to enchant rather than frighten. What you sense intuitively is more reliable than sight.", category:"action" },
        { period:"week", text:"This week The Moon heightens your psychic sensitivity powerfully. Over the coming days, dreams carry messages so pay attention. Your subconscious guides you through uncertain terrain. Trust the feelings beneath the surface.", category:"luck" },
        { period:"week", text:"Over the next few days The Moon opens the gates of imagination through Neptune. Creative and artistic endeavors flourish throughout the coming days. Allow mystery to enchant rather than frighten. What you sense intuitively is more reliable than sight.", category:"action" },
        { period:"month", text:"This month The Moon heightens your psychic sensitivity powerfully. In the weeks ahead, dreams carry messages so pay attention. Your subconscious guides you through uncertain terrain. Trust the feelings beneath the surface.", category:"luck" },
        { period:"month", text:"The month ahead sees The Moon opens the gates of imagination through Neptune. Throughout the coming period, creative and artistic endeavors flourish. Allow mystery to enchant rather than frighten. What you sense intuitively is more reliable than sight.", category:"action" },
        { period:"year", text:"This year The Moon heightens your psychic sensitivity powerfully. In the months ahead, dreams carry messages so pay attention. Your subconscious guides you through uncertain terrain. Trust the feelings beneath the surface.", category:"luck" },
        { period:"year", text:"The year ahead brings The Moon's energy — it opens the gates of imagination through Neptune. Throughout the coming year, creative and artistic endeavors flourish. Allow mystery to enchant rather than frighten. What you sense intuitively is more reliable than sight.", category:"action" }
      ],
      neutral: [
        { period:"today", text:"The Moon suggests things are not as they appear today. At this moment, reserve judgment until more information surfaces. Emotions may distort perception. Navigate by intuition but verify with reason.", category:"caution" },
        { period:"today", text:"Today The Moon reveals confusion that needs time to clear. Not every question needs an immediate answer right now. Allow ambiguity without forcing resolution. Clarity comes when the fog lifts naturally.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Moon suggests things are not as they appear. Prepare yourself for tomorrow, reserve judgment until more information surfaces. Emotions may distort perception. Navigate by intuition but verify with reason.", category:"caution" },
        { period:"tomorrow", text:"The Moon shapes the coming day — it reveals confusion that needs time to clear. Prepare yourself, for not every question needs an immediate answer. Allow ambiguity without forcing resolution. Clarity comes when the fog lifts naturally.", category:"caution" },
        { period:"week", text:"This week The Moon suggests things are not as they appear. Over the coming days, reserve judgment until more information surfaces. Emotions may distort perception. Navigate by intuition but verify with reason.", category:"caution" },
        { period:"week", text:"Over the next few days The Moon reveals confusion that needs time to clear. Not every question needs an immediate answer throughout the coming days. Allow ambiguity without forcing resolution. Clarity comes when the fog lifts naturally.", category:"caution" },
        { period:"month", text:"This month The Moon suggests things are not as they appear. In the weeks ahead, reserve judgment until more information surfaces. Emotions may distort perception. Navigate by intuition but verify with reason.", category:"caution" },
        { period:"month", text:"The month ahead sees The Moon reveals confusion that needs time to clear. Throughout the coming period, not every question needs an immediate answer. Allow ambiguity without forcing resolution. Clarity comes when the fog lifts naturally.", category:"caution" },
        { period:"year", text:"This year The Moon suggests things are not as they appear. In the months ahead, reserve judgment until more information surfaces. Emotions may distort perception. Navigate by intuition but verify with reason.", category:"caution" },
        { period:"year", text:"The year ahead brings The Moon's energy — it reveals confusion that needs time to clear. Throughout the coming year, not every question needs an immediate answer. Allow ambiguity without forcing resolution. Clarity comes when the fog lifts naturally.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Moon warns of illusions and deception around you today. At this moment, someone or something is not what they seem. Trust instincts when something feels off. Avoid commitments until full truth emerges.", category:"caution" },
        { period:"today", text:"Today The Moon reveals that your worst fears are largely imagined. Fear and anxiety distort perception of reality right now. Distinguish genuine danger from emotional projection. Seek grounding when illusions overwhelm.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Moon warns of illusions and deception around you. Prepare yourself for tomorrow, someone or something is not what they seem. Trust instincts when something feels off. Avoid commitments until full truth emerges.", category:"caution" },
        { period:"tomorrow", text:"The Moon shapes the coming day — it reveals that your worst fears are largely imagined. Prepare yourself, for fear and anxiety distort perception of reality. Distinguish genuine danger from emotional projection. Seek grounding when illusions overwhelm.", category:"action" },
        { period:"week", text:"This week The Moon warns of illusions and deception around you. Over the coming days, someone or something is not what they seem. Trust instincts when something feels off. Avoid commitments until full truth emerges.", category:"caution" },
        { period:"week", text:"Over the next few days The Moon reveals that your worst fears are largely imagined. Fear and anxiety distort perception of reality throughout the coming days. Distinguish genuine danger from emotional projection. Seek grounding when illusions overwhelm.", category:"action" },
        { period:"month", text:"This month The Moon warns of illusions and deception around you. In the weeks ahead, someone or something is not what they seem. Trust instincts when something feels off. Avoid commitments until full truth emerges.", category:"caution" },
        { period:"month", text:"The month ahead sees The Moon reveals that your worst fears are largely imagined. Throughout the coming period, fear and anxiety distort perception of reality. Distinguish genuine danger from emotional projection. Seek grounding when illusions overwhelm.", category:"action" },
        { period:"year", text:"This year The Moon warns of illusions and deception around you. In the months ahead, someone or something is not what they seem. Trust instincts when something feels off. Avoid commitments until full truth emerges.", category:"caution" },
        { period:"year", text:"The year ahead brings The Moon's energy — it reveals that your worst fears are largely imagined. Throughout the coming year, fear and anxiety distort perception of reality. Distinguish genuine danger from emotional projection. Seek grounding when illusions overwhelm.", category:"action" }
      ]
    },

    // ── 19: The Sun ──
    19: {
      positive: [
        { period:"today", text:"The Sun radiates joy and success upon everything you touch today. Before the day ends, vitality and clarity fill your experience. Confidence attracts abundance naturally. This is your time to shine so hold nothing back.", category:"luck" },
        { period:"today", text:"Today The Sun illuminates your path completely with solar energy. Success in endeavors is practically guaranteed right now. Celebrate life and share happiness freely. Your optimism is magnetic and contagious.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow The Sun radiates joy and success upon everything you touch. The coming day, vitality and clarity fill your experience. Confidence attracts abundance naturally. This is your time to shine so hold nothing back.", category:"luck" },
        { period:"tomorrow", text:"The Sun shapes the coming day — it illuminates your path completely with solar energy. Prepare yourself, for success in endeavors is practically guaranteed. Celebrate life and share happiness freely. Your optimism is magnetic and contagious.", category:"luck" },
        { period:"week", text:"This week The Sun radiates joy and success upon everything you touch. The days ahead, vitality and clarity fill your experience. Confidence attracts abundance naturally. This is your time to shine so hold nothing back.", category:"luck" },
        { period:"week", text:"Over the next few days The Sun illuminates your path completely with solar energy. Success in endeavors is practically guaranteed throughout the coming days. Celebrate life and share happiness freely. Your optimism is magnetic and contagious.", category:"luck" },
        { period:"month", text:"This month The Sun radiates joy and success upon everything you touch. In the weeks ahead, vitality and clarity fill your experience. Confidence attracts abundance naturally. This is your time to shine so hold nothing back.", category:"luck" },
        { period:"month", text:"The month ahead sees The Sun illuminates your path completely with solar energy. Throughout the coming period, success in endeavors is practically guaranteed. Celebrate life and share happiness freely. Your optimism is magnetic and contagious.", category:"luck" },
        { period:"year", text:"This year The Sun radiates joy and success upon everything you touch. In the months ahead, vitality and clarity fill your experience. Confidence attracts abundance naturally. This is your time to shine so hold nothing back.", category:"luck" },
        { period:"year", text:"The year ahead brings The Sun's energy — it illuminates your path completely with solar energy. Throughout the coming year, success in endeavors is practically guaranteed. Celebrate life and share happiness freely. Your optimism is magnetic and contagious.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"The Sun shines but reminds you not to ignore shadows today. Before the day ends, success is likely though not without effort. Maintain optimism while staying realistic. Even the brightest day has its afternoon.", category:"caution" },
        { period:"today", text:"Today The Sun energy is present but requires you to step into it. Happiness is available so reach for it actively right now. Do not wait for permission to enjoy life. Your right to joy is as natural as sunshine.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The Sun shines but reminds you not to ignore shadows. The coming day, success is likely though not without effort. Maintain optimism while staying realistic. Even the brightest day has its afternoon.", category:"caution" },
        { period:"tomorrow", text:"The Sun shapes the coming day — it energy is present but requires you to step into it. Prepare yourself, for happiness is available so reach for it actively. Do not wait for permission to enjoy life. Your right to joy is as natural as sunshine.", category:"caution" },
        { period:"week", text:"This week The Sun shines but reminds you not to ignore shadows. The days ahead, success is likely though not without effort. Maintain optimism while staying realistic. Even the brightest day has its afternoon.", category:"caution" },
        { period:"week", text:"Over the next few days The Sun energy is present but requires you to step into it. Happiness is available so reach for it actively throughout the coming days. Do not wait for permission to enjoy life. Your right to joy is as natural as sunshine.", category:"caution" },
        { period:"month", text:"This month The Sun shines but reminds you not to ignore shadows. In the weeks ahead, success is likely though not without effort. Maintain optimism while staying realistic. Even the brightest day has its afternoon.", category:"caution" },
        { period:"month", text:"The month ahead sees The Sun energy is present but requires you to step into it. Throughout the coming period, happiness is available so reach for it actively. Do not wait for permission to enjoy life. Your right to joy is as natural as sunshine.", category:"caution" },
        { period:"year", text:"This year The Sun shines but reminds you not to ignore shadows. In the months ahead, success is likely though not without effort. Maintain optimism while staying realistic. Even the brightest day has its afternoon.", category:"caution" },
        { period:"year", text:"The year ahead brings The Sun's energy — it energy is present but requires you to step into it. Throughout the coming year, happiness is available so reach for it actively. Do not wait for permission to enjoy life. Your right to joy is as natural as sunshine.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The Sun warns against overexposure or arrogance today. Before the day ends, too much confidence becomes blindness. Share the spotlight generously. Even the sun knows when to set.", category:"caution" },
        { period:"today", text:"Today The Sun reversed is still the Sun so light returns. Delayed happiness or temporary clouds appear right now. Address what blocks your joy honestly. Authentic happiness requires honest self-examination.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The Sun warns against overexposure or arrogance. The coming day, too much confidence becomes blindness. Share the spotlight generously. Even the sun knows when to set.", category:"caution" },
        { period:"tomorrow", text:"The Sun shapes the coming day — it reversed is still the Sun so light returns. Prepare yourself, for delayed happiness or temporary clouds appear. Address what blocks your joy honestly. Authentic happiness requires honest self-examination.", category:"action" },
        { period:"week", text:"This week The Sun warns against overexposure or arrogance. The days ahead, too much confidence becomes blindness. Share the spotlight generously. Even the sun knows when to set.", category:"caution" },
        { period:"week", text:"Over the next few days The Sun reversed is still the Sun so light returns. Delayed happiness or temporary clouds appear throughout the coming days. Address what blocks your joy honestly. Authentic happiness requires honest self-examination.", category:"action" },
        { period:"month", text:"This month The Sun warns against overexposure or arrogance. In the weeks ahead, too much confidence becomes blindness. Share the spotlight generously. Even the sun knows when to set.", category:"caution" },
        { period:"month", text:"The month ahead sees The Sun reversed is still the Sun so light returns. Throughout the coming period, delayed happiness or temporary clouds appear. Address what blocks your joy honestly. Authentic happiness requires honest self-examination.", category:"action" },
        { period:"year", text:"This year The Sun warns against overexposure or arrogance. In the months ahead, too much confidence becomes blindness. Share the spotlight generously. Even the sun knows when to set.", category:"caution" },
        { period:"year", text:"The year ahead brings The Sun's energy — it reversed is still the Sun so light returns. Throughout the coming year, delayed happiness or temporary clouds appear. Address what blocks your joy honestly. Authentic happiness requires honest self-examination.", category:"action" }
      ]
    },

    // ── 20: Judgement ──
    20: {
      positive: [
        { period:"today", text:"Judgement calls you to rise to your highest potential today. Right now, a moment of awakening brings extraordinary clarity. Past experiences combine to reveal your true calling. Answer the call for your purpose awaits.", category:"action" },
        { period:"today", text:"Today Judgement resurrects buried talents through Pluto's power. A second chance arrives in unexpected form right now. Forgiveness releases tremendous energy. Your rebirth begins now.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow Judgement calls you to rise to your highest potential. When dawn arrives, a moment of awakening brings extraordinary clarity. Past experiences combine to reveal your true calling. Answer the call for your purpose awaits.", category:"action" },
        { period:"tomorrow", text:"Judgement shapes the coming day — it resurrects buried talents through Pluto's power. Prepare yourself, for a second chance arrives in unexpected form. Forgiveness releases tremendous energy. Your rebirth begins now.", category:"luck" },
        { period:"week", text:"This week Judgement calls you to rise to your highest potential. Throughout this week, a moment of awakening brings extraordinary clarity. Past experiences combine to reveal your true calling. Answer the call for your purpose awaits.", category:"action" },
        { period:"week", text:"Over the next few days Judgement resurrects buried talents through Pluto's power. A second chance arrives in unexpected form throughout the coming days. Forgiveness releases tremendous energy. Your rebirth begins now.", category:"luck" },
        { period:"month", text:"This month Judgement calls you to rise to your highest potential. In the weeks ahead, a moment of awakening brings extraordinary clarity. Past experiences combine to reveal your true calling. Answer the call for your purpose awaits.", category:"action" },
        { period:"month", text:"The month ahead sees Judgement resurrects buried talents through Pluto's power. Throughout the coming period, a second chance arrives in unexpected form. Forgiveness releases tremendous energy. Your rebirth begins now.", category:"luck" },
        { period:"year", text:"This year Judgement calls you to rise to your highest potential. In the months ahead, a moment of awakening brings extraordinary clarity. Past experiences combine to reveal your true calling. Answer the call for your purpose awaits.", category:"action" },
        { period:"year", text:"The year ahead brings Judgement's energy — it resurrects buried talents through Pluto's power. Throughout the coming year, a second chance arrives in unexpected form. Forgiveness releases tremendous energy. Your rebirth begins now.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"Judgement asks you to evaluate recent choices honestly today. Right now, self-reflection reveals areas needing attention. Take responsibility without self-punishment. Every assessment is an opportunity for correction.", category:"caution" },
        { period:"today", text:"Today Judgement in a measured position suggests ongoing evaluation. Understanding your purpose continues to unfold right now. Do not rush to conclusions about your path. Clarity builds gradually through self-examination.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow Judgement asks you to evaluate recent choices honestly. When dawn arrives, self-reflection reveals areas needing attention. Take responsibility without self-punishment. Every assessment is an opportunity for correction.", category:"caution" },
        { period:"tomorrow", text:"Judgement shapes the coming day — it in a measured position suggests ongoing evaluation. Prepare yourself, for understanding your purpose continues to unfold. Do not rush to conclusions about your path. Clarity builds gradually through self-examination.", category:"caution" },
        { period:"week", text:"This week Judgement asks you to evaluate recent choices honestly. Throughout this week, self-reflection reveals areas needing attention. Take responsibility without self-punishment. Every assessment is an opportunity for correction.", category:"caution" },
        { period:"week", text:"Over the next few days Judgement in a measured position suggests ongoing evaluation. Understanding your purpose continues to unfold throughout the coming days. Do not rush to conclusions about your path. Clarity builds gradually through self-examination.", category:"caution" },
        { period:"month", text:"This month Judgement asks you to evaluate recent choices honestly. In the weeks ahead, self-reflection reveals areas needing attention. Take responsibility without self-punishment. Every assessment is an opportunity for correction.", category:"caution" },
        { period:"month", text:"The month ahead sees Judgement in a measured position suggests ongoing evaluation. Throughout the coming period, understanding your purpose continues to unfold. Do not rush to conclusions about your path. Clarity builds gradually through self-examination.", category:"caution" },
        { period:"year", text:"This year Judgement asks you to evaluate recent choices honestly. In the months ahead, self-reflection reveals areas needing attention. Take responsibility without self-punishment. Every assessment is an opportunity for correction.", category:"caution" },
        { period:"year", text:"The year ahead brings Judgement's energy — it in a measured position suggests ongoing evaluation. Throughout the coming year, understanding your purpose continues to unfold. Do not rush to conclusions about your path. Clarity builds gradually through self-examination.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"Judgement warns against harsh self-criticism today. Right now, holding yourself to impossible standards creates paralysis. Forgiveness is not weakness but wisdom. Release guilt to move forward.", category:"caution" },
        { period:"today", text:"Today Judgement means you are avoiding a necessary reckoning. Ignoring your inner call leads to restlessness right now. Face what you have been postponing. The longer you delay the louder the call.", category:"action" },
        { period:"tomorrow", text:"Tomorrow Judgement warns against harsh self-criticism. When dawn arrives, holding yourself to impossible standards creates paralysis. Forgiveness is not weakness but wisdom. Release guilt to move forward.", category:"caution" },
        { period:"tomorrow", text:"Judgement shapes the coming day — it means you are avoiding a necessary reckoning. Prepare yourself, for ignoring your inner call leads to restlessness. Face what you have been postponing. The longer you delay the louder the call.", category:"action" },
        { period:"week", text:"This week Judgement warns against harsh self-criticism. Throughout this week, holding yourself to impossible standards creates paralysis. Forgiveness is not weakness but wisdom. Release guilt to move forward.", category:"caution" },
        { period:"week", text:"Over the next few days Judgement means you are avoiding a necessary reckoning. Ignoring your inner call leads to restlessness throughout the coming days. Face what you have been postponing. The longer you delay the louder the call.", category:"action" },
        { period:"month", text:"This month Judgement warns against harsh self-criticism. In the weeks ahead, holding yourself to impossible standards creates paralysis. Forgiveness is not weakness but wisdom. Release guilt to move forward.", category:"caution" },
        { period:"month", text:"The month ahead sees Judgement means you are avoiding a necessary reckoning. Throughout the coming period, ignoring your inner call leads to restlessness. Face what you have been postponing. The longer you delay the louder the call.", category:"action" },
        { period:"year", text:"This year Judgement warns against harsh self-criticism. In the months ahead, holding yourself to impossible standards creates paralysis. Forgiveness is not weakness but wisdom. Release guilt to move forward.", category:"caution" },
        { period:"year", text:"The year ahead brings Judgement's energy — it means you are avoiding a necessary reckoning. Throughout the coming year, ignoring your inner call leads to restlessness. Face what you have been postponing. The longer you delay the louder the call.", category:"action" }
      ]
    },

    // ── 21: The World ──
    21: {
      positive: [
        { period:"today", text:"The World celebrates your completeness and achievement today. This very day, a cycle concludes with beauty and fulfillment. Everything you worked for comes together harmoniously. Success is not just possible it is here.", category:"luck" },
        { period:"today", text:"Today The World rewards your dedication through Saturn with concrete results. Wholeness and integration define this moment right now. The world opens its doors to you. Travel expansion and recognition are all favored.", category:"luck" },
        { period:"tomorrow", text:"Tomorrow The World celebrates your completeness and achievement. As the new day unfolds, a cycle concludes with beauty and fulfillment. Everything you worked for comes together harmoniously. Success is not just possible it is here.", category:"luck" },
        { period:"tomorrow", text:"The World shapes the coming day — it rewards your dedication through Saturn with concrete results. Prepare yourself, for wholeness and integration define this moment. The world opens its doors to you. Travel expansion and recognition are all favored.", category:"luck" },
        { period:"week", text:"This week The World celebrates your completeness and achievement. In the next few days, a cycle concludes with beauty and fulfillment. Everything you worked for comes together harmoniously. Success is not just possible it is here.", category:"luck" },
        { period:"week", text:"Over the next few days The World rewards your dedication through Saturn with concrete results. Wholeness and integration define this moment throughout the coming days. The world opens its doors to you. Travel expansion and recognition are all favored.", category:"luck" },
        { period:"month", text:"This month The World celebrates your completeness and achievement. In the weeks ahead, a cycle concludes with beauty and fulfillment. Everything you worked for comes together harmoniously. Success is not just possible it is here.", category:"luck" },
        { period:"month", text:"The month ahead sees The World rewards your dedication through Saturn with concrete results. Throughout the coming period, wholeness and integration define this moment. The world opens its doors to you. Travel expansion and recognition are all favored.", category:"luck" },
        { period:"year", text:"This year The World celebrates your completeness and achievement. In the months ahead, a cycle concludes with beauty and fulfillment. Everything you worked for comes together harmoniously. Success is not just possible it is here.", category:"luck" },
        { period:"year", text:"The year ahead brings The World's energy — it rewards your dedication through Saturn with concrete results. Throughout the coming year, wholeness and integration define this moment. The world opens its doors to you. Travel expansion and recognition are all favored.", category:"luck" }
      ],
      neutral: [
        { period:"today", text:"The World reminds you to appreciate how far you have come today. This very day, completion of one phase precedes another. Take time to celebrate before moving on. Gratitude enriches the destination.", category:"caution" },
        { period:"today", text:"Today The World suggests a transition between cycles. One chapter closes while another opens right now. Embrace both ending and beginning. Completion and initiation are two faces of one coin.", category:"caution" },
        { period:"tomorrow", text:"Tomorrow The World reminds you to appreciate how far you have come. As the new day unfolds, completion of one phase precedes another. Take time to celebrate before moving on. Gratitude enriches the destination.", category:"caution" },
        { period:"tomorrow", text:"The World shapes the coming day — it suggests a transition between cycles. Prepare yourself, for one chapter closes while another opens. Embrace both ending and beginning. Completion and initiation are two faces of one coin.", category:"caution" },
        { period:"week", text:"This week The World reminds you to appreciate how far you have come. In the next few days, completion of one phase precedes another. Take time to celebrate before moving on. Gratitude enriches the destination.", category:"caution" },
        { period:"week", text:"Over the next few days The World suggests a transition between cycles. One chapter closes while another opens throughout the coming days. Embrace both ending and beginning. Completion and initiation are two faces of one coin.", category:"caution" },
        { period:"month", text:"This month The World reminds you to appreciate how far you have come. In the weeks ahead, completion of one phase precedes another. Take time to celebrate before moving on. Gratitude enriches the destination.", category:"caution" },
        { period:"month", text:"The month ahead sees The World suggests a transition between cycles. Throughout the coming period, one chapter closes while another opens. Embrace both ending and beginning. Completion and initiation are two faces of one coin.", category:"caution" },
        { period:"year", text:"This year The World reminds you to appreciate how far you have come. In the months ahead, completion of one phase precedes another. Take time to celebrate before moving on. Gratitude enriches the destination.", category:"caution" },
        { period:"year", text:"The year ahead brings The World's energy — it suggests a transition between cycles. Throughout the coming year, one chapter closes while another opens. Embrace both ending and beginning. Completion and initiation are two faces of one coin.", category:"caution" }
      ],
      warning: [
        { period:"today", text:"The World warns of unfinished business blocking new beginnings today. This very day, complete what you started before seeking new adventures. Loose ends tangle future progress. Closure today creates freedom tomorrow.", category:"caution" },
        { period:"today", text:"Today The World means the finish line keeps moving. Delayed completion or incompleteness persists right now. Identify what prevents closure and address it. You are closer to completion than you realize.", category:"action" },
        { period:"tomorrow", text:"Tomorrow The World warns of unfinished business blocking new beginnings. As the new day unfolds, complete what you started before seeking new adventures. Loose ends tangle future progress. Closure today creates freedom tomorrow.", category:"caution" },
        { period:"tomorrow", text:"The World shapes the coming day — it means the finish line keeps moving. Prepare yourself, for delayed completion or incompleteness persists. Identify what prevents closure and address it. You are closer to completion than you realize.", category:"action" },
        { period:"week", text:"This week The World warns of unfinished business blocking new beginnings. In the next few days, complete what you started before seeking new adventures. Loose ends tangle future progress. Closure today creates freedom tomorrow.", category:"caution" },
        { period:"week", text:"Over the next few days The World means the finish line keeps moving. Delayed completion or incompleteness persists throughout the coming days. Identify what prevents closure and address it. You are closer to completion than you realize.", category:"action" },
        { period:"month", text:"This month The World warns of unfinished business blocking new beginnings. In the weeks ahead, complete what you started before seeking new adventures. Loose ends tangle future progress. Closure today creates freedom tomorrow.", category:"caution" },
        { period:"month", text:"The month ahead sees The World means the finish line keeps moving. Throughout the coming period, delayed completion or incompleteness persists. Identify what prevents closure and address it. You are closer to completion than you realize.", category:"action" },
        { period:"year", text:"This year The World warns of unfinished business blocking new beginnings. In the months ahead, complete what you started before seeking new adventures. Loose ends tangle future progress. Closure today creates freedom tomorrow.", category:"caution" },
        { period:"year", text:"The year ahead brings The World's energy — it means the finish line keeps moving. Throughout the coming year, delayed completion or incompleteness persists. Identify what prevents closure and address it. You are closer to completion than you realize.", category:"action" }
      ]
    }
  },

  // ════════════════════════════════════════════════
  // MOON PHASE MODIFIERS (8 phases)
  // ════════════════════════════════════════════════
  moonModifiers: {
    newMoon: {
      prefix: ["The New Moon amplifies new beginnings", "In the energy of the New Moon, seeds of intention take root", "The dark moon whispers of fresh starts"],
      suffix: ["Plant your intentions now.", "Begin planning your next move."]
    },
    waxingCrescent: {
      prefix: ["The Waxing Crescent supports your growth", "The growing Moon nurtures your efforts", "Crescent light guides your first steps"],
      suffix: ["Growth energy is on your side.", "Take confident first steps."]
    },
    firstQuarter: {
      prefix: ["The First Quarter Moon empowers decisive action", "The half moon demands commitment", "Lunar energy pushes you past obstacles"],
      suffix: ["Overcome resistance with determination.", "Action taken now gains momentum."]
    },
    waxingGibbous: {
      prefix: ["The Waxing Gibbous Moon builds toward fullness", "Growing lunar energy accumulates power", "The nearly full Moon heightens anticipation"],
      suffix: ["Patience — results are forming.", "Continue building with steady effort."]
    },
    fullMoon: {
      prefix: ["The Full Moon intensifies emotions and revelations", "Full lunar power illuminates hidden truths", "The brilliant Moon brings things to culmination"],
      suffix: ["Results are about to manifest.", "Be ready for revelations."]
    },
    waningGibbous: {
      prefix: ["The Waning Gibbous Moon encourages sharing wisdom", "Diminishing moonlight reveals what to release", "The generous Moon asks you to give back"],
      suffix: ["Share what you have learned.", "Gratitude amplifies your blessings."]
    },
    lastQuarter: {
      prefix: ["The Last Quarter Moon calls for reflection", "The half-dark Moon signals a time for review", "Lunar energy shifts toward inner assessment"],
      suffix: ["Reassess your course of action.", "Adjust plans based on experience."]
    },
    waningCrescent: {
      prefix: ["The Waning Crescent Moon completes the cycle", "The fading Moon prepares for renewal", "Dark moon energy invites surrender"],
      suffix: ["Release what no longer serves you.", "Prepare for a new beginning."]
    }
  },

  // ════════════════════════════════════════════════
  // ZODIAC PERSONAL PHRASES (12 signs × 4 categories)
  // ════════════════════════════════════════════════
  zodiac: {
    Aries: {
      luck:    ["Your fiery nature is in the spotlight of fortune.", "Mars directs your energy into the right channel.", "The pioneering spirit of Aries attracts lucky breaks."],
      action:  ["As a true Aries, act decisively.", "Your ruler Mars gives strength for a breakthrough.", "Bold action is your birthright, Aries."],
      caution: ["Aries, it is time to slow down.", "Impulsiveness is your challenge today, Aries.", "Patience rewards the Ram more than speed."],
      love:    ["Passion defines love for Aries.", "Mars ignites the spark of romance.", "Your directness in love is both your charm and your strength."]
    },
    Taurus: {
      luck:    ["Venus blesses Taurus with material abundance.", "Your steadfast nature attracts lasting fortune.", "Earth energy grounds your good luck into reality."],
      action:  ["Taurus, build with the patience that defines you.", "Venus guides your hands to create beauty.", "Your persistence is your superpower, Taurus."],
      caution: ["Taurus, flexibility is needed today.", "Stubbornness blocks the flow — yield a little.", "The Bull does best when it adapts to the terrain."],
      love:    ["Venus showers Taurus with sensual grace.", "Love grows slowly but deeply for the Bull.", "Your loyalty in love is your greatest gift, Taurus."]
    },
    Gemini: {
      luck:    ["Mercury speeds fortune toward the Twins.", "Your quick mind catches opportunities others miss.", "Dual perspectives give Gemini double the luck."],
      action:  ["Gemini, let your versatility shine today.", "Mercury sharpens your communication for maximum impact.", "Your adaptability is your edge, Gemini."],
      caution: ["Gemini, focus is your challenge today.", "Scattered energy diminishes the Twins' power.", "Choose one direction and commit, Gemini."],
      love:    ["Communication deepens Gemini's connections.", "Mercury brings playful romance to the Twins.", "Your wit and charm open hearts, Gemini."]
    },
    Cancer: {
      luck:    ["The Moon nurtures Cancer's path to fortune.", "Your intuitive nature guides you to hidden treasures.", "Emotional intelligence is Cancer's secret weapon."],
      action:  ["Cancer, trust your instincts — they are sharp today.", "The Moon empowers your protective instincts.", "Your nurturing approach builds lasting foundations, Cancer."],
      caution: ["Cancer, guard against emotional overwhelm.", "The Crab needs to retreat to recharge.", "Sensitivity is strength, but boundaries are necessary."],
      love:    ["The Moon fills Cancer's heart with deep emotion.", "Love finds its truest expression through your care.", "Your emotional depth creates unbreakable bonds, Cancer."]
    },
    Leo: {
      luck:    ["The Sun crowns Leo with radiant fortune.", "Your natural magnetism draws abundance like gravity.", "Royal Leo commands luck with effortless grace."],
      action:  ["Leo, let your inner fire light the way.", "The Sun empowers your creative vision.", "Your leadership inspires action in everyone around you, Leo."],
      caution: ["Leo, temper pride with humility today.", "Even the Lion rests to conserve strength.", "Generosity of spirit matters more than grand gestures."],
      love:    ["The Sun warms Leo's romantic life.", "Love flourishes under your generous, playful spirit.", "Your warmth is irresistible, Leo — share it wisely."]
    },
    Virgo: {
      luck:    ["Mercury rewards Virgo's attention to detail.", "Your analytical gifts uncover hidden advantages.", "Precision is Virgo's path to lasting fortune."],
      action:  ["Virgo, your methodical approach triumphs today.", "Mercury fine-tunes your execution to perfection.", "Your practical wisdom turns plans into results, Virgo."],
      caution: ["Virgo, perfectionism is the enemy of progress.", "Overanalysis paralyzes the Maiden's natural flow.", "Good enough is sometimes perfect, Virgo."],
      love:    ["Mercury brings thoughtful romance to Virgo.", "Love grows through acts of practical devotion.", "Your attentiveness makes loved ones feel truly seen, Virgo."]
    },
    Libra: {
      luck:    ["Venus balances Libra's scales toward fortune.", "Your diplomacy opens doors that force cannot.", "Harmony attracts abundance to the Scales."],
      action:  ["Libra, your gift for balance guides the way.", "Venus empowers your aesthetic and relational instincts.", "Your fairness creates partnerships that multiply success, Libra."],
      caution: ["Libra, indecision is your trap today.", "The Scales need a firm hand to settle.", "Choose a side and commit — balance follows action, Libra."],
      love:    ["Venus makes Libra irresistible in love.", "Partnership and romance reach new heights.", "Your desire for harmony creates beautiful connections, Libra."]
    },
    Scorpio: {
      luck:    ["Pluto intensifies Scorpio's magnetic fortune.", "Your depth perceives what others overlook.", "Transformation is Scorpio's gateway to abundance."],
      action:  ["Scorpio, channel your intensity toward a single target.", "Pluto grants the power to regenerate and rebuild.", "Your determination is unstoppable once focused, Scorpio."],
      caution: ["Scorpio, release the need to control everything.", "Intensity without direction becomes destruction.", "Trust others enough to share the burden, Scorpio."],
      love:    ["Pluto deepens Scorpio's passionate connections.", "Love for you is transformative and all-consuming.", "Your emotional intensity creates bonds that transcend the ordinary, Scorpio."]
    },
    Sagittarius: {
      luck:    ["Jupiter expands Sagittarius's horizons of fortune.", "Your optimism magnetizes lucky opportunities.", "The Archer's arrow finds its mark with ease."],
      action:  ["Sagittarius, aim high and release with confidence.", "Jupiter fuels your adventurous spirit.", "Your philosophical depth gives meaning to every endeavor, Sagittarius."],
      caution: ["Sagittarius, overextension dilutes your impact.", "The Archer needs to aim before shooting.", "Commitment to one path yields more than chasing many, Sagittarius."],
      love:    ["Jupiter brings expansive love to Sagittarius.", "Adventure and romance intertwine beautifully for the Archer.", "Your honesty and enthusiasm make love an exciting journey, Sagittarius."]
    },
    Capricorn: {
      luck:    ["Saturn rewards Capricorn's discipline with lasting fortune.", "Your patience builds wealth that endures.", "The Goat climbs steadily to the summit of success."],
      action:  ["Capricorn, your strategic mind is your greatest asset.", "Saturn structures your ambitions into achievable steps.", "Your endurance outmatches any obstacle, Capricorn."],
      caution: ["Capricorn, rigidity blocks the flow of growth.", "All work and no rest weakens even the Goat.", "Allow yourself moments of lightness, Capricorn."],
      love:    ["Saturn brings mature, lasting love to Capricorn.", "Commitment and reliability define your romantic strength.", "Your devotion deepens with time, Capricorn — loyalty is your love language."]
    },
    Aquarius: {
      luck:    ["Uranus sparks unexpected fortune for Aquarius.", "Your innovative mind attracts revolutionary opportunities.", "The Water Bearer's uniqueness is a magnet for luck."],
      action:  ["Aquarius, your visionary thinking leads the way.", "Uranus empowers breakthrough ideas.", "Your independence creates paths no one else can see, Aquarius."],
      caution: ["Aquarius, detachment may become isolation.", "Even the Water Bearer needs human warmth.", "Ground your ideas in practical reality, Aquarius."],
      love:    ["Uranus brings electrifying connections to Aquarius.", "Love arrives through friendship and shared ideals.", "Your authenticity attracts minds that match your depth, Aquarius."]
    },
    Pisces: {
      luck:    ["Neptune guides Pisces through mystical currents of fortune.", "Your intuition is your compass to hidden treasures.", "The Fish swims through the invisible streams of luck."],
      action:  ["Pisces, trust the creative flow that moves through you.", "Neptune dissolves obstacles through imagination.", "Your empathy is a superpower — use it wisely, Pisces."],
      caution: ["Pisces, boundaries protect your sensitive nature.", "Escapism tempts the Fish — stay present.", "Not every emotion you feel belongs to you, Pisces."],
      love:    ["Neptune fills Pisces' heart with transcendent love.", "Romance for you is a spiritual experience.", "Your compassion creates a love that heals, Pisces."]
    }
  }

  }; // end FORECAST_DATA
})();