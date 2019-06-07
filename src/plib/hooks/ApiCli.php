<?php

class Modules_Skeleton_ApiCli extends \pm_Hook_ApiCli
{

    /**
     * @param string $line
     */
    private function writeLine($line)
    {
        $this->stdout($line . PHP_EOL);
    }

    /**
     * @param string $message
     */
    private function error($message)
    {
        $this->stderr($message . PHP_EOL);

        exit(1);
    }

    public function helpCommand()
    {
        $this->writeLine('Available commands:');
        $this->writeLine('    --help          Display this help page');
        $this->writeLine('');
        $this->writeLine('Examples:');
    }
}
