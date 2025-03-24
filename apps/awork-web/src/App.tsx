import '@fe-nexus/ui/styles/theme.css';

import { squared } from '@fe-nexus/core';
import { Button } from '@fe-nexus/ui';

const App = () => {
  return (
    <div className="dark">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
        <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl max-w-2xl w-full">
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center">
                Rsbuild with React
              </h1>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full blur-xl" />
            </div>

            <p className="text-gray-300 text-center text-lg leading-relaxed">
              开启您的下一代前端开发之旅。让我们一起创造非凡的数字体验。
            </p>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <code className="font-mono text-emerald-400 block">
                计算示例: squared(2) = {squared(2)}
              </code>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                立即开始
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                了解更多
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-3 mt-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-75" />
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse delay-150" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
