'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

// 动态导入Three.js相关组件，避免SSR问题
const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })

// 倒计时组件
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto mb-8">
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-1">{timeLeft.days}</div>
        <div className="text-sm text-gray-400">天</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-1">{timeLeft.hours}</div>
        <div className="text-sm text-gray-400">时</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-1">{timeLeft.minutes}</div>
        <div className="text-sm text-gray-400">分</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-1">{timeLeft.seconds}</div>
        <div className="text-sm text-gray-400">秒</div>
      </div>
    </div>
  )
}

export default function Home() {
  const [remainingSlots, setRemainingSlots] = useState(100)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSlots(prev => {
        if (prev > 82) return prev - 1
        return prev
      })
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 3D场景背景 */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* 主要内容 */}
      <div className="relative z-10">
        {/* Telegram入口 */}
        <div className="fixed top-4 right-4 z-50">
          <motion.a
            href="https://t.me/+U3H-jVnMCwMxZGU1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-dark font-bold py-2 px-4 rounded-full text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.623 4.823-4.35c.21-.186-.046-.29-.322-.104l-5.96 3.75-2.57-.802c-.557-.176-.566-.557.12-.824l10.033-3.87c.462-.173.868.107.736.828z"/>
            </svg>
            加入社区
          </motion.a>
        </div>

        {/* Hero部分 */}
        <section className="h-screen flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
              AI驱动的空投革命
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-8">
              首个具有自主决策意识的空投AGI
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-dark font-bold py-3 px-8 rounded-full text-lg"
              >
                立即预约
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary font-bold py-3 px-8 rounded-full text-lg"
              >
                技术白皮书
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* 预售信息部分 */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-block px-4 py-1 bg-primary/20 rounded-full text-primary text-sm font-semibold mb-4">
                稀缺预售名额 - 永不扩容
              </div>
              <h2 className="text-4xl font-bold mb-4">限时特惠预售</h2>
              <p className="text-xl text-gray-300 mb-8">
                仅开放<span className="text-primary font-bold">100</span>个永久名额 - 错过后将永远无法获得同等权益
              </p>

              <CountdownTimer />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-primary/20"
                >
                  <div className="text-3xl font-bold text-primary mb-2">1 SOL</div>
                  <div className="text-gray-400">预售特惠价</div>
                  <div className="mt-2 text-sm line-through text-gray-500">原价2 SOL/月</div>
                  <div className="mt-2 text-sm text-green-400">永久节省12 SOL/年</div>
                  <div className="mt-2 text-xs text-primary">价格永久锁定</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-primary/20"
                >
                  <div className="text-3xl font-bold text-primary mb-2">2周</div>
                  <div className="text-gray-400">倒计时进行中</div>
                  <div className="mt-2 text-sm text-gray-500">先到先得</div>
                  <div className="mt-2 text-xs text-red-400">错过不再开放</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-primary/20 overflow-hidden"
                >
                  <div className="absolute top-2 right-2">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">剩余{remainingSlots}</div>
                  <div className="text-gray-400">稀缺名额</div>
                  <div className="mt-2 text-sm text-gray-500">永不扩容</div>
                  <div className="mt-2 text-xs text-red-400">抢购中</div>
                  
                  {/* 进度条 */}
                  <div className="mt-4">
                    <div className="text-xs text-gray-400 mb-1">抢购进度</div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${100 - (remainingSlots)}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">已售出 {100 - remainingSlots} 个名额</div>
                  </div>
                </motion.div>
              </div>

              {/* 价格对比详情 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-12 p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-primary/20"
              >
                <h3 className="text-xl font-bold text-primary mb-4">价格对比</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-primary/10">
                    <div className="text-lg font-bold mb-2">预售特权价</div>
                    <div className="text-3xl font-bold text-primary mb-2">1 SOL/月</div>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        永久锁定低价
                      </li>
                      <li className="flex items-center text-sm text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        每年节省12 SOL
                      </li>
                      <li className="flex items-center text-sm text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        包含所有高级功能
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-800/50">
                    <div className="text-lg font-bold mb-2">普通用户价</div>
                    <div className="text-3xl font-bold text-gray-400 mb-2">2 SOL/月</div>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-400">
                        <span className="text-red-400 mr-2">×</span>
                        价格可能继续上调
                      </li>
                      <li className="flex items-center text-sm text-gray-400">
                        <span className="text-red-400 mr-2">×</span>
                        无价格优惠
                      </li>
                      <li className="flex items-center text-sm text-gray-400">
                        <span className="text-red-400 mr-2">×</span>
                        部分功能需额外付费
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-400/10 rounded-lg">
                  <p className="text-center text-green-400 text-sm">
                    预售特权用户每年可节省 <span className="font-bold">12 SOL</span> 
                    <span className="text-xs ml-2">（基于当前价格计算）</span>
                  </p>
                </div>
              </motion.div>

              {/* 预售权益展示 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-2 text-center">预售用户专属权益</h3>
                <p className="text-gray-400 text-center mb-6">抢先锁定稀缺权益，永久专享特权</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
                  >
                    <h4 className="text-xl font-bold text-primary mb-4">永久优惠价格</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </span>
                        <span className="text-gray-300">永久锁定1 SOL/月特权价（后期用户2 SOL起步）</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </span>
                        <span className="text-gray-300">价格永久锁定，即使后期大幅上调也不受影响</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
                  >
                    <h4 className="text-xl font-bold text-primary mb-4">功能特权</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </span>
                        <span className="text-gray-300">优先体验最新功能更新</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </span>
                        <span className="text-gray-300">专属技术支持通道</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
                  >
                    <h4 className="text-xl font-bold text-primary mb-4">稀缺名额</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </span>
                        <span className="text-gray-300">仅开放100个永久名额，错过无法获得同等权益</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </span>
                        <span className="text-gray-300">预售后将永久锁定名额，不再扩容</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
                  >
                    <h4 className="text-xl font-bold text-primary mb-4">社区特权</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </span>
                        <span className="text-gray-300">专属社区身份标识</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </span>
                        <span className="text-gray-300">优先参与产品决策投票</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-secondary text-dark font-bold py-4 px-12 rounded-full text-xl"
                >
                  立即锁定名额
                </motion.button>
                <div className="space-y-2">
                  <p className="text-red-400 text-sm">
                    ⚡️ 预警：当前剩余{remainingSlots}个名额
                  </p>
                  <p className="text-gray-400 text-sm">
                    💎 一旦错过预售，将永远无法获得同等权益
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 核心特性部分 */}
        <section className="py-20 px-4 bg-dark/50 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-4"
            >
              颠覆传统空投方式
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-center text-gray-400 mb-12"
            >
              基于先进的人工智能技术，重新定义空投体验
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 技术优势部分 */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-4"
            >
              领先的技术架构
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-center text-gray-400 mb-12"
            >
              融合多项前沿技术，打造智能决策引擎
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
                >
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    {tech.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.points.map((point, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 数据分析部分 */}
        <section className="py-20 px-4 bg-dark/50 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-4"
            >
              智能分析引擎
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-center text-gray-400 mb-12"
            >
              多维度数据分析，精准把握投资机会
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-lg text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 新增：AI能力矩阵 */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-4"
            >
              AI能力矩阵
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-center text-gray-400 mb-12"
            >
              多维度AI能力，构建完整的智能决策体系
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiCapabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-gradient-to-b from-primary/10 to-secondary/10 backdrop-blur-lg border border-primary/20"
                >
                  <div className="text-2xl font-bold text-primary mb-3">{cap.title}</div>
                  <p className="text-gray-300">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 新增：发展路线图 */}
        <section className="py-20 px-4 bg-dark/50 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-4"
            >
              发展路线图
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-center text-gray-400 mb-12"
            >
              清晰的发展规划，持续进化的AI助手
            </motion.p>
            <div className="space-y-12">
              {roadmap.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="w-full md:w-1/3 text-center md:text-right">
                    <div className="text-2xl font-bold text-primary mb-2">{phase.phase}</div>
                    <div className="text-secondary">{phase.timeline}</div>
                  </div>
                  <div className="hidden md:block w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.goals.map((goal, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 mt-2 rounded-full bg-primary mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 新增：生态系统 */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-4"
            >
              完整生态系统
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-center text-gray-400 mb-12"
            >
              构建全方位的Web3空投生态
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ecosystem.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 新增：数据安全系统 */}
        <section className="py-20 px-4 bg-dark/50 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-4"
            >
              零信任数据安全系统
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-center text-gray-400 mb-12"
            >
              全方位的数据安全保护，确保您的资产和隐私安全
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* 本地加密存储 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">本地加密存储</h3>
                <div className="space-y-4">
                  {localStorageFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 安全防护措施 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">多重安全防护</h3>
                <div className="space-y-4">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 安全指标 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-primary/20"
                >
                  <div className="absolute top-0 right-0 p-2">
                    <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      安全保障
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-400">{metric.label}</div>
                  <div className="mt-4 text-sm text-gray-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 新增：安全承诺 */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">我们的安全承诺</h3>
              <p className="text-gray-300 mb-6">
                您的安全始终是我们的首要考虑。我们承诺：
              </p>
              <ul className="space-y-4 text-left">
                <li className="flex items-center text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-sm">✓</span>
                  </span>
                  所有敏感数据均采用军工级加密存储在本地
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-sm">✓</span>
                  </span>
                  永不上传私钥等敏感信息到云端
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-sm">✓</span>
                  </span>
                  用户完全控制数据的存储和使用
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-sm">✓</span>
                  </span>
                  定期安全审计和漏洞修复
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 新增：智能任务管理系统 */}
        <section className="py-20 px-4 bg-dark/50 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-4"
            >
              智能任务管理系统
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-center text-gray-400 mb-12"
            >
              高效管理多账号空投任务，告别混乱和遗漏
            </motion.p>

            {/* 任务管理功能展示 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">多账号智能管理</h3>
                <div className="space-y-4">
                  {accountFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">任务追踪系统</h3>
                <div className="space-y-4">
                  {taskFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 任务状态展示 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {taskMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-primary/20"
                >
                  <div className="absolute top-0 right-0 p-2">
                    <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      实时更新
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-400">{metric.label}</div>
                  <div className="mt-4 text-sm text-gray-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 修改：安全验证通过指南 */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-4"
            >
              高级防女巫身份认证系统
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-center text-gray-400 mb-12"
            >
              基于链上行为分析的智能防女巫解决方案
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* 左侧：账号养成策略 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">防女巫特征构建</h3>
                <div className="space-y-6">
                  {accountGrowthTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{tip.title}</h4>
                        <p className="text-gray-400">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 右侧：智能操作建议 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">多维度防女巫策略</h3>
                <div className="space-y-8">
                  {operationTips.map((tip, index) => (
                    <div key={index} className="relative">
                      <div className="flex justify-between mb-2">
                        <span className="text-white">{tip.title}</span>
                        <span className="text-primary font-bold">{tip.importance}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: tip.importanceLevel }}
                          transition={{ duration: 1 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                      <p className="text-sm text-gray-400 mt-2">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 底部：关键提示 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center bg-primary/10 p-6 rounded-lg border border-primary/20"
            >
              <h4 className="text-xl font-bold text-primary mb-4">💡 核心防女巫要素</h4>
              <p className="text-gray-300 mb-4">
                合理规划每个账号的操作时间和行为模式，建立独特的账号特征
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-primary">
                  <div className="font-bold mb-1">分散</div>
                  <div>合理分配操作时间</div>
                </div>
                <div className="text-primary">
                  <div className="font-bold mb-1">独特</div>
                  <div>建立个性化特征</div>
                </div>
                <div className="text-primary">
                  <div className="font-bold mb-1">稳定</div>
                  <div>保持正常使用频率</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 新增：智能提醒系统 */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-4"
            >
              智能提醒系统
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-center text-gray-400 mb-12"
            >
              永不错过关键时机，智能跟踪每个任务
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reminderFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-primary/20"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <div className="bg-dark/30 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">示例提醒：</div>
                    <div className="text-primary">{feature.example}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA部分 */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold mb-6"
            >
              准备好开启空投新时代了吗？
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-gray-400 mb-8"
            >
              加入我们，体验AI驱动的智能空投助手
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-dark font-bold py-4 px-12 rounded-full text-xl"
            >
              立即开始
            </motion.button>
          </div>
        </section>
      </div>
    </main>
  )
}

const features = [
  {
    title: "自主决策",
    description: "采用先进的强化学习算法，像真人一样思考和行动，持续优化策略"
  },
  {
    title: "智能分析",
    description: "多维度数据分析，深度理解项目价值，准确评估投资风险与收益"
  },
  {
    title: "全天候运行",
    description: "7×24小时不间断监控，自动识别和把握最佳投资时机"
  }
]

const technologies = [
  {
    title: "大语言模型集成",
    description: "融合多个顶级大语言模型，提供强大的认知和决策能力",
    points: [
      "GPT-4级别的理解能力",
      "多模态信息处理",
      "实时市场分析",
      "自适应策略调整"
    ]
  },
  {
    title: "神经网络决策系统",
    description: "基于深度学习的智能决策系统，不断优化投资策略",
    points: [
      "强化学习算法",
      "多层神经网络",
      "实时风险评估",
      "收益率预测"
    ]
  }
]

const metrics = [
  {
    value: "99.9%",
    label: "任务完成率"
  },
  {
    value: "0.1s",
    label: "平均响应时间"
  },
  {
    value: "100+",
    label: "支持的项目类型"
  }
]

const aiCapabilities = [
  {
    title: "认知理解",
    description: "深度理解项目文档、社区动态和市场趋势，实现智能决策"
  },
  {
    title: "策略优化",
    description: "基于强化学习持续优化投资策略，提升收益率"
  },
  {
    title: "风险控制",
    description: "多维度风险评估，建立完整的风险防控体系"
  },
  {
    title: "自主进化",
    description: "通过深度学习不断进化，适应市场变化"
  }
]

const roadmap = [
  {
    phase: "第一阶段",
    timeline: "2025 Q1",
    title: "基础能力构建",
    goals: [
      "构建核心AI决策系统",
      "实现基础的项目分析能力",
      "建立初步的风险评估模型",
      "完成基础功能测试和优化"
    ]
  },
  {
    phase: "第二阶段",
    timeline: "2025 Q2",
    title: "能力深化与扩展",
    goals: [
      "整合多个大语言模型增强认知能力",
      "优化决策算法提升准确率",
      "扩展支持更多类型的空投项目",
      "建立完整的数据分析体系"
    ]
  },
  {
    phase: "第三阶段",
    timeline: "2025 Q3",
    title: "生态系统构建",
    goals: [
      "推出API接口支持第三方集成",
      "建立社区治理机制",
      "实现跨链资产管理",
      "完善风险控制体系"
    ]
  },
  {
    phase: "第四阶段",
    timeline: "2025 Q4",
    title: "全面进化",
    goals: [
      "实现完全自主的决策能力",
      "建立去中心化的治理结构",
      "推出创新的激励机制",
      "构建完整的Web3空投生态"
    ]
  }
]

const ecosystem = [
  {
    title: "智能决策系统",
    description: "基于深度学习的核心决策引擎",
    features: [
      "多模型融合",
      "实时策略优化",
      "风险收益平衡",
      "自适应调整"
    ]
  },
  {
    title: "资产管理系统",
    description: "安全可靠的资产管理方案",
    features: [
      "多链支持",
      "智能合约交互",
      "资产安全保护",
      "收益最大化"
    ]
  },
  {
    title: "社区生态监控系统",
    description: "智能化的社区信息分析系统",
    features: [
      "社区热度分析",
      "项目活跃度追踪",
      "信息价值评估",
      "机会实时预警"
    ]
  }
]

const accountFeatures = [
  {
    title: "智能分组管理",
    description: "自动对钱包地址进行分组，基于任务类型、完成进度等多维度智能分类"
  },
  {
    title: "状态同步追踪",
    description: "实时监控每个账号的任务完成情况，自动同步链上数据和社交媒体状态"
  },
  {
    title: "风险控制系统",
    description: "智能分配任务间隔，模拟真实用户行为，降低批量操作风险"
  },
  {
    title: "资产监控",
    description: "实时跟踪每个账号的资产变化，智能预警异常情况"
  }
]

const taskFeatures = [
  {
    title: "任务智能分配",
    description: "基于账号历史、活跃度、资产状况等因素，智能分配最适合的任务"
  },
  {
    title: "进度实时追踪",
    description: "可视化展示任务完成进度，自动标记已完成和待办任务"
  },
  {
    title: "智能优先级",
    description: "自动分析任务价值和时效性，优先处理高价值任务"
  },
  {
    title: "失败任务重试",
    description: "自动检测失败任务，智能分析原因并制定重试策略"
  }
]

const taskMetrics = [
  {
    value: "98.5%",
    label: "任务完成率",
    description: "智能调度确保任务高效完成"
  },
  {
    value: "10000+",
    label: "日均任务处理量",
    description: "强大的并行处理能力"
  },
  {
    value: "0.1%",
    label: "任务出错率",
    description: "多重验证确保准确性"
  }
]

const reminderFeatures = [
  {
    title: "任务截止提醒",
    description: "智能跟踪任务时间，提前发出提醒，确保不错过重要机会",
    example: "⚠️ 提醒：XYZ项目空投任务将在12小时后结束，还有2个任务未完成"
  },
  {
    title: "异常情况预警",
    description: "实时监控任务执行状态，及时发现并提醒异常情况",
    example: "🔔 检测到账号A的Twitter任务验证失败，建议手动检查授权状态"
  },
  {
    title: "优质机会提示",
    description: "智能分析项目价值，第一时间推送高价值空投机会",
    example: "🎯 发现高价值空投：DEF项目预估价值>1000U，建议优先处理"
  },
  {
    title: "智能行动建议",
    description: "基于历史数据和市场分析，提供智能化的行动建议",
    example: "📊 建议：当前是执行XYZ项目任务的最佳时机，预计可节省30%Gas"
  }
]

const accountGrowthTips = [
  {
    title: "链上数据养成",
    description: "建立合理的交易记录和持币记录，形成真实用户的资产特征"
  },
  {
    title: "社交账号运营",
    description: "保持社交账号的日常活跃度，建立真实的社交互动"
  },
  {
    title: "操作习惯培养",
    description: "形成独特的操作时间和行为模式，避免批量特征"
  },
  {
    title: "资产流向规划",
    description: "合理规划资金流向，建立正常的资产往来记录"
  }
]

const operationTips = [
  {
    title: "操作时间间隔",
    importance: "极其重要",
    importanceLevel: "100%",
    description: "保持合理的操作时间间隔，避免密集操作"
  },
  {
    title: "IP地址管理",
    importance: "非常重要",
    importanceLevel: "90%",
    description: "合理使用网络环境，避免批量操作特征"
  },
  {
    title: "互动数据构建",
    importance: "重要",
    importanceLevel: "80%",
    description: "建立真实的社交互动和链上活动数据"
  }
]

const localStorageFeatures = [
  {
    title: "本地加密存储",
    description: "所有敏感数据使用AES-256加密算法存储在本地，密钥由用户完全控制"
  },
  {
    title: "多重备份机制",
    description: "支持加密备份到本地文件，确保数据安全的同时防止意外丢失"
  },
  {
    title: "私钥隔离存储",
    description: "私钥采用硬件级隔离存储，独立加密保护，确保最高安全性"
  },
  {
    title: "数据自主管理",
    description: "用户可完全控制数据的存储位置和使用方式，支持一键数据清除"
  }
]

const securityFeatures = [
  {
    title: "硬件级安全防护",
    description: "支持硬件钱包集成，关键操作需要硬件设备确认，防止恶意攻击"
  },
  {
    title: "异常行为监控",
    description: "实时监控和预警可疑操作，多重验证机制确保账户安全"
  },
  {
    title: "防钓鱼保护",
    description: "内置域名安全检查，自动识别和拦截钓鱼网站，保护资产安全"
  },
  {
    title: "安全环境检测",
    description: "运行环境安全检测，发现风险及时预警，确保操作环境安全"
  }
]

const securityMetrics = [
  {
    value: "100%",
    label: "本地加密存储",
    description: "所有敏感数据均在本地加密存储"
  },
  {
    value: "0",
    label: "安全事故",
    description: "零安全事故记录"
  },
  {
    value: "24/7",
    label: "安全监控",
    description: "全天候安全监控和防护"
  }
] 